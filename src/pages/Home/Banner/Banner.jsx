import Lottie from 'lottie-react'
import animation from '../../../assets/Lottie/WebDevAnimation1.json'
import { useTypewriter } from 'react-simple-typewriter'
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'MERN Stack Developer'],
        loop: 0
    })
    return (
        <section className='pb-5 px-[2.5%]'>
            <div className="md:flex flex-row-reverse justify-between items-center">
                <div>
                    <div >
                        <Lottie className='h-[30rem]' animationData={animation} loop={true}></Lottie>
                    </div>
                </div>
                <div className='md:max-w-[50%] text-center md:text-left xl:max-w-lg'>
                    <h1 className='md:text-5xl text-3xl font-bold mb-3 uppercase'>
                        Foysal <span className='text-primary'>Ahmed</span>
                    </h1>
                    <p className='mb-5'><span>I'm </span><span className='font-semibold border-b border-primary'>{text}</span></p>
                    <p className='mb-5'>
                        Welcome to my portfolio! As a skilled MERN stack developer, I am currently seeking new opportunities to take on exciting challenges. With a passion for crafting interactive and visually stunning websites, I am dedicated to delivering my exceptional results. <br /> <br />
                        If you want to make your website more interactive and beautiful, let's collaborate. Contact me today to discuss your project requirements and let's try to create something amazing together.
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