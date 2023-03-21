/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        animation: {
            "focus-in-contract-bck": "focus-in-contract-bck 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
        },
        keyframes: {
            "focus-in-contract-bck": {
                "0%": {
                    "letter-spacing": "1em",
                    transform: "translateZ(300px)",
                    filter: "blur(12px)",
                    opacity: "0"
                },
                to: {
                    transform: "translateZ(12px)",
                    filter: "blur(0)",
                    opacity: "1"
                }
            }
        }
    }
}
,
  plugins: [],
};
