import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ContadorClientes = ({ limit, title }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div ref={ref} className='flex flex-col gap-2 text-center items-center justify-center py-10'>
            <h2 className='font-bold text-5xl text-zinc-50 tracking-wide '>
                {inView ? <CountUp end={limit} duration={3} separator="." /> : '0'}+
            </h2>
            <p className="text-zinc-300 text-center">{title}</p>
        </div>
    )
}

export default ContadorClientes
