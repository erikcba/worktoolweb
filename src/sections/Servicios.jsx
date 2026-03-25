import React, { useState } from 'react'
import ServiciosCard from '../components/ServiciosCard'

import { motion } from 'framer-motion';

const servicios = [
    {
        id: 1,
        title: "Marketing y Logística Promocional",
        items: ["Distribución nacional", "Gestión de inventarios", "Kitting y armado de packs"]
    },
    {
        id: 2,
        title: "Marketing Digital",
        items: ["Gestión de Redes Sociales", "Pauta publicitaria (Ads)", "Email Marketing", "Estrategia de contenidos"]
    },
    {
        id: 3,
        title: "Producción y organización de Eventos",
        items: ["Eventos corporativos", "Lanzamientos de producto", "Logística integral", "Staff técnico"]
    },
    {
        id: 4,
        title: "Trade Marketing",
        items: [
            "Adhesión de comercios",
            "Colocación de material POP",
            "Mistery Shopper",
            "Sembrado",
            "Merchandiser",
            "Auditoría",
            "Capacitación a comercios",
            "Implementación de promociones"
        ]
    },
];

const Servicios = () => {

    return (
        <div id="servicios" className="bg-zinc-950 text-white pt-20 md:pt-0">
            {/* Título Estático */}
            <div className="flex flex-col items-center justify-center selection:bg-amber-300 selection:text-black gap-4 px-6 md:px-0">
                <p className='text-yellow-400 text-sm uppercase self-start md:self-center font-medium font-gabarito'>Nuestros servicios</p>
                <h2 className="text-left md:text-center font-gabarito uppercase text-4xl md:text-5xl font-bold text-white">
                    Soluciones <span className="text-yellow-300">Integrales</span> <br />
                    Para tu negocio
                </h2>
            </div>

            {/* CONTENEDOR PRINCIPAL: Sin overflow-hidden y con padding bottom extra */}
            <div className="max-w-5xl mx-auto px-6">
                {servicios.map((servicio, index) => (
                    /* Capa de envoltura (Wrapper): 
                       Cada tarjeta necesita su propio espacio de scroll para no empujar a la anterior.
                    */
                    <div
                        key={servicio.id}
                        className="h-screen sticky top-0 flex items-start justify-center"
                        style={{
                            zIndex: index + 1,
                            // Esto evita que la tarjeta 4 empuje a las demás prematuramente
                            paddingTop: `${index * 20}px`
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="w-full bg-zinc-900 border border-zinc-800 p-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] mt-24"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <span className="text-yellow-500 font-mono text-xl italic mb-4 block">0{index + 1} /</span>
                                    <h3 className="text-4xl md:text-5xl font-bold uppercase italic leading-none">
                                        {servicio.title}
                                    </h3>
                                </div>
                                <ul className="space-y-4 border-t md:border-0 border-zinc-700 pt-6 my-auto">
                                    {servicio.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
                                            <span className="text-xl font-medium uppercase tracking-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicios
