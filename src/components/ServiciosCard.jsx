import React from 'react'

const ServiciosCard = ({ title, list, isOpen, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`group card relative border-2 w-full border-zinc-100 transition-all duration-500 select-none overflow-hidden
                ${isOpen ? 'bg-zinc-100' : 'bg-transparent hover:bg-zinc-100'}`}
        >
            <div className="flex flex-col justify-center h-full p-6 sm:p-10">
                <p
                    className={`title font-semibold uppercase text-2xl md:text-3xl transition-all duration-500 flex flex-col items-start gap-4
                        ${isOpen 
                            ? 'text-zinc-800 -translate-y-24' 
                            : 'text-zinc-100 group-hover:text-zinc-800 group-hover:-translate-y-24'
                        }`}
                >
                    {title}
                </p>
                
                <div
                    className={`description absolute left-0 right-0 px-6 sm:px-10 transition-all duration-500 bottom-10
                        ${isOpen 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 translate-y-10 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                        }`}
                >
                    <p className="text-zinc-800 text-lg md:text-xl font-light leading-snug">
                        {list}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiciosCard
