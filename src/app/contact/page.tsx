'use client';


export default function Home() {
    return (
        <main className="min-h-screen bg-[#F5F3F0] text-[#0F172A]  flex items-center justify-center py-20">

            <section className="max-w-3xl w-full px-6 mt-24">
                <h1 className="text-5xl font-bold text-center mb-6">Un projet, une idée, une question ?</h1>
                <p className="text-xl text-center text-slate-700 mb-10">
                    Parlez-nous de votre entreprise et découvrons ensemble comment un agent IA pourrait transformer
                    votre quotidien.
                    Nous vous répondons rapidement, avec clarté et pragmatisme.
                </p>

                <form className="grid gap-6 bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-lg">
                    <input type="text" placeholder="Nom"
                           className="px-4 py-3 rounded-full border border-slate-300 focus:outline-none"/>
                    <input type="email" placeholder="Email"
                           className="px-4 py-3 rounded-full border border-slate-300 focus:outline-none"/>
                    <input type="tel" placeholder="Téléphone"
                           className="px-4 py-3 rounded-full border border-slate-300 focus:outline-none"/>
                    <textarea placeholder="Message"
                              className="px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none"></textarea>
                    <button type="submit"
                            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9B00FF] to-[#00B9FF] text-white font-semibold shadow-lg hover:scale-105 transition">
                        Envoyer
                    </button>
                </form>

                <p className="text-center mt-6 text-slate-600">
                    ⚡ Réponse sous 24h ouvrées <br/>
                    Ou <a href="https://calendly.com/contact-aven-ia/30min" target="_blanck" className="text-[#00B9FF] underline">réservez directement un
                    créneau en ligne</a>.
                </p>
            </section>
        </main>

    )
}