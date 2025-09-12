"use client";

import { motion } from "framer-motion";

export default function Home() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] font-sans">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
                <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        L’IA au service de votre performance.
                    </h1>
                    <p className="mt-6 text-xl text-slate-700 max-w-2xl mx-auto">
                        Nous créons des agents d’accueil intelligents qui automatisent vos échanges clients,
                        libèrent votre temps et font passer votre entreprise dans une nouvelle dimension.
                    </p>
                    <a href="/contact"
                       className="mt-8 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition">
                        Réserver une démo personnalisée
                    </a>
                </section>
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl px-6 pt-0 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap text-center md:rounded-3xl md:border md:border-black/5 md:bg-white/60 p-10 md:shadow-2xl backdrop-blur-2xl mt-[10em]"
                viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
                <h2 className="text-4xl font-bold mb-6">Notre promesse</h2>
                <p className="text-xl text-slate-700">
                    Chez AVEN.IA, nous aidons les TPME à franchir un cap : automatiser les premiers échanges
                    avec leurs clients tout en offrant une expérience moderne et professionnelle. <br/><br/>
                    Nous concevons des agents IA élégants, performants et humains — pour que chaque visiteur
                    ait l’impression d’être accueilli par votre meilleure recrue.
                </p>
            </motion.section>
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Ce que nous faisons</h2>
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-lg text-slate-700">
                    <li>✔ Répondre instantanément aux questions fréquentes</li>
                    <li>✔ Qualifier les prospects et collecter leurs informations</li>
                    <li>✔ Prendre des rendez-vous automatiquement</li>
                    <li>✔ Guider les visiteurs et fluidifier leur parcours</li>
                    <li>✔ Connecter ces données à vos outils (CRM, Google Sheets, etc.)</li>
                </ul>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Comment ça fonctionne</h2>
                <ol className="space-y-6 text-xl text-slate-700 max-w-3xl mx-auto">
                    <li><span className="font-bold text-[#00B9FF]">1.</span> Vous réservez une démo.</li>
                    <li><span className="font-bold text-[#00B9FF]">2.</span> Nous concevons votre agent IA personnalisé.
                    </li>
                    <li><span className="font-bold text-[#00B9FF]">3.</span> Nous l’installons sur votre site en
                        quelques clics.
                    </li>
                    <li><span className="font-bold text-[#00B9FF]">4.</span> Vous commencez à gagner du temps et à
                        générer plus de prospects.
                    </li>
                </ol>
            </section>

            <section className="bg-white/60 backdrop-blur-xl py-16">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center">
                    <div>
                        <h3 className="text-5xl font-bold text-[#00B9FF]">+65%</h3>
                        <p className="mt-2 text-lg text-slate-700">d’engagement client</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#00B9FF]">2-4h</h3>
                        <p className="mt-2 text-lg text-slate-700">économisées chaque jour</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#00B9FF]">7 jours</h3>
                        <p className="mt-2 text-lg text-slate-700">d’installation en moyenne</p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Pourquoi nous choisir</h2>
                <ul className="grid gap-8 md:grid-cols-2 text-lg text-slate-700">
                    <li>✔ Une approche 100 % personnalisée</li>
                    <li>✔ Une intégration fluide à vos outils existants</li>
                    <li>✔ Un accompagnement humain de bout en bout</li>
                    <li>✔ Une expérience utilisateur premium et différenciante</li>
                </ul>
            </section>

            <section className="bg-white/60 backdrop-blur-xl py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Témoignages</h2>
                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 text-xl italic text-slate-700">
                    <blockquote>« En une semaine, notre agent IA était en ligne et nous a déjà permis de récupérer 30
                        nouveaux contacts qualifiés. » <br/>— Julien, e-commerce
                    </blockquote>
                    <blockquote>« On a enfin un accueil pro sur notre site, et on ne perd plus de temps à répondre aux
                        mêmes questions. » <br/>— Clara, dirigeante PME
                    </blockquote>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                <p className="text-2xl text-slate-700 mb-8">
                    En moins de 7 jours, vous pouvez déjà voir votre premier agent IA en action.
                </p>
                <a href="/contact"
                   className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition">
                    Réserver une démo personnalisée
                </a>
            </section>
        </main>

    );
}
