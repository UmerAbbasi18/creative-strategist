import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    return null;
  }

  return { apiKey, audienceId, serverPrefix };
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || !EMAIL_PATTERN.test(email.trim())) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const config = getMailchimpConfig();

    if (!config) {
      return NextResponse.json(
        { message: "Waitlist is not configured yet. Please try again soon." },
        { status: 503 }
      );
    }

    const response = await fetch(
      `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`creative-strategist:${config.apiKey}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email.trim().toLowerCase(),
          status: "subscribed",
          tags: ["creative-strategist-waitlist"],
        }),
      }
    );

    if (!response.ok) {
      const error = (await response.json()) as { title?: string; detail?: string };
      const isAlreadySubscribed = error.title === "Member Exists";

      return NextResponse.json(
        {
          message: isAlreadySubscribed
            ? "You're already on the waitlist."
            : error.detail ?? "Unable to join waitlist right now. Please try again shortly.",
        },
        { status: isAlreadySubscribed ? 200 : 502 }
      );
    }

    return NextResponse.json(
      { message: "Success! You're on the Creative Strategist waitlist." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
