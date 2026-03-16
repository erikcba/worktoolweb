import React from 'react'
import DigitalCard from '../components/DigitalCard'

const DigitalSection = () => {
    return (
        <section className=' bg-zinc-950' >
            <div className='container mx-auto flex flex-col items-center justify-center pt-40 md:py-0 md:pb-20'>
                <div className='flex flex-col items-center justify-center selection:bg-amber-300 selection:text-black pt-10 md:pt-0 gap-4 px-6 md:px-0'>
                    <p className='text-yellow-400 text-sm uppercase font-medium self-start md:self-center font-gabarito'>Nuestro compromiso</p>
                    <h1 className='text-left md:text-center font-gabarito uppercase text-4xl md:text-5xl font-bold text-white'>
                        Construimos marcas <br />  <span className='text-yellow-300'>solidas, posicionadas y rentables</span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[200px] px-6 md:px-0 pt-20">

                    {/* 01 - Branding (Desktop: Gris | Mobile: Gris) */}
                    <div className="group md:col-span-2 md:row-span-2 p-8 border border-white/5 transition-all bg-zinc-900 hover:bg-yellow-400">
                        <p className="mb-4 text-yellow-500 group-hover:text-zinc-900">01 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-7xl font-bold md:font-black italic uppercase text-yellow-300 group-hover:text-zinc-800">
                            Branding e Identidad Visual
                        </h3>
                    </div>

                    {/* 02 - Audiovisual (Desktop: Gris | Mobile: Amarillo) */}
                    <div className="group md:col-span-2 p-6 border border-white/5 transition-all bg-yellow-400 md:bg-zinc-900 hover:bg-zinc-900 md:hover:bg-yellow-400">
                        <p className="mb-4 text-zinc-900 md:text-yellow-500 group-hover:text-yellow-500 md:group-hover:text-zinc-900">02 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-4xl font-bold italic uppercase text-zinc-800 md:text-yellow-300 group-hover:text-yellow-400 md:group-hover:text-zinc-800">
                            Producción Audiovisual
                        </h3>
                    </div>

                    {/* 03 - Apps (Desktop: Amarillo | Mobile: Gris) */}
                    <div className="group md:col-span-1 p-6 border border-white/5 transition-all bg-zinc-900 md:bg-yellow-400 hover:bg-yellow-400 md:hover:bg-zinc-900">
                        <p className="mb-4 text-yellow-500 md:text-zinc-900 group-hover:text-zinc-900 md:group-hover:text-yellow-500">03 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-2xl font-bold italic uppercase text-yellow-300 md:text-zinc-800 group-hover:text-zinc-800 md:group-hover:text-yellow-400">
                            Creación de apps personalizadas
                        </h3>
                    </div>

                    {/* 04 - Influencers (Desktop: Gris | Mobile: Amarillo) */}
                    <div className="group md:col-span-1 p-6 border border-white/5 transition-all bg-yellow-400 md:bg-zinc-900 hover:bg-zinc-900 md:hover:bg-yellow-400">
                        <p className="mb-4 text-zinc-900 md:text-yellow-500 group-hover:text-yellow-500 md:group-hover:text-zinc-900">03 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-2xl font-bold italic uppercase text-zinc-800 md:text-yellow-300 group-hover:text-yellow-400 md:group-hover:text-zinc-800">
                            Gestión de influencers
                        </h3>
                    </div>

                    {/* 05 - Web (Desktop: Amarillo | Mobile: Gris) */}
                    <div className="group md:col-span-2 p-6 border border-white/5 transition-all bg-zinc-900 md:bg-yellow-400 hover:bg-yellow-400 md:hover:bg-zinc-900">
                        <p className="mb-4 text-yellow-500 md:text-zinc-900 group-hover:text-zinc-900 md:group-hover:text-yellow-500">02 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-4xl font-bold italic uppercase text-yellow-300 md:text-zinc-800 group-hover:text-zinc-800 md:group-hover:text-yellow-400">
                            Desarrollo Web
                        </h3>
                    </div>

                    {/* 06 - Redes (Desktop: Amarillo | Mobile: Amarillo) */}
                    <div className="group md:col-span-2 md:row-span-2 p-8 border border-white/5 transition-all bg-yellow-400 hover:bg-zinc-900">
                        <p className="mb-4 text-zinc-900 group-hover:text-yellow-500">01 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-8xl font-black italic uppercase text-zinc-800 group-hover:text-yellow-400">
                            Gestión de redes sociales
                        </h3>
                    </div>

                    {/* 07 - Contenido (Desktop: Amarillo | Mobile: Gris) */}
                    <div className="group md:col-span-1 p-6 border border-white/5 transition-all bg-zinc-900 md:bg-yellow-400 hover:bg-yellow-400 md:hover:bg-zinc-900">
                        <p className="mb-4 text-yellow-500 md:text-zinc-900 group-hover:text-zinc-900 md:group-hover:text-yellow-500">03 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-2xl font-bold italic uppercase text-yellow-300 md:text-zinc-800 group-hover:text-zinc-800 md:group-hover:text-yellow-400">
                            Creación de contenido
                        </h3>
                    </div>

                    {/* 08 - Meta Ads (Desktop: Gris | Mobile: Amarillo) */}
                    <div className="group md:col-span-1 p-6 border border-white/5 transition-all bg-yellow-400 md:bg-zinc-900 hover:bg-zinc-900 md:hover:bg-yellow-400">
                        <p className="mb-4 text-zinc-900 md:text-yellow-500 group-hover:text-yellow-500 md:group-hover:text-zinc-900">03 / Servicios Digitales</p>
                        <h3 className="text-3xl md:text-2xl font-bold italic uppercase text-zinc-800 md:text-yellow-300 group-hover:text-yellow-400 md:group-hover:text-zinc-800">
                            Campañas de meta ads
                        </h3>
                    </div>
                </div>
            </div>
            <div className='bg-zinc-950'>

                <div className='container mx-auto flex flex-col px-6 xl:px-0 xl:flex-row gap-12 md:gap-20 items-center justify-center py-20'>
                    <div className='w-full xl:w-1/2'>
                        <h1 className='text-left selection:bg-amber-300 selection:text-black font-gabarito uppercase text-4xl md:text-5xl font-bold text-white'>
                            Una marca fuerte <br /> <span className='text-yellow-300'>no se improvisa</span>
                        </h1>
                        <p className='text-left text-zinc-300 selection:bg-amber-300 selection:text-black mt-4 text-xl'>
                            Se diseña, se posiciona y se escala con estrategia. <br /> Una agencia aporta la vision global, la experiencia y las herramientas que tu marca necesita para crecer.
                        </p>
                        <div className='bg-yellow-400/5 border border-yellow-400 selection:bg-amber-300 selection:text-black p-4 mt-10 md:mt-6'>
                            <p className='text-zinc-300 font-medium text-lg'>
                                No gestionamos redes.
                            </p>
                            <p className='text-yellow-400 text-xl font-bold '>
                                Construimos marcas con autoridad, impacto y resultados reales.
                            </p>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2 flex flex-col gap-4 items-center justify-center '>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Construccion de identidad y coherencia visual
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Estrategia global y planificacion a largo plazo
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Optimizacion inteligente de inversion publicitaria
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Analisis de metricas y decisiones basadas en datos
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Equipo especializado en cada area
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-3 sm:p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center shrink-0 h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Crecimiento sostenible y posicionamiento premium
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitalSection
