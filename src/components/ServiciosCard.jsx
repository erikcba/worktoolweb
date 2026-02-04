import React from 'react'

const ServiciosCard = ({ title, description, list }) => {
    return (
        <div
            className="card relative border-2 w-full border-zinc-100 hover:bg-zinc-100 hover:cursor-pointer transition-all ease-in-out duration-500 "
            data-index="0">
            <div className="flex flex-col justify-center h-full">
                <p
                    className="title uppercase text-zinc-100 font-semibold text-2xl max-[400px]:px-2 sm:px-10 px-6 transition-all ease-in-out duration-500 flex flex-col items-start gap-4">
                        {title}
                        {/* <i class='bx bxs-hand-up bx-flashing sm:hidden flex self-center' style={{'color':'#e0dddd'}}></i> */}
                </p>
                <p
                    className="hidden select-none description absolute bottom-5 left-0 right-3 max-[400px]:pb-2 max-[400px]:px-2 pb-6  text-zinc-800 max-[400px]:text-xl text-2xl font-light leading-7 sm:px-10 px-6 2xl:gap-5  gap-3">
                    {list}
                </p>
            </div>
        </div>
    )
}

export default ServiciosCard
