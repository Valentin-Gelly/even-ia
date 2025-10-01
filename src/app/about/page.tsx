'use client';

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2, Users, Rocket } from "lucide-react";
import Image from "next/image";

export default function About() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A]  flex flex-col items-center justify-center">
            {/* Mission */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                viewport={{ once: true, amount: 0.2 }}
                className="relative max-w-7xl px-6 pt-0 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap text-center md:rounded-3xl mt-[10em]"
            >
                <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                        Notre mission
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed">
                        Chez AVEN.IA, nous voulons rendre l’IA <b>accessible, utile et belle</b>. <br/>
                        Notre mission : libérer les dirigeants de tâches chronophages pour qu’ils puissent se concentrer sur
                        ce qui crée vraiment de la valeur.
                    </p>
                </section>
            </motion.section>

            {/* Valeurs */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl mx-auto px-6 flex justify-center"
                viewport={{ once: true, amount: 0.2 }}
            >
                <section className="w-full text-center">
                    <h2 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                        Nos valeurs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

                        {/* Clarté */}
                        <div className="flex flex-col items-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <Lightbulb className="w-12 h-12 text-[#9B00FF] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Clarté</h3>
                            <p className="text-slate-700 text-lg">
                                Rendre l’IA simple et compréhensible.
                            </p>
                        </div>

                        {/* Exigence */}
                        <div className="flex flex-col items-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <CheckCircle2 className="w-12 h-12 text-[#00B9FF] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Exigence</h3>
                            <p className="text-slate-700 text-lg">
                                Créer des outils fiables, performants et esthétiques.
                            </p>
                        </div>

                        {/* Proximité */}
                        <div className="flex flex-col items-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <Users className="w-12 h-12 text-[#00B98A] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Proximité</h3>
                            <p className="text-slate-700 text-lg">
                                Être réellement à vos côtés, avant, pendant et après.
                            </p>
                        </div>

                        {/* Ambition */}
                        <div className="flex flex-col items-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
                            <Rocket className="w-12 h-12 text-[#FF8A00] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Ambition</h3>
                            <p className="text-slate-700 text-lg">
                                Aider les TPME à franchir un cap grâce à l’IA.
                            </p>
                        </div>

                    </div>
                </section>

            </motion.section>

            {/* Vision */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={2}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-5xl mx-auto px-6 py-20 text-center"
            >
                <h2 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                    Notre vision de l’IA
                </h2>
                <p className="text-xl text-slate-700 leading-relaxed">
                    Nous pensons que l’IA ne doit pas remplacer l’humain, mais le renforcer. <br/>
                    Notre vision : une IA au service des entrepreneurs, qui simplifie, accélère et valorise leur
                    travail.
                </p>
            </motion.section>

            {/* Fondateurs */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={3}
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-6xl mx-auto px-6 md:py-20"
            >
                <h2 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                    Les Fondateurs
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl text-center">
                        <Image
                            src="/vincent.png"
                            alt="Vincent"
                            width={120}
                            height={120}
                            className="rounded-full object-cover border-4 border-[#00B9FF]/40 shadow-lg mx-auto overflow-hidden aspect-square"
                        />
                        <h3 className="text-2xl font-bold">Vincent</h3>
                        <p className="text-slate-600">Co-fondateur</p>
                        <blockquote className="italic mt-4 text-slate-700 text-lg">
                            Mon expérience professionnelle m&#39;a permis de comprendre que je souhaitais aller au-delà d&#39;une
                            simple tâche. Mon attrait pour les nouvelles technologies, en particulier l&#39;intelligence artificielle,
                            m&#39;a fait prendre conscience qu&#39;il est possible de combler d&#39;importantes failles dans l&#39;organisation de systèmes,
                            pourtant très bien rodés, dans le but de les optimiser. Aujourd&#39;hui, mon ambition est de permettre aux entreprises
                            de se développer, de s&#39;améliorer et d&#39;exploiter pleinement les nouvelles technologies.
                        </blockquote>
                    </div>
                    <div className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl text-center">
                        <Image
                            src="/bastien.png"
                            alt="Bastien"
                            width={120}
                            height={120}
                            className="rounded-full object-cover border-4 border-[#00B9FF]/40 shadow-lg mx-auto overflow-hidden aspect-square"
                        />
                        <h3 className="text-2xl font-bold">Bastien</h3>
                        <p className="text-slate-600">Co-fondateur</p>
                        <blockquote className="italic mt-4 text-slate-700 text-lg">
                            Mon parcours m’a conduit à tester plusieurs métiers et environnements différents. De ces expériences,
                            j’ai tiré deux leçons essentielles : Dans la majorité des entreprises où j’ai travaillé, j’ai vu à quel point certains
                            outils d’IA et d’automatisation auraient pu transformer leur fonctionnement. J’ai réalisé que ce que j’aimais réellement,
                            c’était apporter des solutions utiles qui simplifient le quotidien des professionnels et créent de la valeur.
                        </blockquote>
                    </div>
                </div>
            </motion.section>
            <section className="w-full md:max-w-5xl md:mx-auto md:px-6 py-20 text-center">
                <a
                    target={`_blank`}
                    href="https://calendly.com/contact-aven-ia/30min"
                    className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r hover:from-[#9B00FF]/60 hover:to-[#00B9FF]/60 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                    Réserver une démo pour découvrir nos offres en action
                </a>
            </section>
        </main>
    )
}
