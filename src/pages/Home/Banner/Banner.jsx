import Lottie from 'lottie-react'
import animation from '../../../assets/Lottie/WebDevAnimation1.json'
import { useTypewriter } from 'react-simple-typewriter'
import { FaDownload} from "react-icons/fa";

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'MERN Stack Developer'],
        loop: 0
      })
    return (
        <section className='py-5 px-[2.5%]'>
            <div className="md:flex flex-row-reverse justify-between items-center">
                <div>
                    <div >
                        <Lottie className='h-[30rem]' animationData={animation} loop={true}></Lottie>
                    </div>
                </div>
                <div className='md:max-w-[50%] text-center md:text-left xl:max-w-lg'>
                    <h1 className='md:text-5xl text-5xl font-bold mb-3 uppercase'>
                        Foysal Ahmed
                    </h1>
                    <p className='mb-5'><span>I'm </span><span className='font-semibold border-b border-primary'>{text}</span></p>
                    <p className='mb-5'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <a className="" href="https://drive.google.com/file/d/1BUDGgWeCHh-p7gSUPGDGzGRMUrfWpHAe/view?usp=drive_link">
                        <button className=" btn rounded-none">
                            <FaDownload className='text-primary' /> Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;