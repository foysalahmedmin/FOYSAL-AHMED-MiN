import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Count = () => {
    const [countStart, setCountStart] = useState(true)
    return (
        <section className='bg-base-200 py-5 px-[2.5%]'>
            <ScrollTrigger onEnter={() => setCountStart(true)} onExit={() => setCountStart(false)}>
                <div className=' grid gap-5 grid-cols-2 md:grid-cols-4 justify-center items-center'>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <span className='font-bold text-3xl text-primary'>{countStart && <CountUp start={0} end={2} duration={2} delay={0} />}+</span> <span>Years Experience</span>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <span className='font-bold text-3xl text-primary'>{countStart && <CountUp start={0} end={50} duration={2} delay={0} />}+</span> <span>Completed Projects</span>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <span className='font-bold text-3xl text-primary'>{countStart && <CountUp start={0} end={0} duration={2} delay={0} />}+</span> <span>Happy Customers</span>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <span className='font-bold text-3xl text-primary'>{countStart && <CountUp start={0} end={5} duration={2} delay={0} />}+</span> <span>Honors and Awards</span>
                    </div>
                </div>
            </ScrollTrigger>
        </section>
    );
};

export default Count;