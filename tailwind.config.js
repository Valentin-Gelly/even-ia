/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Palette principale
                neonBlue: "#00B9FF",
                anthracite: "#1C1C1E",
                silver: "#8E8E93",
                pureWhite: "#FFFFFF",

                // Palette secondaire
                violetGradient: "#9B00FF",
                turquoise: "#00FFC8",
                lightGray: "#F2F2F7",
                darkGray: "#2C2C2E",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // par défaut
                neuemontreal: ["NeueMontreal", "sans-serif"], // option branding titres
                sfpro: ["SF Pro", "sans-serif"], // si tu l’ajoutes en local
            },
            borderRadius: {
                xl: "12px", // recommandation glassmorphism
            },
            boxShadow: {
                glass: "0 8px 32px rgba(0, 0, 0, 0.37)", // ombre douce premium
            },
        },
    },
    plugins: [],
}
