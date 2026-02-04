import React from 'react'

const NosotrosCard = ({imgCard, title, description}) => {
    return (
        <div className='border border-yellow-200 hover:border-yellow-300  w-90 h-72 m-4 pt-8 p-4 bg-zinc-950 transition-all ease-in-out'>
            <div className='flex flex-col items-center justify-start gap-8 h-full'>
                <div>
                    {imgCard}
                </div>
                <h2 className='text-white font-medium lg:text-2xl uppercase font-gabarito select-none '>
                    {title}
                </h2>
                <p className='text-center font-light text-zinc-200 select-none '>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default NosotrosCard
