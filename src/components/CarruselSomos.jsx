import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img1 from '../assets/somos1.jpeg';
import img2 from '../assets/somos2.jpeg';
import img3 from '../assets/somos3.jpeg';
import img4 from '../assets/somos4.jpeg';
import img5 from '../assets/somos5.jpeg';

// IMPORTANTE: Si no importas esto, el carrusel se verá como una lista vertical fea
import '@splidejs/react-splide/css';

const CarruselSomos = () => {
    // Aquí configuras el comportamiento del carrusel
    const mainOptions = {
        type: 'fade',
        rewind: true,       // Velocidad de transición
        perPage: 1,         // Cuántos slides ves a la vez
        perMove: 1,         // Cuántos avanza al dar click
        gap: '1rem',    // Espacio entre slides
        autoplay: true,      // ¿Se mueve solo?
        interval: 3000,
        arrows: false
    };

    const slides = [
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 5,
            img: img5
        }
    ];

    return (
        <div className="wrapper w-full">
            <Splide options={mainOptions}>
                {slides.map((slide) => (
                    <SplideSlide key={slide.id}>
                        <div style={{
                            height: '500px',
                            width: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}>
                            <img src={slide.img} className='rounded-md w-auto h-full overflow-hidden' alt="" />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            {/* Un poco de CSS rápido para que se vea profesional */}
            <style>{`
        .splide__arrow { background: #000; opacity: 0.7; }
        .splide__arrow svg { fill: #fff; }
        .splide__pagination__page.is-active { background: #000; }
      `}</style>
        </div>
    );
};

export default CarruselSomos;