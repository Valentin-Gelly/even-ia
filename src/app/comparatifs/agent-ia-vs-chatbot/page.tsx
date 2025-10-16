'use client';


import { motion } from "framer-motion";



export default function ComparatifPage() {

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1, duration: 0.6 },
        }),
    };

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] font-sans">
            {/* Intro */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="max-w-5xl mx-auto px-6 py-20 text-center"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text-5xl font-bold mb-8 tracking-tight bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] bg-clip-text text-transparent mt-[2em]">
                    Agent IA vs Chatbot classique vs Centre d’appels
                </h1>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                    Découvrez les différences clés entre un{" "}
                    <strong>agent d’accueil IA</strong>, un{" "}
                    <strong>chatbot classique</strong> et un{" "}
                    <strong>centre d’appels</strong> pour votre entreprise.
                </p>
            </motion.section>

            {/* Tableau comparatif */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="max-w-6xl mx-auto px-6 pb-16"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="overflow-x-auto shadow-xl backdrop-blur-xl border border-slate-200">
                    <table className="min-w-full border-collapse text-sm md:text-base">
                        <thead className="bg-gradient-to-r from-[#9B00FF]/10 to-[#00B9FF]/10 text-slate-800">
                        <tr>
                            <th className="px-4 py-4 border font-bold text-left">Critère</th>
                            <th className="px-4 py-4 border font-bold text-left">
                                Agent IA
                            </th>
                            <th className="px-4 py-4 border font-bold text-left">
                                Chatbot classique
                            </th>
                            <th className="px-4 py-4 border font-bold text-left">
                                Centre d’appels
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            ["Disponibilité", "24/7", "24/7 mais limité", "Heures ouvrées"],
                            ["Compréhension", "Contextuelle (IA)", "Scripts figés", "Humaine"],
                            ["Intégrations", "CRM, Calendly…", "Très limitées", "Variable"],
                            ["Escalade humain", "Oui, avec contexte", "Rare", "Natif"],
                            ["Coût mensuel", "€€", "€", "€€€€"],
                            ["Mise en place", "Quelques jours", "3–10 jours", "Recrutement"],
                            ["Qualification leads", "Oui", "Partielle", "Oui"],
                            ["Mesure ROI", "Oui, automatisée", "Limitée", "Oui mais coûteux"],
                        ].map((row, i) => (
                            <tr
                                key={i}
                                className={`${
                                    i % 2 === 0 ? "bg-white/70" : "bg-slate-50/60"
                                } hover:bg-[#00B9FF]/5 transition`}
                            >
                                {row.map((cell, j) => (
                                    <td key={j} className="px-4 py-3 border text-slate-700">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </motion.section>

            {/* Conclusion */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="max-w-4xl mx-auto px-6 pb-20 text-center"
                viewport={{ once: true, amount: 0.3 }}
            >
                <p className="text-xl text-slate-700">
                    <strong>Conclusion :</strong> pour une TPE/PME, l’agent IA offre le{" "}
                    <span className="text-[#00B9FF] font-semibold">
            meilleur compromis
          </span>{" "}
                    entre réactivité, intégration et coût.
                </p>

                <a
                    href="/contact"
                    className="mt-8 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                    Réserver une démo
                </a>
            </motion.section>
        </main>
    );
}
