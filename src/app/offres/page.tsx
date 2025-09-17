'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Offre() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A]  flex flex-col items-center justify-center h-full">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl px-6 pt-0 flex justify-center flex-wrap text-center md:rounded-3xl mt-[7em]"
                viewport={{ once: true, amount: 0.1 }}
            >
                <section className="mx-auto text-center flex flex-col md:flex-row items-center">
                    <Image
                        src="/sitting-bot.png"
                        alt="Logo fixe"
                        width={300}
                        height={300}
                    />
                    <section>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">Nos offres</h1>
                        <p className="mt-6 text-xl text-slate-700">
                            Nos offres s’adaptent à votre rythme et à votre niveau de maturité digitale.
                            Que vous souhaitiez simplement automatiser vos réponses de base ou créer un agent
                            IA entièrement intégré, nous avons la formule adaptée.
                        </p>
                    </section>

                </section>
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={1}
                className="relative max-w-7xl px-6 pt-0 md:pb-10 flex justify-center flex-wrap text-center md:rounded-3xl"
                viewport={{ once: true, amount: 0.1 }}
            >
                <section className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

                    {/* Essentiel */}
                    <div className="rounded-3xl border bg-white/60 p-8 shadow-xl text-center
    transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(155,0,255,0.6)]">
                        <h2 className="text-3xl font-bold mb-2">Essentiel</h2>
                        <p className="text-lg mb-4">Votre premier agent IA prêt à l’emploi</p>
                        <div className="mb-6">
                            <p className="text-4xl font-extrabold text-slate-900">
                                149€<span className="text-lg font-medium"> /mois</span>
                            </p>
                            <p className="text-slate-600">+ 290€ setup</p>
                        </div>
                        <ul className="space-y-2 text-slate-700">
                            <li>✔ Base de connaissances initiale</li>
                            <li>✔ Interface personnalisée</li>
                            <li>✔ Intégration sur votre site</li>
                            <li>✔ Support technique de démarrage</li>
                        </ul>
                    </div>

                    {/* Premium */}
                    <div className="relative rounded-3xl border-2
                    border-[#00B9FF] bg-gradient-to-br from-[#9B00FF]/10 to-[#00B9FF]/10 p-8 shadow-xl text-center scale-105
                     transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(0,185,255,0.6)]">
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white text-xs px-3 py-1 rounded-full">
                            ⭐ Populaire
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Premium</h2>
                        <p className="text-lg mb-4">L’IA connectée à vos outils, pour gagner du temps</p>
                        {/* Prix */}
                        <div className="mb-6">
                            <p className="text-4xl font-extrabold text-slate-900">390€<span className="text-lg font-medium"> /mois</span></p>
                            <p className="text-slate-600">+ 590€ setup</p>
                        </div>
                        <ul className="space-y-2 text-slate-700">
                            <li>✔ Tout de l’offre Essentiel</li>
                            <li>✔ Connexions à vos outils</li>
                            <li>✔ Qualification automatique</li>
                            <li>✔ Optimisation continue</li>
                            <li>✔ Suivi et ajustements mensuels</li>
                        </ul>
                    </div>

                    {/* Signature */}
                    <div className="rounded-3xl border bg-white/60 p-8 shadow-xl text-center
                     transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(155,0,255,0.6)]">
                        <h2 className="text-3xl font-bold mb-2">Signature</h2>
                        <p className="text-lg mb-4">L’expérience client ultime, 100 % sur mesure</p>
                        {/* Prix */}
                        <div className="mb-6">
                            <p className="text-4xl font-extrabold text-slate-900">990€<span className="text-lg font-medium"> /mois</span></p>
                            <p className="text-slate-600">+ 1190€ setup</p>
                        </div>
                        <ul className="space-y-2 text-slate-700">
                            <li>✔ Tout de l’offre Premium</li>
                            <li>✔ Design et UX sur mesure</li>
                            <li>✔ Automatisations avancées</li>
                            <li>✔ Accompagnement stratégique</li>
                            <li>✔ Suivi et évolution en continu</li>
                        </ul>
                    </div>

                </section>

            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={2}
                className="relative max-w-7xl mx-auto px-6 py-20 flex justify-center"
                viewport={{ once: true, amount: 0.2 }}
            >
                <section className="w-full text-center">
                    {/* Titre */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                        Comment choisir ?
                    </h2>

                    {/* Cartes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Essentiel */}
                        <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold mb-3">Essentiel</h3>
                            <p className="text-slate-700 text-lg">
                                Vous débutez avec l’IA et voulez un <b>gain de temps immédiat</b>.
                            </p>
                        </div>

                        {/* Premium */}
                        <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-3">Premium</h3>
                            <p className="text-slate-700 text-lg">
                                Vous avez besoin <b>d’automatiser vos flux entrants</b> et votre qualification.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <div className="text-4xl mb-4">💎</div>
                            <h3 className="text-2xl font-bold mb-3">Signature</h3>
                            <p className="text-slate-700 text-lg">
                                Vous cherchez un <b>agent IA premium</b>, intégré à toute votre chaîne client.
                            </p>
                        </div>
                    </div>
                </section>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={4}
                className="relative md:w-7xl px-6 py-16 flex justify-center text-center md:rounded-3xl backdrop-blur-2xl"
                viewport={{ once: true, amount: 0.2 }}
            >
                <section className="w-full">
                    <h2 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                        FAQ
                    </h2>

                    <div className="max-w-3xl mx-auto divide-y divide-slate-200 text-left">
                        {[
                            {
                                question: "Combien de temps faut-il pour installer un agent IA ?",
                                answer: "Moins de 7 jours en moyenne.",
                            },
                            {
                                question: "Dois-je avoir un site web existant ?",
                                answer: "Oui, mais nous pouvons aussi vous conseiller si vous démarrez.",
                            },
                            {
                                question: "L’agent peut-il être mis à jour ?",
                                answer: "Oui, nous pouvons enrichir sa base et ses fonctionnalités à tout moment.",
                            },
                        ].map((item, index) => (
                            <details
                                key={index}
                                className="group py-4 cursor-pointer transition"
                            >
                                <summary className="flex justify-between items-center font-semibold text-lg text-slate-800 hover:text-[#00B9FF]">
                                    {item.question}
                                    <span className="ml-2 transition-transform group-open:rotate-45">
              ➕
            </span>
                                </summary>
                                <p className="mt-3 text-slate-600 text-base">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            </motion.section>

            <section className="w-full md:max-w-5xl md:mx-auto md:px-6 py-20 text-center">
                <a target={`_blank`} href="https://calendly.com/contact-aven-ia/30min"
                   className="px-6 py-3 rounded-xl bg-gradient-to-r hover:from-[#9B00FF]/60 hover:to-[#00B9FF]/60 text-white font-semibold shadow-lg hover:scale-105 transition">
                    Réserver une démo pour découvrir nos offres en action
                </a>
            </section>
        </main>
    );
}