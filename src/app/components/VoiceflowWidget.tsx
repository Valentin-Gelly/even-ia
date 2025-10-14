"use client";

import Script from "next/script";

export default function VoiceflowWidget() {
    // Fonction principale exécutée après le chargement du script Voiceflow
    const initVoiceflow = () => {
        // Utils pour injection CSS
        const injectStyles = (root: Document, css: string) => {
            if (!root) return;
            const id = "vf-custom-styles";
            if (root.getElementById(id)) return;
            const style = document.createElement("style");
            style.id = id;
            style.textContent = css;
            root.appendChild(style);
        };

        const waitForEl = (selector: string, root :Document | HTMLElement= document) =>
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

        // ===== Thème "Glass" principal =====
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
      .container, .wrapper, .panel, [class*="container"], [class*="panel"] {
        background: linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)) var(--vf-bg);
        backdrop-filter: saturate(140%) blur(14px);
        border: 1px solid var(--vf-stroke);
        border-radius: 16px;
        box-shadow: var(--vf-shadow);
      }
      .message, .bubble, [class*="message"], [class*="bubble"] { color: var(--vf-text); }
      .bubble.bot, .message.bot, [class*="bubble"][class*="bot"],
      [part="message"][data-author="assistant"],
      [role="listitem"][data-sender="assistant"] {
        background: linear-gradient(180deg, rgba(255,255,255,0.18), var(--vf-bot));
        border: 1px solid var(--vf-stroke);
        border-radius: 14px;
        backdrop-filter: blur(12px);
      }
      .bubble.user, .message.user, [class*="bubble"][class*="user"],
      [part="message"][data-author="user"] {
        background: linear-gradient(180deg, rgba(0,122,255,0.28), var(--vf-user));
        border: 1px solid rgba(0,122,255,0.35);
        color: #EAF2FF;
      }
      input, textarea {
        background: rgba(255,255,255,0.06) !important;
        border: 1px solid var(--vf-stroke) !important;
        color: var(--vf-text) !important;
      }
      button, [role="button"] {
        background: linear-gradient(135deg, rgba(122,60,240,0.35), rgba(0,122,255,0.28));
        border: 1px solid rgba(122,60,240,0.45);
        color: #fff;
      }
      a, .link { color: var(--vf-accent) !important; }
    `;

        // ===== CSS Launcher animé =====
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
      @keyframes vf-bounce {
        0%, 20%, 100% { transform: translateY(0) scale(1); }
        10% { transform: translateY(-6px) scale(1.02); }
        15% { transform: translateY(0) scale(0.995); }
      }
    `;

        // ===== Charge Voiceflow =====
        window.voiceflow?.chat.load({
            verify: { projectID: "68e936c2f8ed6ddca7ce5da5" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: { url: "https://runtime-api.voiceflow.com" },
        });

        // Injection CSS dans le shadow DOM du chat et launcher
        const chatTags = ["vf-chat", "voiceflow-chat"];
        const launcherTags = ["vf-launcher", "voiceflow-launcher"];
        chatTags.forEach((tag) =>
            waitForEl(tag).then((el) =>
                injectStyles(el.shadowRoot || el, CHAT_CSS)
            )
        );
        launcherTags.forEach((tag) =>
            waitForEl(tag).then((el) =>
                injectStyles(el.shadowRoot || el, LAUNCHER_CSS)
            )
        );
    };

    return (
        <Script
            src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
            type="text/javascript"
            strategy="afterInteractive"
            onLoad={initVoiceflow}
            onError={(e) => console.error("Voiceflow widget failed to load", e)}
        />
    );
}
