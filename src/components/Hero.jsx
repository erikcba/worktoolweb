import React from 'react'
import heroImage from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-128px)] relative w-full flex items-center justify-center'>
            <div className='bg-linear-to-r from-black to-black/0 h-full w-full absolute '>
            </div>
            <div className='container px-6 xl:px-0 mx-auto absolute h-full flex flex-col items-start justify-center' >
                <h4 className='uppercase text-yellow-300 font-medium text-center'>
                    Logistica promocional
                </h4>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-left font-gabarito uppercase text-white'>
                    Marketing <br />
                    promocional
                </h1>
                <p className='text-white text-left mt-4 max-w-2xl text-lg md:text-xl '>
                    En WorkTool, nos especializamos en brindar soluciones logísticas promocionales personalizadas que impulsan el éxito de tus campañas de marketing.
                </p>
                <div>
                    <button className='mt-8 mr-4 bg-transparent border-2 border-yellow-300 hover:bg-yellow-300 text-white hover:text-black font-semibold px-6 py-3 uppercase transition-all ease-in-out hover:cursor-pointer'>
                        Ver Servicios
                    </button>
                    <button className='mt-8 bg-yellow-300 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400 text-black font-semibold px-6 py-3 uppercase transition-all ease-in-out hover:cursor-pointer'>
                        Contáctanos
                    </button>
                </div>
            </div>
            <img src={heroImage} alt="Hero Image" className="w-full h-full object-cover object-[50%_42%]  " />
        </div>
    )
}

export default Hero
