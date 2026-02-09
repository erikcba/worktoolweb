import React from 'react';
import logo from '../assets/logo-work-tool.png'

const Form = () => {
    return (
        <form id="form" action="/send-email" method="POST" className="max-w-7xl mx-auto lg:px-4">
            {/* Sección: ¿En qué te ayudamos? */}
            <div className="pb-4 md:mb-20 mb-8">
                <p className="pb-8 text-3xl font-normal text-zinc-100">¿En qué te ayudamos?</p>
                <input
                    id="texto"
                    name="mensaje"
                    className="bg-zinc-900/50 p-5 w-full text-xl border-b-2 border-zinc-700 text-zinc-100 focus:outline-none focus:border-amber-300 transition-colors placeholder:text-zinc-500"
                    type="text"
                    placeholder="Contanos qué necesitás"
                />
            </div>

            {/* Sección: ¿Cómo te contactamos? */}
            <div className="">
                <p className="pb-8 text-3xl font-normal text-zinc-100">¿Cómo te contactamos?</p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <input
                        id="nombre"
                        name="nombre"
                        className="bg-zinc-900/50 p-5 w-full text-xl border-b-2 border-zinc-700 text-zinc-100 focus:outline-none focus:border-amber-300 transition-colors xl:col-span-1 col-span-2 placeholder:text-zinc-500"
                        type="text"
                        required
                        placeholder="Nombre completo"
                    />
                    <input
                        id="email"
                        name="email"
                        className="bg-zinc-900/50 p-5 w-full text-xl border-b-2 border-zinc-700 text-zinc-100 focus:outline-none focus:border-amber-300 transition-colors xl:col-span-1 col-span-2 placeholder:text-zinc-500"
                        type="email"
                        required
                        placeholder="Email"
                    />
                    <input
                        id="empresa"
                        name="empresa"
                        className="bg-zinc-900/50 p-5 w-full text-xl border-b-2 border-zinc-700 text-zinc-100 focus:outline-none focus:border-amber-300 transition-colors xl:col-span-1 col-span-2 placeholder:text-zinc-500"
                        type="text"
                        required
                        placeholder="Empresa"
                    />
                    <input
                        id="telefono"
                        name="telefono"
                        className="bg-zinc-900/50 p-5 w-full text-xl border-b-2 border-zinc-700 text-zinc-100 focus:outline-none focus:border-amber-300 transition-colors xl:col-span-1 col-span-2 placeholder:text-zinc-500"
                        type="number"
                        required
                        placeholder="Teléfono"
                    />

                    {/* Recaptcha y Botón */}
                    <div className="col-span-2 w-full mt-8 md:mt-12">
                        <div className="flex flex-col xl:flex-row items-center xl:gap-0 gap-8">
                            <div className="w-full flex">
                                <button
                                    id="submitBtn"
                                    type="submit"
                                    className="border-2 mx-auto lg:ml-auto lg:mx-0 border-amber-300 text-amber-300 hover:cursor-pointer hover:bg-amber-300 hover:text-zinc-900 transition-all duration-500 rounded-full py-4 px-10 tracking-widest font-bold text-xl uppercase"
                                >
                                    Empecemos
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer del Form (Mobile Only) */}
                    <div className="sm:hidden flex flex-col ">
                        <p className='text-left text-xl text-zinc-400 py-10 font-gabarito'>
                            Marketing, Branding, Social Media y Stands. <br />
                            WorkTool. <br />
                            Todos los derechos reservados
                        </p>
                        <div className="w-32">
                            <img src={logo} alt="Logo Blanco" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;