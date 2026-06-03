# Creative Strategist Landing Page

Modern, conversion-focused landing page and waitlist system for **Creative Strategist** built with **Next.js 14 + TypeScript + Tailwind CSS**.

## Features

- Responsive landing page (hero, services, benefits, process, waitlist, footer)
- Waitlist form with client/server email validation
- Mailchimp-ready API integration (`/api/waitlist`)
- Accessible form states and error handling
- SEO metadata configured
- Netlify-ready configuration

## Tech Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Netlify (`@netlify/plugin-nextjs`)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and set your Mailchimp values:

```bash
cp .env.example .env.local
```

Required variables:

- `MAILCHIMP_API_KEY`
- `MAILCHIMP_AUDIENCE_ID`
- `MAILCHIMP_SERVER_PREFIX` (e.g. `us1`)

## Mailchimp Setup Notes

- Create or choose an Audience in Mailchimp.
- Generate an API key in Mailchimp account settings.
- Use the data center prefix from your API key (`usX`).

## Deploy to Netlify

1. Connect this repository to Netlify.
2. Build command: `npm run build`
3. Publish directory is handled by `@netlify/plugin-nextjs`.
4. Add environment variables from `.env.example` in Netlify site settings.

After deploy, the waitlist form will submit directly to your Mailchimp audience through the API route.
