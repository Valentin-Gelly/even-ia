import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "AVEN.IA",
    description: "Agence IA moderne et premium",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
