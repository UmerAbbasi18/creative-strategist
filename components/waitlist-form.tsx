"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string) {
  if (email.length > 254) return false;

  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex !== email.lastIndexOf("@")) return false;

  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (!local || !domain) return false;
  if (domain.startsWith(".") || domain.endsWith(".") || !domain.includes(".")) return false;

  return true;
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }

      setState("success");
      setMessage(data.message ?? "You're on the waitlist.");
      setEmail("");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        Work email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@brand.com"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
          aria-describedby="waitlist-note"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      <p id="waitlist-note" className="text-xs text-slate-500 dark:text-slate-400">
        We respect your privacy. No spam, unsubscribe anytime.
      </p>
      {state !== "idle" && (
        <p
          role="status"
          className={`text-sm ${
            state === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
