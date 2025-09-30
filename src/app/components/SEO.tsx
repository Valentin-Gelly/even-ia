"use client";

import Script from "next/script";

export default function SEO() {
    return (
        <Script
            id="organization-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "AVEN.IA",
                    "url": "https://aven-ia.com",
                    "logo": "https://aven-ia.com/logo.png",
                    "description": "Agents d’accueil IA pour TPME : qualification, FAQ, prise de RDV, intégrations CRM.",
                    "areaServed": "FR",
                    "telephone": "+33671765557",
                    "email": "contact@aven-ia.com",
                    "sameAs": ["https://www.linkedin.com/company/aven-ia"]
                }),
            }}
        />
    );
}