# moreSwift website

The homepage for [moreSwift](https://moreswift.dev), the open-source collective behind
[SwiftCrossUI](https://swiftcrossui.dev) and [Swift Bundler](https://swiftbundler.dev).

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with the Cloudflare adapter
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn-svelte](https://shadcn-svelte.com) components (in `src/lib/components/ui`)
- [Phosphor](https://phosphoricons.com) icons via `phosphor-svelte`
- Source Serif 4, Source Sans 3 and JetBrains Mono, self-hosted with Fontsource

## Developing

```sh
bun install
bun run dev
```

The dev server runs at <http://localhost:5175>.

Useful checks:

```sh
bun run check   # svelte-check
bun run lint    # prettier + eslint
bun run build   # production build
```

## Structure

- `src/routes/(pages)/+page.svelte` — homepage sections
- `src/lib/components/site/` — page-level components (hero, header, project/video cards, etc.)
- `src/lib/components/ui/` — shadcn-svelte primitives
- `src/lib/content/` — projects, videos, values, community links and platform data
- `src/lib/site.ts` — external URLs and navigation
- `src/routes/layout.css` — theme tokens, fonts and shared utilities
- `static/images/showcase/` — cross-platform app screenshots
- `static/images/video-thumbnails/` — YouTube thumbnails

Prefer reusing the shadcn primitives (or making a shared site component more generic) over
writing bespoke markup for each section.
