This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## PayU Payment Gateway

The "Pay Now" flow (`/pay-now`) uses PayU hosted checkout. To enable it:

1. Copy `.env.local.example` to `.env.local`.
2. From your PayU dashboard (Manage Checkout → Payment Gateway, or the Developers
   section), copy **Merchant Key** and **Merchant Salt V1** and paste them into
   `PAYU_KEY` and `PAYU_SALT`. Paste the values — do not type them by hand.
3. Keep `PAYU_MODE=test` while testing; switch to `live` for production.
4. In production, set `NEXT_PUBLIC_SITE_URL` to your real domain so PayU's
   success/failure callbacks resolve correctly.

Flow: `/pay-now` form → `POST /api/payu/initiate` (signs the request with a
server-side SHA-512 hash) → browser auto-submits to PayU → PayU posts the result
to `/api/payu/callback` (which verifies the reverse hash) → user lands on
`/pay-now/success` or `/pay-now/failure`. The salt never reaches the browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
