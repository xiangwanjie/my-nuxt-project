// src/vite-env.d.ts
interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, { default: string }>;
  }
  