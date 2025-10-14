import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import VoiceflowWidget from "@/app/components/VoiceflowWidget";
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
    title: "AVEN.IA - Agents IA pour TPME",
    description: "Agents IA intelligents pour automatiser vos échanges clients.",
};


const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    }
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className={`bg-[#F5F3F0] text-[#0F172A] ${poppins.className}`}>
        {/* Header toujours affiché */}
        <Header />

        {/* Contenu spécifique à la page */}
        <main>{children}</main>

        {/* Footer toujours affiché */}
        <VoiceflowWidget />
            <div
                className="mx-auto max-w-7xl rounded-2xl md:border md:border-black/5 md:bg-white/60 p-6 text-center text-sm text-slate-600 shadow backdrop-blur">
                © {new Date().getFullYear()} AVEN.IA — Tous droits réservés. Réalisé par <a href="https://www.linkedin.com/in/valentin-gelly/" className="underline" target="_blank">Valentin GELLY</a>
            </div>
        </body>

        </html>
    );
}
