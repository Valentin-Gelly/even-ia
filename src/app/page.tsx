"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { Briefcase, Users, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";

export default function Home() {
        const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };
    const contactRef = useRef<HTMLDivElement | null>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [alreadySendEmail, setAlreadySendEmail] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 726){
                setIsScrolled(window.scrollY > 50);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Swal.fire({
            title: 'Merci pour votre message !',
            text: 'Nous vous répondrons dans les plus brefs délais.',
            icon: 'success',
            confirmButtonText: 'Fermer'
        });
        setAlreadySendEmail(true);
    }

    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] font-sans flex flex-col justify-center items-center ">
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="fixed top-0 left-0 w-full z-50"
                viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
            {/* Header */}
                <header
                    className={` relative bg-white/70 backdrop-blur-md  rounded-2xl border border-white/20 
                    md:shadow-2xl flex  h-full  bg-clip-padding backdrop-filter bg-opacity-60 mx-auto transition-all duration-300 ${
                        isScrolled ? "py-0 shadow-md w-full rounded-none" : "md:mt-8 py-6 md:py-2 shadow-md md:rounded-2xl md:w-10/12"
                    }
                     backdrop-blur-md`}
                >
                    <div className="px-6 flex items-center justify-between w-full">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            {/*<Image*/}
                            {/*    src="/aven-ia-light.png"*/}
                            {/*    alt="AVEN.IA Logo"*/}
                            {/*    width={100}*/}
                            {/*    height={20}*/}
                            {/*    priority*/}
                            {/*    className="object-contain"*/}
                            {/*/>*/}
                            <h2 className="text-5xl py-4">
                                AVEN IA
                            </h2>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-6 text-slate-700 font-medium text-lg">
                            <a href="#about" className="hover:text-[#00B9FF] transition">
                                À propos
                            </a>
                            <a href="#services" className="hover:text-[#00B9FF] transition">
                                Services
                            </a>
                            <a href="#testimony" className="hover:text-[#00B9FF] transition">
                                Témoignages
                            </a>
                            <a href="#contact" className="hover:text-[#00B9FF] transition">
                                Contact
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-700 z-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                // Icône croix
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Icône burger
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg font-medium text-slate-700 md:hidden transition-all duration-300">
                                <a
                                    href="#about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-[#00B9FF] transition"
                                >
                                    À propos
                                </a>
                                <a
                                    href="#services"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-[#00B9FF] transition"
                                >
                                    Services
                                </a>
                                <a
                                    href="#testimony"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-[#00B9FF] transition"
                                >
                                    Témoignages
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-[#00B9FF] transition"
                                >
                                    Contact
                                </a>
                            </div>
                        )}
                    </div>
                </header>
        </motion.header>

            <body>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    custom={0}
                    className="relative max-w-7xl px-6 pt-0 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap text-center md:rounded-3xl md:border md:border-black/5 md:bg-white/60 p-10 md:shadow-2xl backdrop-blur-2xl mt-[10em]"
                    viewport={{ once: true, amount: 0.5 }} // amount: 0.5 signifie que 50% de la section doit être visible
                >
                    <div
                        className="mx-auto max-w-4xl md:w-[60%] flex flex-col justify-center items-start text-left">
                            <h2 className="text-left text-4xl sm:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r  bg-clip-text text-black ">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Aven-IA : Des agents d'accueil IA pour votre entreprise",
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
                    <img
                        src="/home-bot.png"
                        alt="Image d'illustration"
                        className="right-0 top-0 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96 object-contain rounded-4xl -z-10 max-w-full h-auto margin-auto">
                    </img>
                </motion.section>
                <section id="about">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className="md:mt-[5%] max-w-7xl px-6 rounded-3xl md:border md:border-black/5 md:bg-white/60 p-10 md:shadow-2xl backdrop-blur-2xl py-24 flex flex-col md:flex-row items-center gap-12"
                    >
                        <Image
                            src="/aven-ia-light.png"
                            alt="Logo de aven IA"
                            width={300}
                            height={300}
                            priority
                            className="flex-shrink-0 max-w-full h-auto"
                        />

                        <section className="mx-auto w-full md:w-[60%] space-y-6">
                            <h2 className="text-5xl text-left  tracking-tight bg-gradient-to-r bg-clip-text  text-black">
                                Qui sommes-nous ?
                            </h2>

                            <p className="text-xl leading-relaxed text-left text-slate-700">
                                <span className="font-semibold text-slate-900">AVEN.IA</span> est une
                                agence spécialisée dans les{" "}
                                <span className="text-[#00B9FF] font-medium">agents d’accueil virtuels</span>{" "}
                                (chatbots) et l’
                                <span className="text-[#9B00FF] font-medium">automatisation intelligente</span>.
                            </p>

                            <div className="flex flex-col gap-6 mt-6">
                                {[
                                    "Offrir aux TPE & PME des outils performants et accessibles, comparables à ceux des grandes entreprises.",
                                    "Optimiser la relation client avec des assistants disponibles 24/7, capables de répondre, qualifier et générer des opportunités.",
                                    "Libérer du temps aux dirigeants en déléguant les tâches répétitives à l’IA.",
                                ].map((value, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-lg text-slate-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#00FFC8]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {value}
                                    </div>
                                ))}
                            </div>

                            <blockquote className="mt-8 italic text-xl text-slate-600 border-l-4 border-[#00B9FF] pl-4">
                                « Nous croyons en une technologie sobre, élégante et centrée sur l’humain. Notre objectif est de davenir un partenaire de confiance pour les entreprises qui veulent gagner du temps, améliorer leur performance et préparer l’avenir. »
                            </blockquote>
                        </section>
                    </motion.div>

                </section>
                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className=" max-w-7xl px-6 rounded-3xl p-10 md:py-24 flex flex-col"
                    >
                        <h2 className="text-6xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                            Nos missions
                        </h2>
                        <section className="flex flex-wrap justify-around md:gap-6 max-w-7xl mx-auto">
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
                                    className="md:mt-[5%] w-full sm:w-[45%] lg:w-[30%] px-6 md:py-12 py-8 rounded-3xl md:border md:border-black/5 md:bg-white/60 md:shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center"
                                >
                                    {mission.icon}
                                    <h2 className="text-2xl mb-4 font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                        {mission.title}
                                    </h2>
                                    <p className="text-lg text-slate-700">{mission.text}</p>
                                </motion.div>
                            ))}
                        </section>
                    </motion.div>
                </section>
                <section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className=" rounded-3xl flex flex-col"
                    >
                        <h2 className="text-6xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                            Un mot des fondateurs
                        </h2>
                        <section className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mt-16">
                            {[
                                {
                                    name: "Vincent",
                                    role: "Co-fondateur",
                                    message:
                                        "Mon expérience professionnelle, notamment dans le milieu de l’usine, m’a permis de comprendre " +
                                        "que je voulais aller au-delà d’une simple tâche répétitive. J’ai pu constater de grosses failles dans" +
                                        " l’organisation de systèmes pourtant très bien rodés — des failles qui auraient pu être comblées grâce à l’IA. " +
                                        "Aujourd’hui, mon ambition est de permettre aux entreprises de se développer, de s’optimiser et d’exploiter pleinement les nouvelles technologies.",
                                    image: "/profile-icon.png",
                                },
                                {
                                    name: "Bastien",
                                    role: "Co-fondateur",
                                    message:
                                        "Mon parcours m’a conduit à tester plusieurs métiers et environnements différents. De ces expériences, " +
                                        "j’ai tiré deux leçons essentielles : Dans la majorité des entreprises où j’ai travaillé, j’ai vu à quel point certains " +
                                        "outils d’IA et d’automatisation auraient pu transformer leur fonctionnement. J’ai réalisé que ce que j’aimais réellement, " +
                                        "c’était apporter des solutions utiles qui simplifient le quotidien des professionnels et créent de la valeur.",
                                    image: "/profile-icon.png",
                                },
                            ].map((founder, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeIn}
                                    custom={index + 1}
                                    className="w-[90%] md:w-[45%] px-8 py-10 rounded-3xl border border-black/5 bg-white/60 md:shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center gap-6"
                                >
                                    {/* Avatar */}
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        width={120}
                                        height={120}
                                        className="rounded-full object-cover border-4 border-[#00B9FF]/40 shadow-lg"
                                    />

                                    {/* Info */}
                                    <div>
                                        <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                            {founder.name}
                                        </h3>
                                        <p className="text-slate-600 font-medium text-2xl">{founder.role}</p>
                                    </div>

                                    {/* Message */}
                                    <blockquote className="relative text-xl text-slate-700 italic leading-relaxed">
                                        <span className="absolute -top-4 -left-3 text-5xl text-[#9B00FF]/30">“</span>
                                        {founder.message}
                                        <span className="absolute -bottom-6 -right-3 text-5xl text-[#9B00FF]/30">”</span>
                                    </blockquote>
                                </motion.div>
                            ))}
                        </section>
                    </motion.div>
                </section>
                <section id="services">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className=" max-w-7xl pt-34 px-6 rounded-3xl p-10 flex flex-col"
                    >
                        <h2 className="text-5xl text-center mb-6  tracking-tight bg-gradient-to-r bg-clip-text ">
                            Nos Offres
                        </h2>
                        <section className="flex flex-wrap justify-around gap-6 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "Start : FAQ Turbo",
                                    info: [
                                        "FAQ IA connectée base",
                                        "Capture leads intelligente",
                                        "1 canal, 1000 messages",
                                        "2 options au choix",
                                        "Branding personnalisé",
                                        "Support email 72h"
                                    ],
                                    priceMonth: "149",
                                    priceSetup: "280",
                                    installation_time: "≤ 7 jours",
                                    best: false
                                },
                                {
                                    title: "Grow : RDV Booster",
                                    info: [
                                        "Tout Start inclus",
                                        "Qualification leads rapide",
                                        "Prise RDV instantanée",
                                        "Rappels SMS WhatsApp",
                                        "Intégration CRM complète",
                                        "Rapport hebdo RDV leads",
                                        "2 canaux, 3000 messages",
                                        "Support Slack 48h",
                                        "Garantie résultats 30j"
                                    ],
                                    priceMonth: "390",
                                    priceSetup: "590",
                                    installation_time: "≤ 10 jours",
                                    best: true
                                },
                                {
                                    title: "Scale : Opérateur+ Omnicanal",
                                    info: [
                                        "Tout Grow inclus",
                                        "Inbox omnicanale complète",
                                        "Handoff humain instantané",
                                        "RAG multi-sources quotidien",
                                        "Paiement & e-signature",
                                        "Dashboard décisionnel",
                                        "4+ canaux, 10000 messages",
                                        "6 intégrations possibles",
                                        "Support prioritaire 24h",
                                        "Success mensuel inclus"
                                    ],
                                    priceMonth: "990",
                                    priceSetup: "1190",
                                    installation_time: "≤ 15 jours",
                                    best: false
                                }
                            ].map((mission, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeIn}
                                    custom={index + 1}
                                    className={`relative mt-[5%] md:w-full w-[80%] sm:w-[45%] lg:w-[30%] px-6 py-12 rounded-3xl border md:shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center transition-all ${
                                        mission.best
                                            ? "bg-gradient-to-br from-[#9B00FF]/10 via-[#00B9FF]/10 to-[#00FFC8]/10 border-[#00B9FF] scale-105"
                                            : "bg-white/60 border-black/5"
                                    }`}
                                >
                                    {mission.best && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                            ⭐ Meilleure offre
                                        </div>
                                    )}

                                    <h2 className="text-2xl mb-4 font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-[#9B00FF] via-[#00B9FF] to-[#00FFC8]">
                                        {mission.title}
                                    </h2>

                                    <ul className="text-slate-700 text-sm space-y-2 mb-6">
                                        {mission.info.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-[#00B9FF]">✔</span> {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col items-center space-y-2">
                                        <p className="text-xl font-bold text-slate-800">
                                            {mission.priceMonth}€ <span className="text-sm font-normal">/mois</span>
                                        </p>
                                        <p className="text-sm text-slate-600">Setup : {mission.priceSetup}€</p>
                                        <p className="text-sm text-slate-500">
                                            Installation {mission.installation_time}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedOffer(mission.title); // Remplit le select
                                            contactRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll au formulaire
                                        }}
                                        className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                    >
                                        Choisir cette offre
                                    </button>

                                </motion.div>
                            ))}
                        </section>

                    </motion.div>
                </section>
                <section id="testimony" className="w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
                        className=" w-[75%] md:pt-34 px-6 rounded-3xl flex flex-col mx-auto"
                    >
                        <h2 className="text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                            Ils nous ont fait confiance
                        </h2>
                        <section className="flex flex-wrap justify-center gap-8 w-full mx-auto md:mt-16">
                            {[
                                {
                                    name: "Open Ouest Provence Entreprise",
                                    link: "https://www.entreprisesouestprovence.fr/",
                                    description: "Un acteur local engagé pour le développement économique et l’innovation.",
                                    image: "/client/open-mistral.png",
                                    formule: "Start : FAQ Turbo",
                                },
                            ].map((client, index) => (
                                <motion.a
                                    key={index}
                                    href={client.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={fadeIn}
                                    custom={index + 1}
                                    className="md:w-full sm:w-[45%] lg:w-[30%] rounded-3xl border border-black/5 bg-white/60 md:shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
                                >
                                    {/* Image avec fondu */}
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                                    </div>

                                    {/* Contenu */}
                                    <div className="flex flex-col items-center text-center p-6 gap-4">
                                        <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-black">
                                            {client.name}
                                        </h3>
                                        <h4>
                                            Formule : <span className="text-[#00B9FF] font-medium">{client.formule}</span>
                                        </h4>
                                        {client.description && (
                                            <p className="text-xl text-slate-700">{client.description}</p>
                                        )}
                                    </div>
                                </motion.a>
                            ))}
                        </section>

                    </motion.div>
                </section>
                <section
                    id="contact"
                    ref={contactRef}
                    className={`flex items-center justify-center bg-gradient-to-tr font-montserrat w-[100%] md:w-full md:mt-[5%] mt-16 ${
                        alreadySendEmail ? "opacity-50 pointer-events-none" : ""
                    }`}
                >

                <form
                        onSubmit={sendEmail}
                        className="relative bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 md:shadow-2xl grid grid-cols-2 gap-6 md:w-1/2 p-[3%] w-full"
                    >
                        <p className="col-span-2 text-xl font-medium opacity-70 drop-shadow-md text-center">
                            Contactez-nous
                        </p>

                        <input
                            type="text"
                            placeholder="Nom"
                            disabled={alreadySendEmail}
                            className="px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        <input
                            type="text"
                            placeholder="Prénom"
                            disabled={alreadySendEmail}
                            className="px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        {/* Champ Entreprise */}
                        <input
                            type="text"
                            placeholder="Entreprise"
                            disabled={alreadySendEmail}
                            className="col-span-2 px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        {/* Select avec 3 options */}
                        <label htmlFor="">
                            Type de demande
                        </label>
                        <select
                            value={selectedOffer || ""}
                            onChange={(e) => setSelectedOffer(e.target.value)}
                            className="col-span-2 px-4 py-3 rounded-full w-1/2 bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                            disabled={alreadySendEmail}
                        >
                            <option value="">-- Sélectionnez une option --</option>
                            <option value="Start : FAQ Turbo">Start : FAQ Turbo</option>
                            <option value="Grow : RDV Booster">Grow : RDV Booster</option>
                            <option value="Scale : Opérateur+ Omnicanal">Scale : Opérateur+ Omnicanal</option>
                        </select>


                        <input
                            type="email"
                            placeholder="Email"
                            disabled={alreadySendEmail}
                            className="col-span-2 px-4 py-3 rounded-full bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition"
                        />

                        <textarea
                            placeholder="Message"
                            disabled={alreadySendEmail}
                            className="col-span-2 px-4 py-3 rounded-2xl bg-transparent border border-white/20 shadow-lg focus:outline-none focus:bg-white/10 focus:shadow-xl transition resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={alreadySendEmail}
                            className="col-span-2 mx-auto mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r hover:from-[#9B00FF] hover:to-[#00B9FF] hover:text-white font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer w-[25%]"
                        >
                            Envoyer
                        </button>
                    </form>
                </section>

            </body>


            {/* Footer */}
            <footer className="px-6 py-8">
                <div
                    className="mx-auto max-w-7xl rounded-2xl md:border md:border-black/5 md:bg-white/60 p-6 text-center text-sm text-slate-600 shadow backdrop-blur">
                    © {new Date().getFullYear()} AVEN.IA — Tous droits réservés. Réalisé par <a href="https://www.linkedin.com/in/valentin-gelly/" className="underline" target="_blank">Valentin GELLY</a>
                </div>

            </footer>
        </main>
    );
}
