"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function VoiceflowWidget() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const checkVF = setInterval(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if ((window as unknown).voiceflow) {
                    clearInterval(checkVF);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    (window as unknown).voiceflow.chat.load({
                        verify: { projectID: "68b6ae60ba1b06ff822e82bd" },
                        url: "https://general-runtime.voiceflow.com",
                        versionID: "production",
                        voice: {
                            url: "https://runtime-api.voiceflow.com",
                        },
                    });
                }
            }, 500);
        }
    }, []);

    return (
        <Script
            src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
            type="text/javascript"
            strategy="afterInteractive"
        />
    );
}
