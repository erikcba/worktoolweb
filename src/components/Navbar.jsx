import React from 'react'
import logo from '../assets/logo-work-tool.png'

const Navbar = () => {
    return (
        <nav className='h-32 bg-black w-full'>
            <div className='container mx-auto flex flex-row items-center justify-between w-full h-full px-6 md:px-0'>
                <div className='w-1/2 h-full flex items-center'>
                    <a href="#">
                        <img src={logo} alt="Logo WorkTool" className='w-32 h-auto' />
                    </a>
                </div>
                <ul className='text-white h-32 flex-row items-center justify-center hidden sm:flex gap-8 font-medium uppercase'>
                    <a href='#' className='hover:text-amber-300 hover:scale-105 transition-all flex items-center ease-in-out h-full' >
                        Inicio
                    </a>
                    <a href='#' className='hover:text-amber-300 hover:scale-105 transition-all flex items-center ease-in-out h-full' >
                        Nosotros
                    </a>
                    <a href='#' className='hover:text-amber-300 hover:scale-105 transition-all flex items-center ease-in-out h-full' >
                        Nuestros Servicios
                    </a>
                    <a href='#' className='hover:text-amber-300 hover:scale-105 transition-all flex items-center ease-in-out h-full'>
                        Contacto
                    </a>
                    <a href='#' className='hover:text-amber-300 hover:scale-105 transition-all flex items-center ease-in-out h-full'>
                        Sumante a WorkTool
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
