import React from 'react'

const DigitalCard = ({ title, description, icon }) => {
    return (
        <div className='bg-zinc-900 flex flex-col items-start justify-center p-6 select-none shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-center mb-4 h-16 w-16 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-white text-2xl font-bold'>
                <div className='w-3/5'>
                    {icon}
                </div>
            </div>
            <h3 className='text-white text-xl font-bold text-left'>
                {title}
            </h3>
            <p className='text-zinc-300 text-sm mt-2 text-left'>
                {description}
            </p>
        </div>
    )
}

export default DigitalCard
