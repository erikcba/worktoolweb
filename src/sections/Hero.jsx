import React from 'react'
import heroImage from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-128px)] relative w-full flex items-center justify-center'>
            <div className='bg-linear-to-r from-black to-black/0 h-full w-full absolute '>
            </div>
            <div className='container px-6 xl:px-0 pt-20 md:pt-0 mx-auto absolute h-full flex flex-col items-start justify-start md:justify-center' >
                <h4 className='uppercase text-yellow-300 font-medium text-center'>
                    Lográ resultados 
                </h4>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-left font-gabarito uppercase text-white'>
                    Marketing <br />
                    Integral
                </h1>
                <p className='text-white text-left mt-4 max-w-2xl text-lg md:text-xl '>
                    Somos una agencia de marketing integral, especializada en construir marcas sólidas, posicionadas y rentables en todo el país.
                </p>
                <div className='flex flex-col md:flex-row items-center justify-start'>
                    <a href='#servicios' className=' mt-8 md:mr-4 bg-transparent border-2 border-yellow-300 active:bg-yellow-300 sm:hover:bg-yellow-300 text-white hover:text-black font-semibold px-6 py-3 uppercase transition-all ease-in-out hover:cursor-pointer'>
                        Ver Servicios
                    </a>
                    <a href="#contacto" className='mt-8 bg-yellow-300 border-2 border-yellow-300 active:bg-border-400 sm:hover:border-yellow-400 active:bg-yellow-400 sm:hover:bg-yellow-400 text-black font-semibold px-6 py-3 uppercase transition-all ease-in-out hover:cursor-pointer'>
                        Contáctanos
                    </a>
                </div>
            </div>
            <img src={heroImage} alt="Hero Image" className="w-full h-full object-cover object-[50%_42%]  " />
        </div>
    )
}

export default Hero
