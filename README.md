# Wedding Invitation

A mobile-first React 18, Vite, and TypeScript wedding invitation.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalize the invitation

Edit [`src/data/wedding.ts`](src/data/wedding.ts) to change the couple's names and monogram, wedding date/time and timezone, venue and map link, story, quote, schedule, attire, menu, RSVP deadline and guest limit, and music title/path. The sections read their content from this single data module.

## Images and music

Replace `public/images/couple-placeholder.svg` with your own optimized photo and update the image source in `src/components/Story.tsx`. Replace `public/images/envelope-cover.png` to personalize the opening cover. Add your licensed audio file as `public/audio/song.mp3`, or update `music.src` in `src/data/wedding.ts`. Browser audio starts after a user gesture. See the `README.md` files in `public/images` and `public/audio`.

## RSVP setup

Create a form at [Formspree](https://formspree.io/), then set its endpoint in a local `.env` file:

```sh
VITE_FORMSPREE_URL=https://formspree.io/f/your-form-id
```

Restart the dev server after changing environment variables. Without this setting, the form displays a setup message instead of pretending an RSVP was submitted.

## Deploy

Push the project to a Git provider and import it into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the publish/output directory. Add `VITE_FORMSPREE_URL` to the host's environment variables before deploying.
