import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        h3: ['1.875rem', { lineHeight: '1.2', fontWeight: '600' }],
        h4: ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        h5: ['1.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        h6: ['1.125rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
