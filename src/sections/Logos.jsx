import React from 'react'

const fila1 = ["Libertad", "Chexa", "Bodega Los Haroldos", "Mondelez", "Tarjeta Naranja", "Sancor Salud", "Beldent"];
const fila2 = ["Vanoli", "Fiserv", "Cencosud", "Jumbo", "VEA", "Tadicor", "Godere", "Go Cuotas"];

const Logos= () => {
    // Truco: Triplicamos los arrays para asegurar cobertura total
    const marcasFila1 = [...fila1, ...fila1, ...fila1];
    const marcasFila2 = [...fila2, ...fila2, ...fila2];

    return (
        <section className="bg-zinc-950 py-20 overflow-hidden">
            <div className="container mx-auto text-center mb-12">
                <p className="text-yellow-400 text-sm uppercase font-medium font-gabarito">
                    Nuestros Aliados
                </p>
                <h2 className="text-center font-gabarito uppercase text-4xl md:text-5xl font-bold text-white leading-snug">
                    Clientes que nos <span className="text-amber-300">eligieron</span>
                </h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* FILA 1 */}
                <div className="flex overflow-hidden">
                    <div className="animate-marquee-left">
                        {marcasFila1.map((marca, index) => (
                            <div key={`f1-${index}`} className="mx-4 select-none hover:text-white hover:border-amber-300 transition-colors text-zinc-400 text-lg font-medium bg-zinc-900 border border-zinc-800 px-10 py-4 rounded-xl whitespace-nowrap">
                                {marca}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FILA 2 */}
                <div className="flex overflow-hidden">
                    <div className="animate-marquee-right">
                        {marcasFila2.map((marca, index) => (
                            <div key={`f2-${index}`} className="mx-4 select-none hover:text-white hover:border-amber-300 transition-colors text-zinc-400 text-lg font-medium bg-zinc-900 border border-zinc-800 px-10 py-4 rounded-xl whitespace-nowrap">
                                {marca}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos