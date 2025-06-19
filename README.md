# Astro-nomy

A fork of the original [Astronomy](https://github.com/mickasmt/astro-nomy) project, upgraded to use **Astro v5**, **React 19**, and **Tailwind CSS v4**.

This project demonstrates modern web development with the latest versions of these powerful technologies.

![blog](public/og.jpg)

> **Note**
> This is a fork of the original project by [@miickasmt](https://twitter.com/miickasmt), upgraded to use the latest versions of Astro (v5), React (v19), and Tailwind CSS (v4).

## About this project

This fork demonstrates how to upgrade the original Astronomy project to use the latest versions of:

- **Astro v5** - The latest version with improved performance and features
- **React 19** - With the new React compiler and improved performance
- **Tailwind CSS v4** - The latest version with improved developer experience

The original project was an experiment to see how a modern app (with features like authentication, subscriptions, API routes, Markdown, Content Collections, etc.) would work in Astro v4 and shadcn/ui.

## Project Structure

```
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── icons/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Features

- **Astro v5** with improved performance and features
- **React 19** with the new React compiler
- **Tailwind CSS v4** with the latest improvements
- **Supabase** integration for authentication and database
  - Server-side rendering (SSR) with cookie-based auth
  - Client-side authentication
  - Custom auth helper functions
- **Resend** for sending transactional emails
  - Newsletter subscription confirmation
  - Waitlist signup confirmation
- Config files
- Views Transitions
- Routing and Layouts
- React components & hooks
- UI Components built using **shadcn/ui**
- Documentation and blog using **MDX** and **Content Collections**
- Validations using **Zod**
- Written in **TypeScript**
- 100/100 Lighthouse performance
- Minimal styling (make it your own!)
- RSS Feed support
- Sitemap support
- Data Fetching
- API Endpoint

## Roadmap

- [x] ~Dark mode~
- [x] ~Add Markdown & MDX support~
- [x] ~Sheet mobile nav~
- [x] ~Build **changelog pages**~
- [x] ~Build **waitlist with React Hook Form & Supabase**~
- [x] ~Build **newsletter with React Hook Form & Supabase**~
- [x] ~Add **Supabase Auth & Database** integration~
- [x] ~Build **auth/dashboard pages with Shadcn UI**~
- [x] ~Implement **newsletter & waitlist with Resend API**~
- [ ] Build **blog with Supabase** (work on it)
- [ ] Build **ecommerce pages** (work on it)
- [ ] Add search support for blog _(researching Pagefind vs Fuse.js options)_
- [ ] Add OG image for blog and others
- [ ] Add SEO component & metadata
- [ ] Subscriptions using Stripe (or Lemon Squeezy?)

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy the example environment file and update with your own values:

```sh
cp .env.example .env
```

3. Update the following environment variables in the `.env` file:

```
# Supabase - Get these from your Supabase project settings
PUBLIC_SUPABASE_URL=your-supabase-url
PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Resend - Get this from your Resend dashboard
RESEND_API_KEY=your-resend-api-key
```

4. Start the development server:

```sh
pnpm run dev
```

## Credit

- Original project [Astronomy](https://github.com/mickasmt/astro-nomy) by [@miickasmt](https://twitter.com/miickasmt)
- Upgraded to Astro v5, React 19, and Tailwind CSS v4
- The original theme was based off of the example app [Taxonomy](https://tx.shadcn.com/) by shadcn

## License

Licensed under the [MIT license](https://github.com/mickasmt/astro-nomy/blob/main/LICENSE.md).

## References

Pagefind

- https://www.hdwatts.com/blog/pagefind-static-search-astro-vercel-react/

Scroll Progress

- https://www.rafay99.com/blog/search-on-static-site/

- https://michael-andreuzza.medium.com/create-a-scroll-progress-bar-with-tailwind-css-and-javascript-36f2b2067ca6

- https://lexingtonthemes.com/tutorials/how-to-create-a-scroll-progress-bar-with-tailwind-css-and-javascript/

Loading

- https://github.com/florian-lefebvre/astro-loading-indicator
