'use client';

import { motion } from "framer-motion";
import { span } from "framer-motion/client";
import Link from "next/link";

export default function FAQ() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1, duration: 0.6 },
        }),
    };

    const faqs = [
        {
            question: "Qu’est-ce qu’un agent d’accueil IA ?",
            answer:
                "Un assistant intelligent qui accueille vos visiteurs (site web, WhatsApp, Messenger, email…), répond 24/7, qualifie les demandes et escalade vers un humain quand c’est nécessaire.",
        },
        {
            question: "Quelle différence avec un chatbot classique ?",
            answer:
                "Un chatbot suit des scripts figés. Un agent IA est conçu pour comprendre le contexte, s’adapter, se connecter à vos outils (CRM, agenda…) et gérer les escalades intelligemment.",
        },
        {
            question: "Combien de temps pour l’installation ?",
            answer:
                "Cela dépend de la formule choisie (Essentiel, Premium ou Signature) et du niveau d’intégration. Typiquement, l’installation se fait en quelques jours ouvrés.",
        },
        {
            question: "Quels canaux sont supportés ?",
            answer:
                "Multi-canal : site web (widget), WhatsApp, Messenger, email, et d’autres selon vos besoins. L’agent est adaptable selon chaque client.",
        },
        {
            question: "Avec quels CRM l’agent peut-il s’intégrer ?",
            answer:
                "HubSpot, Pipedrive, Notion, Google Sheets… et quasiment tous les CRM via connecteurs (Make, n8n, API).",
        },
        {
            question: "Est-ce conforme au RGPD / CNIL ?",
            answer: `Oui. L’hébergement se fait en Europe. Nous respectons le RGPD et la CNIL :
- Données limitées au strict nécessaire
- Durée de conservation maîtrisée
- Opt-in et droits utilisateurs respectés`,
        },
        {
            question: "Quels sont vos tarifs ?",
            answer: `Essentiel : 149 €/mois + setup 290 €
Premium : 390 €/mois + setup 590 €
Signature : 990 €/mois + setup 1190 €`,
        },
        {
            question: "Y a-t-il des limites ?",
            answer:
                "Oui. Quand une question sort totalement de la base de connaissances (hors sujet), l’agent ne peut pas répondre et escalade vers l’humain.",
        },
        {
            question: "L’agent peut-il prendre des rendez-vous ?",
            answer:
                "Oui, via intégrations avec Google Calendar, Calendly ou autres solutions équivalentes.",
        },
        {
            question: "Comment l’agent apprend mon métier ?",
            answer: `Nous construisons la base de connaissances avec vous :
- Vos documents internes
- Vos contenus web
- Vos règles métier

👉 Nous l’enrichissons et l’optimisons ensemble pour qu’il reflète votre activité.`,
        },
        {
            question: "Qui répond aux questions hors périmètre ?",
            answer:
                "L’agent redirige automatiquement vers un humain désigné (mail, CRM, Slack…), avec le contexte de la demande.",
        },
        {
            question: "L’agent peut-il pousser les leads dans mon CRM ?",
            answer:
                "Oui. Cette fonction est incluse dans les formules Premium et Signature, et disponible en option avec l’Essentiel.",
        },
        {
            question: "L’agent est-il multilingue ?",
            answer: "Oui. Français, anglais et autres langues si configurées.",
        },
        {
            question: "Quelles garanties de sécurité proposez-vous ?",
            answer: `- Hébergement en Europe, conforme RGPD et CNIL
- Communications sécurisées (HTTPS / TLS)
- Accès protégés par permissions et rôles
- Gestion sécurisée des clés et identifiants (Secrets Manager)
- Composants certifiés ISO 27001 et SOC-2
- Politique de confidentialité et mesures techniques (pare-feu, chiffrement, contrôles d’accès)
- Accord de traitement des données (DPA)
- Masquage / anonymisation des données sensibles
- Maintenance, mises à jour et correctifs réguliers
- Plan de réponse aux incidents`,
        },
        {
            question: "Avez-vous déjà des exemples concrets ?",
            answer:
                "Oui. Nous créons une démo personnalisée pour chaque prospect, adaptée à son secteur et ses besoins.",
        },
        {
            question: "Comment mesurer le ROI ?",
            answer: `Par :
- Le temps gagné (moins de réponses manuelles)
- La rapidité de réponse
- Le nombre de leads qualifiés
- Le nombre de rendez-vous pris`,
        },
        {
            question: "Qui assure la maintenance ?",
            answer:
                "Nous. AVEN.IA gère la maintenance technique et fonctionnelle selon l’offre choisie.",
        },
        {
            question: "Puis-je modifier moi-même les réponses ?",
            answer: `Oui. Vous pouvez :
- Nous envoyer vos changements (mail ou interface dédiée)
- Ou profiter d’une mise à jour automatique quand vos contenus web évoluent.`,
        },
        {
            question: "L’agent peut-il fonctionner uniquement sur un canal choisi ?",
            answer:
                "Oui. Vous pouvez choisir un seul canal (par ex. site web uniquement) ou en activer plusieurs.",
        },
        {
            question: "Comment démarrer ?",
            answer:
                "Réservez une démo via : https://calendly.com/aven-ia/demo 👉 En 30 minutes, on cadre vos besoins et on prépare une solution adaptée.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] font-sans">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl mx-auto px-6 py-20 flex justify-center "
                viewport={{ once: true, amount: 0.3 }}
            >
                <section className="w-full text-center mt-[7em]">
                    <h1 className="text-5xl font-bold mb-12 tracking-tight bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] bg-clip-text text-transparent">
                        FAQ — AVEN.IA
                    </h1>

                    <div className="max-w-4xl mx-auto divide-y divide-slate-200 text-left">
                        {faqs.map((item, index) => (
                            <details
                                key={index}
                                className="group py-6 cursor-pointer transition"
                            >
                                <summary className="flex justify-between items-center font-semibold text-lg text-slate-800 hover:text-[#00B9FF] select-none">
                                    {item.question}
                                    <span className="ml-2 transition-transform duration-300 group-open:rotate-45 select-none">
                                      ➕
                                    </span>
                                </summary>
                                <div className="overflow-hidden transition-all duration-500 max-h-0 group-open:max-h-96">
                                    <p className="select-none mt-3 text-slate-600 whitespace-pre-line text-base opacity-0 translate-y-2 transition-all duration-500 group-open:opacity-100 group-open:translate-y-0">
                                        {item.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                    <section className="w-full mt-12 text-center">
                        <Link
                            href="/comparatrifs/agent-ia-vs-chatbot"
                            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 hover:from-[#9B00FF]/80 hover:to-[#00B9FF]/80 transition-transform duration-300"
                        >
                            📊 Voir le comparatif Agent IA vs Chatbot vs Centre d’appels
                        </Link>
                    </section>

                </section>
            </motion.section>
        </main>
    );
}
