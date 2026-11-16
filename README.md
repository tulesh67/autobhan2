# Premium Garage Website

React + Vite + TypeScript + Tailwind v3 + Framer Motion + Lucide.

```
npm install
npm run dev      # development
npm run build    # type-check + production build
```

## Deploy to GitHub Pages

Pushing to `main` builds the site and deploys it to GitHub Pages. The custom
domain `autobhancars.com` is configured via `public/CNAME`. The published site
is available at <https://autobhancars.com/>.

## Replace before launch
- `src/data.ts`: update the `BRAND` name if needed (currently "AUTOBHAN").
- `src/components/Extras.tsx`: contact details (placeholders), demo reviews, gallery tiles.
- Vehicle photos are in `public/cars/`; update the image paths in `src/data.ts` if you replace them.
- Bookings are stored in `localStorage` under `garage_bookings` (frontend only).
