import { HiMenuAlt1, HiX, HiHome, HiUser, HiNewspaper, HiBriefcase, HiBookOpen, HiMail } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import sign from "../../../assets/Images/Sign.png"
import Services from "../Services/Services";
const AboutMe = () => {
    return (
        <section className="py-5 px-[2.5%]">
            <div>
                <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                    <h1 className="uppercase">About Me.</h1>
                    <HiUser />
                </div>
                <div className="md:flex gap-5 justify-between py-5">
                    <div className='flex-1 mb-5 md:mb-auto'>
                        <h1 className='text-2xl font-bold mb-3 uppercase'>
                            Web Developer
                        </h1>
                        <p className='mb-3 opacity-75'>
                            Hello! I'm Foysal Ahmed, a junior MERN stack developer with a strong passion for web development. I have completed a comprehensive MERN stack web development course and gained hands-on experience building interactive web applications. I am dedicated to continuous learning and staying updated with the latest trends in the field.
                            <br /> <br />
                            With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I am capable of handling both front-end and back-end development. I prioritize clean and efficient code, adhering to best practices to deliver seamless user experiences. I thrive in collaborative environments, valuing effective communication and knowledge sharing.
                            <br /> <br />
                            As a junior developer, I am eager to refine my coding skills, improve problem-solving abilities, and become a sought-after professional in web development. I am committed to continuous growth and actively seek new challenges to expand my knowledge and contribute to the advancement of the field.
                            <br /> <br />
                            Thank you for taking the time to get to know me. I am excited to leverage my skills and enthusiasm to create innovative web solutions. Let's collaborate and create remarkable web experiences together!
                        </p>
                        <div>
                            <img className="w-20" src={sign} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="md:w-96" >
                            <h1 className='text-2xl font-bold mb-3 uppercase'>
                                Personal Information
                            </h1>
                            <div className="mb-5">
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Name:</span> <span>Foysal Ahmed</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Age:</span> <span>24 Years</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Email:</span> <span>foysalahmedmin@gmail.com</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Phone:</span> <span>+880 1950-601811</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Current Address:</span> <span>71/18, Sanarpar, West Boxnogor, Demra,
Dhaka.</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Permanent Address:</span> <span>Prodan bhari,Shatnol, 3646, 
Matlab(North), Chandpur.</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Continent:</span> <span>Asia</span>
                                </p>
                                <p className="mb-3">
                                    <span className="border-b border-primary font-semibold">Freelance:</span> <span>Available</span>
                                </p>
                            </div>
                            <a className="w-full mt-5" href="https://drive.google.com/file/d/1BUDGgWeCHh-p7gSUPGDGzGRMUrfWpHAe/view?usp=drive_link">
                                <button className="w-full btn rounded-none">
                                    <FaDownload className='text-primary' /> Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Services />
            </div>
        </section>
    );
};

export default AboutMe;