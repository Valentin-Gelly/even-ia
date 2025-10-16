'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Offre() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };

    if (!isMounted) return null; // Empêche le rendu avant le montage

    return (
        <motion.main
            key="offre-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#F5F3F0] text-[#0F172A] flex flex-col items-center justify-center"
        >
            {/* SECTION INTRO */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl px-6 pt-0 flex justify-center flex-wrap text-center md:rounded-3xl mt-[7em] md:mt-[15em]"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="mx-auto text-center flex flex-col md:flex-row items-center">
                    <Image
                        src="/sitting-bot.png"
                        alt="Logo fixe"
                        width={450}
                        height={450}
                        className="hidden md:block absolute -translate-x-1/2 pointer-events-none"
                    />
                    <div className="w-5/6 mx-auto">
                        <h1 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                            Nos offres
                        </h1>
                        <p className="mt-6 text-xl text-slate-700">
                            Nos offres s’adaptent à votre rythme et à votre niveau de maturité digitale.
                            Que vous souhaitiez simplement automatiser vos réponses de base ou créer un agent
                            IA entièrement intégré, nous avons la formule adaptée.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* SECTION CARTES OFFRES */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={1}
                className="relative max-w-7xl px-6 pt-0 md:pb-10 flex justify-center flex-wrap text-center md:rounded-3xl mt-20"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
                    {/* ESSENTIEL */}
                    <div className="rounded-3xl border bg-white/60 p-8 shadow-xl text-center transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(155,0,255,0.6)]">
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

                    {/* PREMIUM */}
                    <div className="relative rounded-3xl border-2 border-[#00B9FF] bg-gradient-to-br from-[#9B00FF]/10 to-[#00B9FF]/10 p-8 shadow-xl text-center scale-105 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(0,185,255,0.6)]">
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white text-xs px-3 py-1 rounded-full">
                            ⭐ Populaire
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Premium</h2>
                        <p className="text-lg mb-4">L’IA connectée à vos outils, pour gagner du temps</p>
                        <div className="mb-6">
                            <p className="text-4xl font-extrabold text-slate-900">
                                390€<span className="text-lg font-medium"> /mois</span>
                            </p>
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

                    {/* SIGNATURE */}
                    <div className="rounded-3xl border bg-white/60 p-8 shadow-xl text-center transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(155,0,255,0.6)]">
                        <h2 className="text-3xl font-bold mb-2">Signature</h2>
                        <p className="text-lg mb-4">L’expérience client ultime, 100 % sur mesure</p>
                        <div className="mb-6">
                            <p className="text-4xl font-extrabold text-slate-900">
                                990€<span className="text-lg font-medium"> /mois</span>
                            </p>
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
                </div>
            </motion.section>

            {/* SECTION CHOIX */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={2}
                viewport={{ once: true, amount: 0.1 }}
                className="relative max-w-7xl mx-auto px-6 py-20 flex justify-center"
            >
                <div className="w-full text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight">
                        Comment choisir ?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "⚡",
                                title: "Essentiel",
                                desc: "Vous débutez avec l’IA et voulez un gain de temps immédiat.",
                            },
                            {
                                icon: "🚀",
                                title: "Premium",
                                desc: "Vous avez besoin d’automatiser vos flux entrants et votre qualification.",
                            },
                            {
                                icon: "💎",
                                title: "Signature",
                                desc: "Vous cherchez un agent IA premium, intégré à toute votre chaîne client.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-700 text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* SECTION FAQ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={3}
                viewport={{ once: true, amount: 0.1 }}
                className="relative md:w-7xl px-6 py-16 flex justify-center text-center md:rounded-3xl backdrop-blur-2xl"
            >
                <div className="w-full">
                    <Link
                        href="/faq"
                        className="text-5xl text-center tracking-tight text-slate-700 hover:text-[#00B9FF] transition relative inline-block mb-10"
                    >
                        FAQ
                    </Link>

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
                        ].map((item, i) => (
                            <details key={i} className="group py-4 cursor-pointer transition">
                                <summary className="flex justify-between items-center font-semibold text-lg text-slate-800 hover:text-[#00B9FF]">
                                    {item.question}
                                    <span className="ml-2 transition-transform group-open:rotate-45">➕</span>
                                </summary>
                                <p className="mt-3 text-slate-600 text-base">{item.answer}</p>
                            </details>
                        ))}
                    </div>

                    <Link
                        href="/faq"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition mt-10 inline-block"
                    >
                        Plus de questions ? Consultez notre FAQ
                    </Link>
                </div>
            </motion.section>

            {/* SECTION CTA FINALE */}
            <section className="w-full md:max-w-5xl mx-auto px-6 py-20 text-center">
                <a
                    target="_blank"
                    href="https://calendly.com/contact-aven-ia/30min"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                    Réserver une démo pour découvrir nos offres en action
                </a>
            </section>
        </motion.main>
    );
}
