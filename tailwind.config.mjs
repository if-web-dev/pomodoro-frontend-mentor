/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'hover:text-[#F87070]',
    'hover:text-[#70F3F8]',
    'hover:text-[#D881F8]',
    'bg-[#161932]',
    'bg-[#F87070]',
    'bg-[#70F3F8]',
    'bg-[#D881F8]',
    'bg-[#161932]',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
