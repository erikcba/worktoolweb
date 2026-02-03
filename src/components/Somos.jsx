import React from 'react'
import NosotrosCard from './NosotrosCard'

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g></svg>,
        title: "Trabajo en Equipo",
        description: "Afrontamos los trabajos como desafíos propios, integrando al cliente en los procesos para lograr el objetivo deseado.",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14"><path fill="white" fillRule="evenodd" d="M5.988.25c-.741 0-1.408.21-1.89.692c-.481.481-.692 1.149-.692 1.89q0 .058.002.115c-.486.03-.94.06-1.295.086c-.717.05-1.3.574-1.45 1.264l-.031.14l-.002.01A27 27 0 0 0 .266 6.33a.625.625 0 0 0 .74.704q.184-.038.422-.039c.511 0 .822.142 1.006.326s.326.495.326 1.007s-.142.822-.326 1.006s-.495.326-1.006.326q-.242 0-.428-.04a.625.625 0 0 0-.744.7c.093.65.221 1.252.349 1.852l.002.01l.03.146c.148.69.728 1.217 1.446 1.272c2.6.199 5.21.199 7.811 0a1.61 1.61 0 0 0 1.445-1.272l.031-.147q.135-.639.226-1.287c.568-.069 1.074-.281 1.46-.668c.483-.482.694-1.152.694-1.895s-.211-1.413-.694-1.896c-.389-.389-.9-.602-1.472-.67q-.095-.668-.239-1.329l-.03-.14l-4.03-1.874l4.03 1.874a1.605 1.605 0 0 0-1.451-1.264a119 119 0 0 0-1.295-.086l.001-.115c0-.741-.21-1.409-.691-1.89C7.397.46 6.729.25 5.989.25m-.544 1.318q.224-.066.544-.068c.512 0 .823.142 1.007.326c.128.128.236.32.29.597zm0 0a1.04 1.04 0 0 0-.462.258c-.184.184-.326.495-.326 1.006q.002.314.065.535a.625.625 0 0 1-.57.79c-.719.038-1.437.086-1.95.123a.355.355 0 0 0-.317.282l-.03.14c-.08.36-.154.705-.22 1.05c.658.036 1.248.25 1.684.686c.482.482.692 1.15.692 1.89c0 .742-.21 1.41-.692 1.89c-.439.44-1.033.654-1.697.688c.063.334.134.668.208 1.016l.032.147a.36.36 0 0 0 .317.286c2.537.193 5.084.193 7.62 0a.36.36 0 0 0 .318-.286l.032-.147q.18-.84.27-1.695a.625.625 0 0 1 .646-.558q.046.003.097.002c.513 0 .826-.142 1.011-.328c.185-.185.328-.498.328-1.011c0-.514-.143-.827-.328-1.012s-.498-.328-1.011-.328l-.105.002a.625.625 0 0 1-.646-.554a17 17 0 0 0-.286-1.737l-.03-.14a.355.355 0 0 0-.319-.283a97 97 0 0 0-1.95-.122a.625.625 0 0 1-.57-.791q.063-.221.065-.535q0-.23-.035-.409z" clipRule="evenodd"/></svg>,
        title: "Estructura Modular",
        description: "Tenemos la fortaleza de poder adaptar nuestra estructura en base a las necesidades específicas de cada cliente.",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"/><path fill="white" d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"/></svg>,
        title: "Cobertura Nacional",
        description: "Brindamos servicios a empresas en todo el país, llegando a cada rincón de Argentina.",
    },
]
const Somos = () => {
    return (
        <section id='nosotros' className=' bg-zinc-950 '>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center relative -top-20'>
                {features.map((feature, index) => (
                   <NosotrosCard
                    key={index}
                    imgCard={feature.icon}
                    title={feature.title}
                    description={feature.description}
                     />
                ))}
            </div>
        </section>
    )
}

export default Somos
