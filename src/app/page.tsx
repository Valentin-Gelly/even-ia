"use client";

import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Image from "next/image";

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
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A]  flex flex-col items-center justify-center h-full">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative max-w-7xl px-6 pt-0 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap text-center md:rounded-3xl md:border
                md:border-black/5 p-10 md:shadow-2xl backdrop-blur-2xl md:mt-[14em] mt-[3em]"
                viewport={{ once: true, amount: 0.25 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
                <div
                    className="mx-auto w-full md:max-w-7xl md:w-[60%] flex flex-col justify-center items-start text-left">
                    <section className="max-w-7xl mx-auto px-6">
                        <h1 className="text-left text-4xl sm:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r  bg-clip-text text-black font-bold">
                            <Typewriter
                            options={{
                                strings: [
                                    "L’IA au service de votre performance.",
                                ],
                                autoStart: true,
                                loop: false,
                                delay: 35,
                                deleteSpeed: 99999999999999,
                                cursor: "|",
                            }}
                        />
                        </h1>
                        <p className="mt-6 text-xl text-slate-700 max-w-2xl  text-left">
                            Nous créons des agents d’accueil intelligents qui automatisent vos échanges clients,
                            libèrent votre temps et font passer votre entreprise dans une nouvelle dimension.
                        </p>
                        <a target={`_blank`} href="https://calendly.com/contact-aven-ia/30min"
                           className="mt-8 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r hover:from-[#9B00FF] hover:to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition">
                            Réserver une démo personnalisée
                        </a>
                    </section>
                </div>
                <Image
                    src="/home-bot.png"
                    alt="AVEN.IA Logo"
                    width={350}
                    height={40}
                    priority
                    className="object-contain"
                />
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative w-full md:max-w-7xl px-6 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap text-center
                md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-[5em]"
                viewport={{ once: true, amount: 0.2 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
                <section className="w-full md:max-w-7xl mx-auto px-6 md:py-12 text-center flex items-center flex-wrap justify-around">
                    <div className={`md:w-2/5`}>
                        <Image
                            src="/aven-ia-light.png"
                            alt="AVEN.IA Logo"
                            width={350}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </div>
                    <div className={`md:w-3/5`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">Notre promesse</h2>
                        <p className="text-xl text-slate-700 text-left">
                            Chez AVEN.IA, nous aidons les TPME à franchir un cap : automatiser les premiers échanges
                            avec leurs clients tout en offrant une expérience moderne et professionnelle. <br/><br/>
                            Nous concevons des agents IA élégants, performants et humains — pour que chaque visiteur
                            ait l’impression d’être accueilli par votre meilleure recrue.
                        </p>
                    </div>
                </section>
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative md:w-7xl px-8 py-16 flex flex-col gap-6 justify-center md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-12 w-full"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight bg-gradient-to-r bg-clip-text text-center">
                    Pourquoi un agent d’accueil IA est indispensable
                </h2>
                <p className="text-xl text-slate-700 mb-4 md:text-center ">
                    <b>8 consommateurs sur 10 attendent une réponse immédiate en ligne.</b> Les TPE/PME perdent encore des prospects à cause des appels manqués et mails non traités.
                </p>
                <p className="text-xl text-slate-700 md:text-center ">
                    👉 Notre agent IA agit 24/7 comme un collaborateur digital : il accueille vos visiteurs, filtre les demandes et alimente votre CRM.
                </p>
            </motion.section>


            {/* SECTION – Les avantages AVEN.IA – Les 4 piliers */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative md:w-7xl px-6 pb-10 flex flex-col gap-8 justify-center text-center
  md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-12 w-full"
                viewport={{ once: true, amount: 0.2 }}
            >
                <section className="max-w-6xl mx-auto px-6 md:py-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-10 tracking-tight bg-gradient-to-r bg-clip-text">
                        Les avantages AVEN.IA – Les 4 piliers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200">
                            <h3 className="text-2xl font-bold mb-2">🛡️ Conformité RGPD intégrée</h3>
                            <p className="text-lg text-slate-700">
                                Hébergement en Europe, respect CNIL, minimisation des données. La confiance est au cœur de notre solution.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200">
                            <h3 className="text-2xl font-bold mb-2">🔗 Intégration transparente</h3>
                            <p className="text-lg text-slate-700">
                                Connexion avec vos outils quotidiens : CRM (HubSpot, Pipedrive, Notion), agenda en ligne, automatisations Make/n8n.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200">
                            <h3 className="text-2xl font-bold mb-2">📊 Résultats mesurables</h3>
                            <p className="text-lg text-slate-700">
                                Rapports clairs : leads générés, temps économisé, performance de votre agent IA. Vous savez exactement ce que vous gagnez.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-200">
                            <h3 className="text-2xl font-bold mb-2">🤝 Accompagnement humain</h3>
                            <p className="text-lg text-slate-700">
                                Contrairement aux solutions “plug & play”, nous restons à vos côtés pour configurer, ajuster et optimiser votre agent IA.
                            </p>
                        </div>
                    </div>
                </section>
            </motion.section>

            {/* SECTION – Les chiffres clés */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative md:w-7xl px-6 pb-10 flex flex-col gap-8 justify-center text-center
  md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-12 w-full"
                viewport={{ once: true, amount: 0.2 }}
            >
                <section className="max-w-4xl mx-auto px-6 md:py-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text">
                        Les chiffres clés
                    </h2>
                    <ul className="space-y-4 text-lg text-slate-700 text-left max-w-3xl mx-auto list-disc pl-6">
                        <li>80 % des questions clients simples peuvent être automatisées par un chatbot intelligent (source : Salesforce).</li>
                        <li>87 % des utilisateurs déclarent une expérience positive avec les chatbots (source : Botpress, 2024).</li>
                        <li>Les entreprises qui utilisent un agent IA réduisent en moyenne de 30 % leur volume d’emails clients (source : Intercom).</li>
                    </ul>
                    <p className="mt-6 text-xl text-slate-700">
                        👉 Vous n’avez pas encore besoin de nous croire sur parole. Les chiffres parlent d’eux-mêmes.
                    </p>
                </section>
            </motion.section>

            {/* CTA final */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative md:w-7xl px-6 py-20 flex flex-col items-center text-center bg-gradient-to-r from-[#9B00FF]/10 to-[#00B9FF]/10
  md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-16 w-full"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    Et si vous testiez votre futur agent IA ?
                </h2>
                <p className="text-xl text-slate-700 max-w-2xl mb-8">
                    Ne laissez plus vos prospects sans réponse. Offrez à votre entreprise un accueil digital premium dès aujourd’hui.
                </p>
                <a
                    href="https://calendly.com/contact-aven-ia/30min"
                    target={`_blank`}
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                    📅 Réserver ma démo gratuite
                </a>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                custom={0}
                className="relative md:w-7xl px-6 pb-10 flex flex-col gap-8 justify-center text-center
                md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-12 w-full"
                viewport={{ once: true, amount: 0.2 }} // amount: 0.5 signifie que 50% de la section doit être visible
            >
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">Comment ça fonctionne</h2>
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
                <section className="backdrop-blur-xl md:py-16 pb-16">
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
            </motion.section>
            {/*<motion.section*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    variants={fadeIn}*/}
            {/*    custom={0}*/}
            {/*    className="relative md:w-7xl px-6 pb-10 flex justify-center flex-wrap-reverse md:flex-wrap*/}
            {/*    text-center md:rounded-3xl md:border md:border-black/5 md:shadow-2xl backdrop-blur-2xl md:mt-12 w-full"*/}
            {/*    viewport={{ once: true, amount: 0.2 }} // amount: 0.5 signifie que 50% de la section doit être visible*/}
            {/*>*/}
            {/*    <section className="max-w-6xl mx-auto px-6 py-16">*/}
            {/*        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">Pourquoi nous choisir</h2>*/}
            {/*        <ul className="grid gap-8 md:grid-cols-2 text-lg text-slate-700">*/}
            {/*            <li>✔ Une approche 100 % personnalisée</li>*/}
            {/*            <li>✔ Une intégration fluide à vos outils existants</li>*/}
            {/*            <li>✔ Un accompagnement humain de bout en bout</li>*/}
            {/*            <li>✔ Une expérience utilisateur premium et différenciante</li>*/}
            {/*        </ul>*/}
            {/*    </section>*/}
            {/*</motion.section>*/}
            <section
                className="relative max-w-7xl px-6 pb-10 flex justify-center flex-wrap text-center md:rounded-3xl mt-12"
            >
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 tracking-tight bg-gradient-to-r bg-clip-text ">
                    Ils nous ont fait confiance
                </motion.h2>
                <section className="flex flex-wrap justify-center gap-8 w-full mx-auto md:mt-16">
                    {[
                        {
                            name: "OPEn  Ouest Provence Entreprise",
                            link: "https://www.entreprisesouestprovence.fr/",
                            description: "Un acteur local engagé pour le développement économique et l’innovation.",
                            image: "/client/open-mistral.png",
                            formule: "Essentiel",
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
                            <div className="relative w-full h-48">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                            </div>

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
            </section>
            <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                <p className="text-2xl text-slate-700 mb-8">
                    En moins de 7 jours, vous pouvez déjà voir votre premier agent IA en action.
                </p>
                <a target={`_blank`} href="https://calendly.com/contact-aven-ia/30min"
                   className="px-8 py-4 rounded-2xl bg-gradient-to-r hover:from-[#9B00FF] hover:to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition">
                    Réserver une démo personnalisée
                </a>
            </section>
        </main>

    );
}
