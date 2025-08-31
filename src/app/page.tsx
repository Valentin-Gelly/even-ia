"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { Briefcase, Users, Clock } from "lucide-react";

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
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] font-sans flex flex-col justify-center items-center">
            {/* Background accents */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#9B00FF]/10 blur-3xl"/>
                <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[#00B9FF]/10 blur-3xl"/>
                <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#00FFC8]/10 blur-3xl"/>
            </div>
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="fixed top-0 left-0 w-full z-50"
                viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
            {/* Header */}
            <header className=" fixed top-0 left-0 w-full z-50">
                <div className="mx-auto px-6 py-4">
                    <div
                        className=" relative bg-white/30 backdrop-blur-md  rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between h-full w-10/12 bg-clip-padding backdrop-filter bg-opacity-60 mx-auto">
                        <div className="px-5 py-3">
                            <Image
                                src="/even-ia-light.png"
                                alt="AVEN.IA Logo"
                                width={120}
                                height={40}
                                priority
                                className={"object-contain"}
                            />
                        </div>
                        <nav className="hidden md:flex items-center gap-6 px-6 text-slate-700 font-medium text-2xl">
                            <a href="#about" className="hover:text-[#00B9FF] transition">À propos</a>
                            <a href="#services" className="hover:text-[#00B9FF] transition">Services</a>
                            <a href="#testimony" className="hover:text-[#00B9FF] transition">Témoignages</a>
                            <a href="#contact" className="hover:text-[#00B9FF] transition">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
        </motion.header>

            <body>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    custom={0}
                    className="mt-[10%] relative max-w-7xl px-6 pt-16 pb-10 flex items-center text-center w-full rounded-3xl border border-black/5 bg-white/60 p-10 shadow-2xl backdrop-blur-2xl"
                    viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
                >
                        <div
                            className="mx-auto max-w-4xl w-[60%]">
                            <h2 className="text-left text-7xl font-extrabold tracking-tight bg-gradient-to-r  bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Even IA : Des agents d'accueil IA pour votre entreprise",
                                        ],
                                        autoStart: true,
                                        loop: false,
                                        delay: 35,
                                        deleteSpeed: 99999999999999,
                                        cursor: "|",
                                    }}
                                />
                            </h2>
                            <p className="mt-6 text-left text-xl text-slate-700">
                                Démontrez que vous êtes compétent et inspirez confiance grace à nos solutions d&#39;intelligence
                                artificielle.
                            </p>
                        </div>
                        <svg
                            fill="#000000"
                            viewBox="0 0 40 40"
                            width={300}
                            id="icon"
                            className="mx-auto mt-10 "
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00B9FF"/>
                                </linearGradient>
                            </defs>
                            <title>chat-bot</title>
                            <path
                                d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"
                                fill="url(#grad1)"
                            />
                            <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" fill="url(#grad1)"/>
                            <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" fill="url(#grad1)"/>
                            <path
                                d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"
                                fill="url(#grad1)"
                            />
                        </svg>
                </motion.section>
                <section className="flex flex-wrap justify-around gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Accueil IA",
                            text: "Offrez un support automatisé et personnalisé à vos clients grâce à nos agents d'accueil.",
                        },
                        {
                            title: "Automatisation",
                            text: "Optimisez vos processus avec des flux de travail automatisés et intelligents.",
                        },
                        {
                            title: "SEO GEO",
                            text: "Améliorez votre référencement local avec des stratégies SEO géolocalisées.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeIn}
                            custom={index + 1}
                            className="mt-[5%] w-[30%] px-6 py-24 rounded-3xl border border-black/5 bg-white/60 shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center"
                        >
                            <h2 className="text-4xl text-center mb-6 font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                {item.title}
                            </h2>
                            <p className="text-xl text-slate-700">{item.text}</p>
                        </motion.div>
                    ))}
                </section>

                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className="mt-[5%] max-w-7xl px-6 rounded-3xl border border-black/5 bg-white/60 p-10 shadow-2xl backdrop-blur-2xl py-24 flex "
                    >
                    <Image
                        src="/even-ia-light.png"
                        alt="Logo de Even IA"
                        width={300}
                        height={300}
                        priority
                    >
                    </Image>
                        <section className="mx-auto w-[60%]">
                            <h2 className="text-6xl text-left mb-6 font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                Qui sommes nous ?
                            </h2>
                            <p className="text-xl text-left text-slate-700 max-w-4xl mx-auto">
                                AVEN.IA est une agence spécialisée dans les agents d’accueil virtuels (chatbots) et l’automatisation intelligente.
                            </p>
                            <p className="text-xl text-left text-slate-700 max-w-4xl mx-auto">
                                Nous croyons en une technologie sobre, élégante et centrée sur l’humain. Notre objectif est de devenir un partenaire de confiance pour les entreprises qui veulent gagner du temps, améliorer leur performance et préparer l’avenir.
                            </p>
                        </section>
                    </motion.div>
                </section>
                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className="mt-[5%] max-w-7xl px-6 rounded-3xl p-10 py-24 flex flex-col"
                    >
                        <h2 className="text-6xl text-center mb-6 font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                            Nos missions
                        </h2>
                        <section className="flex flex-wrap justify-around gap-6 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "Offrir des outils performants",
                                    text: "Offrir aux TPE & PME des outils performants et accessibles, comparables à ceux des grandes entreprises.",
                                    icon: <Briefcase className="w-12 h-12 mb-6 text-[#00B9FF]" />,
                                },
                                {
                                    title: "Optimiser la relation client",
                                    text: "Optimiser la relation client avec des assistants disponibles 24/7, capables de répondre, qualifier et générer des opportunités.",
                                    icon: <Users className="w-12 h-12 mb-6 text-[#00B9FF]" />,
                                },
                                {
                                    title: "Gagner du temps",
                                    text: "Libérer du temps aux dirigeants en déléguant les tâches répétitives à l’IA.",
                                    icon: <Clock className="w-12 h-12 mb-6 text-[#00B9FF]" />,
                                },
                            ].map((mission, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeIn}
                                    custom={index + 1}
                                    className="mt-[5%] w-[30%] px-6 py-12 rounded-3xl border border-black/5 bg-white/60 shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center"
                                >
                                    {mission.icon}
                                    <h2 className="text-2xl mb-4 font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                        {mission.title}
                                    </h2>
                                    <p className="text-lg text-slate-700">{mission.text}</p>
                                </motion.div>
                            ))}
                        </section>


                    </motion.div>
                </section>
                <section id="contact" className="flex items-center justify-center bg-gradient-to-tr font-montserrat w-full mt-[5%] ">
                    <form
                        className="relative bg-white/30 backdrop-blur-md  rounded-2xl border border-white/20 shadow-2xl grid grid-cols-2 gap-6 w-1/2 p-[3%]">

                        <p className="col-span-2 text-xl font-medium opacity-70 drop-shadow-md text-center">
                            Contactez-nous
                        </p>

                        <input
                            type="text"
                            placeholder="Nom"
                            className="px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        <input
                            type="text"
                            placeholder="Prénom"
                            className="px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="col-span-2 px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        <textarea
                            placeholder="Message"
                            className="col-span-2 px-4 py-3 rounded-2xl bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-1/4 col-span-2 mt-4 py-3 rounded-full bg-white/20 font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#9B00FF] hover:via-[#00B9FF] hover:to-[#00FFC8] hover:text-white active:bg-white/40"
                        >
                            Envoyer
                        </button>
                    </form>
                </section>
            </body>


            {/* Footer */}
            <footer className="px-6 py-8">
                <div
                    className="mx-auto max-w-7xl rounded-2xl border border-black/5 bg-white/60 p-6 text-center text-sm text-slate-600 shadow backdrop-blur">
                    © {new Date().getFullYear()} AVEN.IA — Tous droits réservés.
                </div>
            </footer>
        </main>
    );
}
