import React from 'react'
import DigitalCard from '../components/DigitalCard'

const contenido = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM144 432L144 464C144 472.8 151.2 480 160 480L192 480C200.8 480 208 472.8 208 464L208 432C208 423.2 200.8 416 192 416L160 416C151.2 416 144 423.2 144 432zM448 416C439.2 416 432 423.2 432 432L432 464C432 472.8 439.2 480 448 480L480 480C488.8 480 496 472.8 496 464L496 432C496 423.2 488.8 416 480 416L448 416zM144 304L144 336C144 344.8 151.2 352 160 352L192 352C200.8 352 208 344.8 208 336L208 304C208 295.2 200.8 288 192 288L160 288C151.2 288 144 295.2 144 304zM448 288C439.2 288 432 295.2 432 304L432 336C432 344.8 439.2 352 448 352L480 352C488.8 352 496 344.8 496 336L496 304C496 295.2 488.8 288 480 288L448 288zM144 176L144 208C144 216.8 151.2 224 160 224L192 224C200.8 224 208 216.8 208 208L208 176C208 167.2 200.8 160 192 160L160 160C151.2 160 144 167.2 144 176zM448 160C439.2 160 432 167.2 432 176L432 208C432 216.8 439.2 224 448 224L480 224C488.8 224 496 216.8 496 208L496 176C496 167.2 488.8 160 480 160L448 160z" /></svg>,
        title: "Produccion audiovisual estrategica",
        description: "Reels & Filmmaker"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" /></svg>,
        title: "Desarrollo de sitios web",
        description: "Webs funcionales a tu negocio"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M208 64C172.7 64 144 92.7 144 128L144 512C144 547.3 172.7 576 208 576L432 576C467.3 576 496 547.3 496 512L496 128C496 92.7 467.3 64 432 64L208 64zM320 528C302.3 528 288 513.7 288 496C288 478.3 302.3 464 320 464C337.7 464 352 478.3 352 496C352 513.7 337.7 528 320 528z" /></svg>,
        title: "Creacion de apps personalizadas",
        description: "iOS , Android y web"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M448 256C501 256 544 213 544 160C544 107 501 64 448 64C395 64 352 107 352 160C352 165.4 352.5 170.8 353.3 176L223.6 248.1C206.7 233.1 184.4 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C184.4 416 206.6 406.9 223.6 391.9L353.3 464C352.4 469.2 352 474.5 352 480C352 533 395 576 448 576C501 576 544 533 544 480C544 427 501 384 448 384C423.6 384 401.4 393.1 384.4 408.1L254.7 336C255.6 330.8 256 325.5 256 320C256 314.5 255.5 309.2 254.7 304L384.4 231.9C401.3 246.9 423.6 256 448 256z" /></svg>,
        title: "Gestion profesional de redes sociales",
        description: "Community Management"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z" /></svg>,
        title: "Creacion de contenido",
        description: "Direccion creativa"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M320 48C337.7 48 352 62.3 352 80L352 98.3C450.1 112.3 527.7 189.9 541.7 288L560 288C577.7 288 592 302.3 592 320C592 337.7 577.7 352 560 352L541.7 352C527.7 450.1 450.1 527.7 352 541.7L352 560C352 577.7 337.7 592 320 592C302.3 592 288 577.7 288 560L288 541.7C189.9 527.7 112.3 450.1 98.3 352L80 352C62.3 352 48 337.7 48 320C48 302.3 62.3 288 80 288L98.3 288C112.3 189.9 189.9 112.3 288 98.3L288 80C288 62.3 302.3 48 320 48zM163.2 352C175.9 414.7 225.3 464.1 288 476.8L288 464C288 446.3 302.3 432 320 432C337.7 432 352 446.3 352 464L352 476.8C414.7 464.1 464.1 414.7 476.8 352L464 352C446.3 352 432 337.7 432 320C432 302.3 446.3 288 464 288L476.8 288C464.1 225.3 414.7 175.9 352 163.2L352 176C352 193.7 337.7 208 320 208C302.3 208 288 193.7 288 176L288 163.2C225.3 175.9 175.9 225.3 163.2 288L176 288C193.7 288 208 302.3 208 320C208 337.7 193.7 352 176 352L163.2 352zM320 272C346.5 272 368 293.5 368 320C368 346.5 346.5 368 320 368C293.5 368 272 346.5 272 320C272 293.5 293.5 272 320 272z" /></svg>,
        title: "Campañas de Meta Ads",
        description: "Orientadas a conversion"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M286 368C384.5 368 464.3 447.8 464.3 546.3C464.3 562.7 451 576 434.6 576L78 576C61.6 576 48.3 562.7 48.3 546.3C48.3 447.8 128.1 368 226.6 368L286 368zM585.7 169.9C593.5 159.2 608.5 156.8 619.2 164.6C629.9 172.4 632.3 187.4 624.5 198.1L522.1 338.9C517.9 344.6 511.4 348.3 504.4 348.7C497.4 349.1 490.4 346.5 485.5 341.4L439.1 293.4C429.9 283.9 430.1 268.7 439.7 259.5C449.2 250.3 464.4 250.6 473.6 260.1L500.1 287.5L585.7 169.8zM256.3 312C190 312 136.3 258.3 136.3 192C136.3 125.7 190 72 256.3 72C322.6 72 376.3 125.7 376.3 192C376.3 258.3 322.6 312 256.3 312z" /></svg>,
        title: "Gestion de influencers",
        description: "Alianzas estrategicas"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M576 320C576 320.9 576 321.8 576 322.7C575.6 359.2 542.4 384 505.9 384L408 384C381.5 384 360 405.5 360 432C360 435.4 360.4 438.7 361 441.9C363.1 452.1 367.5 461.9 371.8 471.8C377.9 485.6 383.9 499.3 383.9 513.8C383.9 545.6 362.3 574.5 330.5 575.8C327 575.9 323.5 576 319.9 576C178.5 576 63.9 461.4 63.9 320C63.9 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320zM192 352C192 334.3 177.7 320 160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM448 256C465.7 256 480 241.7 480 224C480 206.3 465.7 192 448 192C430.3 192 416 206.3 416 224C416 241.7 430.3 256 448 256z" /></svg>,
        title: "Branding e identidad integral",
        description: "Imagen de marca"
    },
]

const DigitalSection = () => {
    return (
        <section className=' bg-zinc-950' >
            <div className='container mx-auto flex flex-col items-center justify-center py-20'>
                <div className='flex flex-col items-center justify-center gap-4 px-8 md:px-0'>
                    <p className='text-yellow-400 text-sm uppercase font-medium font-gabarito'>Nuestro compromiso</p>
                    <h1 className='text-left md:text-center font-gabarito uppercase text-4xl md:text-5xl font-bold text-white'>
                        Construimos marcas <br />  <span className='text-yellow-300'>solidas, posicionadas y rentables</span>
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6 md:px-0'>
                    {
                        contenido.map((item, index) => (
                            <DigitalCard key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>
            <div className='bg-zinc-950'>

                <div className='container mx-auto flex flex-col px-8 xl:px-0 xl:flex-row gap-20 items-center justify-center py-20'>
                    <div className='w-full xl:w-1/2'>
                        <h1 className='text-left font-gabarito uppercase text-4xl md:text-5xl font-bold text-white'>
                            Una marca fuerte <br /> <span className='text-yellow-300'>no se improvisa</span>
                        </h1>
                        <p className='text-left text-zinc-300 mt-4 text-xl'>
                            Se diseña, se posiciona y se escala con estrategia. <br /> Una agencia aporta la vision global, la experiencia y las herramientas que tu marca necesita para crecer.
                        </p>
                        <div className='bg-yellow-300/80 p-4 mt-6'>
                            <p className='text-zinc-900/70 font-medium text-lg'>
                                No gestionamos redes.
                            </p>
                            <p className='text-black text-xl font-semibold '>
                                Construimos marcas con autoridad, impacto y resultados reales.
                            </p>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2 flex flex-col gap-4 items-center justify-center'>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Construccion de identidad y coherencia visual
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Estrategia global y planificacion a largo plazo
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Optimizacion inteligente de inversion publicitaria
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Analisis de metricas y decisiones basadas en datos
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Equipo especializado en cada area
                            </p>
                        </div>
                        <div className='group ease-in-out bg-zinc-900 border border-zinc-900 hover:border-yellow-400/20 w-full flex flex-row items-center justify-start gap-4 p-6 select-none shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex items-center justify-center h-12 w-12 bg-yellow-400/10 group-hover:bg-yellow-400/50 border border-yellow-400/20 rounded-full transition-all duration-500 ease-in-out'>
                                <div className='w-3/5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 212, 59, 1)" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" /></svg>
                                </div>
                            </div>
                            <p className='text-zinc-200 font-medium text-lg text-left leading-none'>
                                Crecimiento sostenible y posicionamiento premium
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitalSection
