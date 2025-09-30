"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 },
        }),
    };
    const navigation = [
        { name: "Accueil", href: "/" },
        { name: "Offres", href: "/offres" },
        { name: "À propos", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 726){
                setIsScrolled(window.scrollY > 50);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="fixed top-0 left-0 w-full z-50"
            viewport={{ once: true, amount: 0.2 }} // amount: 0.5 signifie que 50% de la section doit être visible
        >
            {/* Header */}
            <header
                className={` relative bg-white/70 backdrop-blur-md  md:rounded-2xl border border-white/20 
                    md:shadow-2xl flex  h-full  bg-clip-padding backdrop-filter bg-opacity-60 mx-auto transition-all duration-300 ${
                    isScrolled ? "py-0 shadow-md w-full rounded-none" : "md:mt-8 md:py-2 shadow-md md:rounded-2xl md:w-10/12"
                }
                     backdrop-blur-md`}
            >
                <div className={`px-6 py-2 flex items-center justify-between w-full${
                    isScrolled ? " md:py-2 px-24" : " md:py-4"
                }`}>
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-5xl py-4 font-extrabold tracking-wide">
                            AVEN.IA
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-slate-700 font-medium text-lg">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-lg text-slate-700 hover:text-[#00B9FF] transition
             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
             after:bg-[#00B9FF] after:transition-all after:duration-300 hover:after:w-full"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="https://calendly.com/contact-aven-ia/30min"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r hover:from-[#9B00FF]/60 hover:to-[#00B9FF]/60 text-white font-semibold shadow-lg hover:scale-105 transition"
                            onClick={() => setIsMenuOpen(false)}
                            target={`_blank`}
                        >
                            Réserver une démo
                        </Link>
                    </nav>

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
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg text-slate-700 hover:text-[#00B9FF] transition"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                target={`_blank`} href="https://calendly.com/contact-aven-ia/30min"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r hover:from-[#9B00FF] hover:to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Réserver une démo
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </motion.header>
    );
}
