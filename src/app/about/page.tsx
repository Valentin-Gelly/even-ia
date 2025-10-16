'use client';

import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2, Users, Rocket } from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function About() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
        }),
    } as Variants;


    if (!isMounted) return null; // Empêche le rendu avant le montage

    return (
        <motion.main
            key="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#F5F3F0] text-[#0F172A] flex flex-col items-center justify-center"
        >
            {/* MISSION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                viewport={{ once: true, amount: 0.2 }}
                className="relative max-w-7xl mx-auto px-6 mt-[8em] md:mt-[14em] text-center"
            >
                <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Notre mission
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed">
                        Chez <b>AVEN.IA</b>, nous voulons rendre l’IA <b>accessible, utile et belle</b>.<br />
                        Notre mission : libérer les dirigeants de tâches chronophages pour qu’ils puissent se concentrer
                        sur ce qui crée vraiment de la valeur.
                    </p>
                </div>
            </motion.section>

            {/* VALEURS */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={1}
                viewport={{ once: true, amount: 0.2 }}
                className="relative max-w-7xl mx-auto px-6 py-20 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tight">
                    Nos valeurs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Lightbulb className="w-12 h-12 text-[#9B00FF] mb-4" />,
                            title: "Clarté",
                            text: "Rendre l’IA simple et compréhensible.",
                        },
                        {
                            icon: <CheckCircle2 className="w-12 h-12 text-[#00B9FF] mb-4" />,
                            title: "Exigence",
                            text: "Créer des outils fiables, performants et esthétiques.",
                        },
                        {
                            icon: <Users className="w-12 h-12 text-[#00B98A] mb-4" />,
                            title: "Proximité",
                            text: "Être réellement à vos côtés, avant, pendant et après.",
                        },
                        {
                            icon: <Rocket className="w-12 h-12 text-[#FF8A00] mb-4" />,
                            title: "Ambition",
                            text: "Aider les TPME à franchir un cap grâce à l’IA.",
                        },
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-[0_0_20px_4px_rgba(155,0,255,0.2)] transition-all duration-300"
                        >
                            {value.icon}
                            <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                            <p className="text-slate-700 text-lg">{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* VISION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={2}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-5xl mx-auto px-6 py-20 text-center"
            >
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-10">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Notre vision de l’IA
                    </h2>
                    <p className="text-xl text-slate-700 leading-relaxed">
                        Nous pensons que l’IA ne doit pas remplacer l’humain, mais le renforcer. <br />
                        Notre vision : une IA au service des entrepreneurs, qui simplifie, accélère et valorise leur travail.
                    </p>
                </div>
            </motion.section>

            {/* FONDATEURS */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={3}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto px-6 py-20 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tight">
                    Les fondateurs
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {[
                        {
                            name: "Vincent",
                            img: "/vincent.png",
                            role: "Co-fondateur",
                            quote: `Mon expérience professionnelle m’a permis de comprendre que je souhaitais aller au-delà d’une simple tâche.
                            Mon attrait pour les nouvelles technologies, en particulier l’intelligence artificielle, m’a fait prendre conscience
                            qu’il est possible de combler d’importantes failles dans l’organisation de systèmes pourtant bien rodés,
                            afin de les optimiser. Aujourd’hui, mon ambition est de permettre aux entreprises de se développer,
                            de s’améliorer et d’exploiter pleinement les nouvelles technologies.`,
                        },
                        {
                            name: "Bastien",
                            img: "/bastien.png",
                            role: "Co-fondateur",
                            quote: `Mon parcours m’a conduit à tester plusieurs métiers et environnements différents.
                            Dans la majorité des entreprises où j’ai travaillé, j’ai vu à quel point certains outils d’IA et d’automatisation
                            auraient pu transformer leur fonctionnement. J’ai réalisé que ce que j’aimais réellement, c’était apporter
                            des solutions utiles qui simplifient le quotidien des professionnels et créent de la valeur.`,
                        },
                    ].map((founder, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl text-center hover:shadow-[0_0_20px_4px_rgba(0,185,255,0.3)] transition-all duration-300"
                        >
                            <Image
                                src={founder.img}
                                alt={founder.name}
                                width={120}
                                height={120}
                                className="rounded-full object-cover border-4 border-[#00B9FF]/40 shadow-lg mx-auto aspect-square mb-4"
                            />
                            <h3 className="text-2xl font-bold">{founder.name}</h3>
                            <p className="text-slate-600">{founder.role}</p>
                            <blockquote className="italic mt-4 text-slate-700 text-lg leading-relaxed">
                                {founder.quote}
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* CTA FINALE */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={4}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full md:max-w-5xl mx-auto px-6 py-20 text-center"
            >
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://calendly.com/contact-aven-ia/30min"
                    className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                    Réserver une démo pour découvrir nos offres en action
                </a>
            </motion.section>
        </motion.main>
    );
}
