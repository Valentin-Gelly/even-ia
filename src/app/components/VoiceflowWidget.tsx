"use client";

import { useEffect } from "react";
// global.d.ts
interface VoiceflowChat {
    load: (config: {
        verify: { projectID: string };
        url: string;
        versionID: string;
        voice: { url: string };
    }) => void;
}

interface Window {
    voiceflow?: {
        chat: VoiceflowChat;
    };
}

export default function VoiceflowWidget() {
    useEffect(() => {
        const injectStyles = (root: Document | ShadowRoot | null, css: string): void => {
            if (!root) return;
            const id = "vf-custom-styles";
            if (root.getElementById && root.getElementById(id)) return;
            const style = document.createElement("style");
            style.id = id;
            style.textContent = css;
            root.appendChild(style);
        };

        const waitForEl = (selector: string, root: Document | HTMLElement = document): Promise<Element> =>
            new Promise((resolve) => {
                const el = root.querySelector(selector);
                if (el) return resolve(el);
                const obs = new MutationObserver(() => {
                    const found = root.querySelector(selector);
                    if (found) {
                        obs.disconnect();
                        resolve(found);
                    }
                });
                obs.observe(root, { childList: true, subtree: true });
            });

        const CHAT_CSS = `
            :host, :root {
                --vf-text: #F5F7FA;
                --vf-bg: rgba(10, 12, 18, 0.45);
                --vf-stroke: rgba(255,255,255,0.16);
                --vf-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
                --vf-accent: #7A3CF0;
                --vf-blue: #007AFF;
                --vf-user: rgba(0,122,255,0.18);
                --vf-bot: rgba(255,255,255,0.12);
            }
            /* Ajoutez ici le reste du CSS pour le thème */
        `;

        const LAUNCHER_CSS = `
            :host { --vf-launch-size: 64px; }
            button, .button, [role="button"] {
                width: var(--vf-launch-size);
                height: var(--vf-launch-size);
                border-radius: 999px;
                background:
                    radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,0.65), rgba(255,255,255,0) 60%),
                    linear-gradient(135deg, rgba(122,60,240,0.6), rgba(0,122,255,0.55));
                border: 1px solid rgba(255,255,255,0.25);
                box-shadow: 0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.35);
                backdrop-filter: blur(10px) saturate(160%);
                animation: vf-bounce 3s ease-in-out infinite;
                overflow: hidden;
            }
            /* Ajoutez ici le reste du CSS pour le launcher */
        `;

        const script = document.createElement("script");
        script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
                (window as Window).voiceflow?.chat.load({
                    verify: { projectID: "68e936c2f8ed6ddca7ce5da5" },
                    url: "https://general-runtime.voiceflow.com",
                    versionID: "production",
                    voice: { url: "https://runtime-api.voiceflow.com" },
                });

            const chatTags = ["vf-chat", "voiceflow-chat"];
            const launcherTags = ["vf-launcher", "voiceflow-launcher"];

            chatTags.forEach((tag) =>
                waitForEl(tag).then((el) => {
                    const root = (el as HTMLElement).shadowRoot || null;
                    injectStyles(root, CHAT_CSS);
                })
            );

            launcherTags.forEach((tag) =>
                waitForEl(tag).then((el) => {
                    const root = (el as HTMLElement).shadowRoot || null;
                    injectStyles(root, LAUNCHER_CSS);
                })
            );
        };

        script.onerror = (e) => {
            console.error("Voiceflow widget failed to load", e);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}