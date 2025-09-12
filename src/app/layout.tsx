import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
    title: "AVEN.IA - Agents IA pour TPME",
    description: "Agents IA intelligents pour automatiser vos échanges clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className="bg-[#F5F3F0] text-[#0F172A]">
        {/* Header toujours affiché */}
        <Header />

        {/* Contenu spécifique à la page */}
        <main>{children}</main>

        {/* Footer toujours affiché */}
        </body>
        </html>
    );
}
