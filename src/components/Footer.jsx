import React from 'react'
import logo from '../assets/logo-work-tool.png'
import Form from './Form'

const Footer = () => {
    return (
        <section id='contacto' className='bg-zinc-800 py-12 '>

            <div className='container mx-auto border-t border-zinc-600 px-6 xl:px-0'>
                <div className='flex lg:flex-row flex-col py-12 gap-10'>
                    <div className='flex flex-col lg:w-1/2 w-full'>
                        <h2 className='text-left font-gabarito uppercase text-4xl md:text-5xl font-bold text-white leading-snug'>
                            Si queres impulsar tu marca, <br /> <span className='text-amber-300'>contactanos</span>
                        </h2>
                        <div className='hidden lg:flex flex-col'>
                            <p className='text-left text-lg text-white py-10 font-gabarito'>
                                Marketing, Branding, Social Media y Stands. <br />
                                WorkTool. <br />
                                Todos los derechos reservados
                            </p>
                            <img src={logo} alt="Logo Work Tool" className="w-48 h-32 mt-4" />
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
