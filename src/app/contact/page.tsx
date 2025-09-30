'use client';

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A] flex items-center justify-center py-20 px-4 mt-24">

            <section className="max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
                    Un projet, une idée, une question ?
                </h1>
                <p className="text-lg sm:text-xl text-center text-slate-700 mb-10">
                    Parlez-nous de votre entreprise et découvrons ensemble comment un agent IA pourrait transformer votre quotidien.
                    Nous vous répondons rapidement, avec clarté et pragmatisme.
                </p>

                <form className="grid gap-6 bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-lg">
                    <input
                        type="text"
                        placeholder="Nom"
                        disabled
                        className="px-4 py-3 rounded-full border border-slate-300 bg-slate-100 cursor-not-allowed focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        disabled
                        className="px-4 py-3 rounded-full border border-slate-300 bg-slate-100 cursor-not-allowed focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Téléphone"
                        disabled
                        className="px-4 py-3 rounded-full border border-slate-300 bg-slate-100 cursor-not-allowed focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        disabled
                        className="px-4 py-3 rounded-2xl border border-slate-300 bg-slate-100 cursor-not-allowed focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        disabled
                        className="px-6 py-3 rounded-2xl bg-gray-400 text-white font-semibold shadow-lg cursor-not-allowed"
                    >
                        Formulaire temporairement désactivé
                    </button>
                </form>

                <p className="text-center mt-6 text-slate-600 text-sm sm:text-base">
                    ⚡ Le formulaire est désactivé pour le moment. <br/>
                    Ou <a
                    href="https://calendly.com/contact-aven-ia/30min"
                    target="_blank"
                    className="text-[#00B9FF] underline">
                    réservez directement un créneau en ligne
                </a>.
                </p>
            </section>
        </main>
    );
}
