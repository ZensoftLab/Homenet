import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { navy: "#071B3A", ink: "#0A2450", sky: "#1B75F0", mist: "#F4F8FF" }, boxShadow: { card: "0 18px 45px -25px rgb(7 27 58 / .35)" } } }, plugins: [] } satisfies Config;
