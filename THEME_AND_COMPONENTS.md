# Theme Configuration and Installed Components

This document outlines the current theme colors and the set of UI components installed in the project.

## 🎨 Theme Colors

The color palette is managed via CSS variables in `src/index.css` and mapped to Tailwind configuration classes.

### Light Mode (`:root`)

- **Background**: `hsl(var(--background))` → `hsl(240, 4%, 95%)`
- **Foreground** (Text): `hsl(var(--foreground))` → `hsl(240, 5%, 10%)`
- **Primary**: `hsl(var(--primary))` → `hsl(258, 89%, 66%)` - **(Brand Color)**
- **Primary Foreground**: `hsl(250, 100%, 97%)`
- **Secondary**: `hsl(240, 5%, 33%)`
- **Muted**: `hsl(240, 4%, 83%)`
- **Accent**: `hsl(269, 100%, 98%)`
- **Destructive** (Errors): `hsl(0, 72%, 50%)`
- **Card**: `hsl(0, 0%, 98%)`
- **Popover**: `hsl(240, 5%, 90%)`
- **Border/Input**: `hsl(240, 4%, 83%)`
- **Ring**: `hsl(258, 89%, 66%)`

### Dark Mode (`.dark`)

- **Background**: `hsl(var(--background))` → `hsl(240, 5%, 6%)`
- **Foreground** (Text): `hsl(var(--foreground))` → `hsl(0, 0%, 95%)`
- **Primary**: `hsl(var(--primary))` → `hsl(255, 91%, 76%)` - **(Brand Color)**
- **Primary Foreground**: `hsl(261, 72%, 12%)`
- **Secondary**: `hsl(240, 4%, 18%)`
- **Muted**: `hsl(240, 3%, 20%)`
- **Accent**: `hsl(273, 86%, 15%)`
- **Destructive** (Errors): `hsl(0, 84%, 60%)`
- **Card**: `hsl(240, 4%, 10%)`
- **Popover**: `hsl(240, 5%, 12%)`
- **Border/Input**: `hsl(240, 4%, 16%)`
- **Ring**: `hsl(255, 91%, 76%)`

### Border Radii

- `--radius: 0.5rem` (Mapped to `sm`, `md`, and `lg` in Tailwind)

_(For gradient colors, glassmorphism layers, and charting variables, refer to `src/index.css`)_

---

## 🧩 Installed Components (Shadcn UI)

These components are built using Radix UI primitives and styled with Tailwind CSS. They reside in `src/components/ui/`.

### Layout & Navigation

- `accordion.tsx`
- `breadcrumb.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `separator.tsx`
- `tabs.tsx`

### Forms & Input

- `button.tsx`
- `checkbox.tsx`
- `form.tsx` (React Hook Form wrapper)
- `input-otp.tsx`
- `input.tsx`
- `label.tsx`
- `radio-group.tsx`
- `select.tsx`
- `slider.tsx`
- `switch.tsx`
- `textarea.tsx`
- `toggle-group.tsx`
- `toggle.tsx`

### Overlays, Dialogs & Indicators

- `alert-dialog.tsx`
- `alert.tsx`
- `badge.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `hover-card.tsx`
- `popover.tsx`
- `progress.tsx`
- `sheet.tsx`
- `skeleton.tsx`
- `tooltip.tsx`

### Display & Advanced

- `avatar.tsx`
- `calendar.tsx` (Uses `react-day-picker`)
- `card.tsx`
- `carousel.tsx` (Uses `embla-carousel-react`)
- `chart.tsx` (Uses `recharts`)
- `command.tsx` (Uses `cmdk`)
- `pagination.tsx`
- `table.tsx`

### Notifications

- `sonner.tsx` (Sonner toasts)
- `toast.tsx` & `toaster.tsx` & `use-toast.ts` (Shadcn default toast)

### Other/Helpers

- `aspect-ratio.tsx`
- `collapsible.tsx`
- `sidebar.tsx`
