# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js 13+ app using the `/app` directory structure, Tailwind CSS, and custom fonts/images.
- Major UI components are organized under `src/components/` by feature (e.g., `community/`, `ecosystem/`, `footer/`, etc.).
- Global styles are in `src/app/globals.css`.
- Assets (images, SVGs, fonts) are under `public/` and `src/assets/`.

## Key Workflows
- **Development:** Use `npm run dev` to start the local server at `http://localhost:3000`.
- **Build:** Use `npm run build` for production builds.
- **Linting:** ESLint config is in `eslint.config.mjs`.
- **Type Checking:** TypeScript config is in `tsconfig.json`.
- **Styling:** Tailwind config is in `tailwind.config.js` and `postcss.config.mjs`.

## Project-Specific Patterns
- **Component Organization:** Each feature has its own folder in `src/components/`. Shared components are in `src/components/Shared/`.
- **Page Routing:** Pages are defined in `src/app/` (e.g., `src/app/page.tsx`, `src/app/stake/page.tsx`).
- **Providers:** App-wide providers are set up in `src/app/providers.tsx`.
- **Wagmi Integration:** Web3 wallet logic is in `src/app/wagmi.ts`.
- **Assets:** Use images from `public/images/` and SVGs from `src/assets/svg_icons/`.

## External Integrations
- **Web3:** Wallet connection logic is handled via Wagmi in `src/app/wagmi.ts`.
- **Fonts:** Custom fonts are loaded from `public/fonts/`.

## Conventions
- Use TypeScript for all new code (`.tsx`, `.ts`).
- Use Tailwind utility classes for styling.
- Place feature-specific logic and UI in their respective folders.
- Use `src/utils/index.ts` for shared utility functions.

## Examples
- To add a new feature, create a folder in `src/components/` and a corresponding page in `src/app/` if needed.
- To add a new image, place it in `public/images/` and reference it in your component.
- To update global styles, edit `src/app/globals.css`.

## References
- See `README.md` for basic setup and Next.js links.
- See `src/app/providers.tsx` for context/provider setup.
- See `src/app/wagmi.ts` for wallet logic.

---
If any conventions or workflows are unclear, ask the user for clarification before proceeding.
