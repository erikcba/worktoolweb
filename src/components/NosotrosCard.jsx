import React from 'react'

const NosotrosCard = ({imgCard, title, description}) => {
    return (
        <div className=' sm:w-90 w-full h-fit sm:h-72 py-12 sm:pt-8 p-4 bg-zinc-900 transition-all ease-in-out shadow-lg'>
            <div className='flex flex-col items-center justify-start gap-4 2xl:gap-8 h-full'>
                <div>
                    {imgCard}
                </div>
                <h2 className='text-white font-medium text-xl lg:text-2xl uppercase font-gabarito select-none '>
                    {title}
                </h2>
                <p className='text-center font-light text-zinc-200 text-lg sm:text-base select-none '>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default NosotrosCard
