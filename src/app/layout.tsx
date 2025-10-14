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
            <div
                className="mx-auto max-w-7xl rounded-2xl md:border md:border-black/5 md:bg-white/60 p-6 text-center text-sm text-slate-600 shadow backdrop-blur">
                © {new Date().getFullYear()} AVEN.IA — Tous droits réservés. Réalisé par <a href="https://www.linkedin.com/in/valentin-gelly/" className="underline" target="_blank">Valentin GELLY</a>
            </div>
        <script type="text/javascript">
            (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];

            // ===== Utils =====
            const injectStyles = (root, css) => {
            if (!root) return;
            const id = 'vf-custom-styles';
            if (root.getElementById && root.getElementById(id)) return;
            const style = document.createElement('style');
            style.id = id;
            style.textContent = css;
            root.appendChild(style);
        };
            const waitForEl = (selector, root = document) => new Promise(resolve => {
            const el = root.querySelector(selector);
            if (el) return resolve(el);
            const obs = new MutationObserver(() => {
            const found = root.querySelector(selector);
            if (found) { obs.disconnect(); resolve(found); }
        });
            obs.observe(root, { childList: true, subtree: true });
        });

            // ===== THEME: Liquid Glass + Brand =====
            const CHAT_CSS = `
                /* Ajoutez ici le CSS pour le thème du chat */
            `;

            const LAUNCHER_CSS = `
                /* Ajoutez ici le CSS pour le launcher */
            `;

            // ===== Load Voiceflow + inject CSS (Shadow DOM safe) =====
            v.onload = function() {
            window.voiceflow.chat.load({
            verify: { projectID: '68e936c2f8ed6ddca7ce5da5' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: { url: 'https://runtime-api.voiceflow.com' }
        });

            // Injection styles (tags possibles selon build)
            const chatTags = ['vf-chat', 'voiceflow-chat'];
            const launcherTags = ['vf-launcher', 'voiceflow-launcher'];

            chatTags.forEach(tag => waitForEl(tag).then(el => injectStyles(el.shadowRoot || el, CHAT_CSS)));
            launcherTags.forEach(tag => waitForEl(tag).then(el => injectStyles(el.shadowRoot || el, LAUNCHER_CSS)));
        };

            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
        })(document, 'script');
        </script>
        </body>

        </html>
    );
}
