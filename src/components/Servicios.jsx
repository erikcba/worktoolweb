import React from 'react'
import ServiciosCard from './ServiciosCard'

const servicios = [

    {
        title: "Marketing y Logística Promocional",
        description: "Diseñamos, desarrollamos e implementamos acciones promocionales en gran parte del país. Vamos desde lo más simple que es proveer de promotoras, hasta la ejecución completa de una promoción, con producción de Stand, uniformes, merchandising. mecánica de juegos, etc..",
        icon: "",
        list: ""
    },
    {
        title: "Trade",
        description: "Conformamos equipos de trabajo para realizar visitas a comercios con diferentes objetivos. Este servicio se puede brindar en gran parte del país",
        icon: "",
        list: "Adhesión de comercios - Colocación de material POP - Mistery Shopper - Sembrado - Merchandiser - Auditoría - Capacitación a comercios - Implementación de promociones"
    },
    {
        title: "Producción y organización de Eventos",
        description: "Trabajamos en conjunto con el cliente en todo lo que respecta al pre, durante y post evento, asesorándolo para que pueda conseguir el objetivo planteado inicialmente. en la locación del lugar, temática, mobiliario, contenido, convocatoria, estética, coordinación y evaluación y reporte final.",
        list: "Selección de locación - Temática - Mobiliario - Contenido - Convocatoria - Estética - Coordinación - Evaluación y reporte final",
        icon: ""
    },
    {
        title: "Marketing Digital",
        description: "Desarrollamos estrategias de marketing digital personalizadas para aumentar la visibilidad de tu marca, atraer clientes potenciales y fomentar la lealtad del cliente a través de múltiples canales digitales.",
        icon: "",
        list: "Gestión de redes sociales - Publicidad en línea (Google Ads, Facebook Ads, etc.) - Email marketing - SEO y SEM - Creación de contenido digital - Análisis y reportes de rendimiento"
    }


]

const Servicios = () => {
    return (
        <section className=' bg-zinc-800 py-20'>
            <div className=''>
                <div className=' container mx-auto flex flex-col items-center justify-center gap-2'>
                    <p className='text-yellow-400 text-sm uppercase font-medium font-gabarito'>
                        Nuestros servicios
                    </p>
                    <h1 className='text-center font-gabarito uppercase text-4xl md:text-5xl font-bold text-white leading-snug'>
                        Soluciones <span className='text-yellow-300'>integrales</span> <br /> para tu negocio
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8 px-10'>
                    {servicios.map((servicio, index) => (
                        <ServiciosCard
                            key={index}
                            title={servicio.title}
                            description={servicio.description}
                            list={servicio.list}
                        />
                    ))}
                </div>

            </div>
        </section >
    )
}

export default Servicios
