# Project Documentation: Chroma Shine Dev Portfolio

## 1. Project Overview

This project is a modern, responsive personal portfolio website built for a Full-Stack Developer and Generative AI enthusiast. It features a sleek dark-themed UI with glassmorphism effects, smooth animations, and interactive elements. The portfolio showcases skills, experience, projects, and provides contact information.

## 2. Technology Stack

The project leverages a modern frontend stack for performance and developer experience:

- **Core**: [React](https://react.dev/) (v18) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
  - [TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) for animation utilities.
- **UI Components**:
  - [Shadcn UI](https://ui.shadcn.com/) (built on Radix UI) for accessible, reusable components.
  - [Lucide React](https://lucide.dev/) for icons.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex animations and transitions.
- **Routing**: [React Router DOM](https://reactrouter.com/) for client-side routing.
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (React Query).
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/) and built-in Toaster.

## 3. Folder Structure

The project follows a standard Vite + React structure:

```
chroma-shine-dev/
├── public/                 # Static assets (favicons, robots.txt, resume)
├── src/
│   ├── assets/             # Images and global styles
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Shadcn UI primitives (Button, Input, etc.)
│   │   └── ...             # Feature-specific components (Navbar, HeroSection, etc.)
│   ├── hooks/              # Custom React hooks (e.g., use-toast)
│   ├── lib/                # Utility functions (utils.ts)
│   ├── pages/              # Page components (Index, NotFound)
│   ├── test/               # Test setup
│   ├── App.tsx             # Main application component & Routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind directives
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 4. Component Analysis

### Core Layout

- **`App.tsx`**: Sets up providers (QueryClient, Tooltip, Toaster) and the Router. It defines the main routes (`/` for Index, `*` for NotFound).
- **`Navbar.tsx`**: A responsive navigation bar with:
  - Glassmorphism effect on scroll.
  - smooth scrolling to sections (`#about`, `#skills`, etc.).
  - Mobile menu drawer.
- **`Footer.tsx`**: Simple footer with copyright and dynamic year.

### Sections (in `src/components/`)

- **`HeroSection.tsx`**: The landing area with:
  - Typing effect for roles.
  - Animated background orbs and particles.
  - Profile image with glow effects.
  - Call-to-action buttons (Contact, Resume Download, LinkedIn).
- **`AboutSection.tsx`**: Detailed introduction.
- **`SkillsSection.tsx`**: Displays technical skills using icons and lists.
- **`ExperienceSection.tsx`**: Timeline or list of professional experience.
- **`ProjectsSection.tsx`**: Showcase of projects with descriptions and links.
- **`EducationSection.tsx`**: Academic background.
- **`ContactSection.tsx`**: A contact form (likely using React Hook Form) and contact details.

### UI Primitives (`src/components/ui/`)

Contains atomic components like `button.tsx`, `card.tsx`, `input.tsx`, etc., which are highly customizable and accessible.

## 5. Design & Theming

- **Colors**: Defined in `tailwind.config.ts` and `index.css` using CSS variables (HSL values) for easy theming (e.g., `--primary`, `--background`).
- **Typography**: Uses modern sans-serif fonts (likely Inter or similar) configured in Tailwind.
- **Dark Mode**: The app utilizes a dark theme by default (class-based).

## 6. Setup and Installation

1.  **Prerequisites**: Node.js (v18+ recommended).
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:8080` (or the port shown in terminal).
4.  **Build for Production**:
    ```bash
    npm run build
    ```
5.  **Preview Production Build**:
    ```bash
    npm run preview
    ```

## 7. Key Features Implementation Details

- **Resume Download**: Implemented in `HeroSection.tsx`, pointing to `/Himanshu_Kashyap_Resume.pdf` in the `public` folder.
- **Dynamic Title**: The document title is set in `index.html`.
- **Favicon**: Configured in `index.html`.
