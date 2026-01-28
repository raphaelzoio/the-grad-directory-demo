# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Graduate Directory - A recruitment platform connecting Oxbridge students/graduates with premium employers. Built with Next.js 16, React 19, and TypeScript. Uses mock data for demonstration purposes (no backend database).

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Run production server
```

Note: `next.config.mjs` ignores TypeScript build errors (`typescript.ignoreBuildErrors: true`), so `npm run build` may pass even with type issues. Run `npx tsc --noEmit` for strict type checking.

## Architecture

### App Router Structure
- Uses Next.js App Router with file-based routing in `/app`
- Dynamic routes: `/dashboard/graduates/[id]` for profiles, `/jobs/[id]` for job details
- Loading skeletons (`loading.tsx`) provide UX during navigation

### Role-Based System
Two user types managed via browser storage:
```typescript
// Key: "userType" in sessionStorage/localStorage
type UserType = "employer" | "graduate"
```

The dashboard (`/app/dashboard/page.tsx`) renders completely different content based on role:
- **Graduates**: Browse jobs, track applications, edit profile
- **Employers**: Search graduates with advanced filters, post jobs, view candidate profiles

### Component Structure
- `/components/ui/` - shadcn/ui components (button, card, dialog, input, etc.)
- `/components/` - Custom components (theme-provider, uk-city-autocomplete)
- `/lib/utils.ts` - Tailwind CSS class merging utility (`cn()`)

shadcn/ui config in `components.json` uses "new-york" style with Lucide icons.

### Mock Data Pattern
All data is embedded as arrays directly in page components:
- `mockGraduates[]` - Graduate profiles with education, skills, experience
- `mockJobs[]` / `mockSavedJobs[]` - Job listings
- `mockApplications[]` - Application tracking with status
- `employerConversations[]` / `employerMessages[]` - Messaging data

### Styling
- Tailwind CSS 4 with PostCSS integration
- Theme variables in `/styles/globals.css` using oklch() color space
- Light/dark mode via next-themes
- Design: Cream theme with dark green accents, serif headers (Merriweather)

## Key Patterns

### Path Aliases
`@/*` maps to project root (configured in tsconfig.json):
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Form Handling
Uses controlled inputs with React state. react-hook-form and Zod are installed but forms currently use simple useState patterns.

### Dropdown Filters
Custom filter components in dashboard use click-outside detection pattern:
```typescript
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => { ... }
  document.addEventListener("mousedown", handleClickOutside)
  return () => document.removeEventListener("mousedown", handleClickOutside)
}, [])
```

## Deployment

- Hosted on Vercel with auto-sync from v0.app
- Vercel Analytics integrated for monitoring
