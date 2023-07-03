import profileImg from "../../../assets/Images/FoysalAhmed.png"
import { FaLinkedin, FaGithub, FaFacebookSquare, FaTwitterSquare, FaDownload, FaCalendar, FaFlag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="overflow-hidden grid justify-between items-center h-full p-3 py-5 w-60 bg-base-300 text-base-content">
                    <div className="text-center w-full">
                        <div className="text-center w-full">
                            <img className="rounded-full mx-auto h-40 w-40 object-cover" src={profileImg} alt="" />
                        </div>
                        <div className="text-center py-5">
                            <h1 className="uppercase text-2xl font-bold text-primary">Foysal Ahmed</h1>
                            <h3>MERN Stack Developer</h3>
                            <div className="flex gap-3 justify-center pt-5">
                                <a href="https://www.linkedin.com/in/foysal-ahmed-min/"><FaLinkedin className="text-xl text-primary" /></a>
                                <a href="https://github.com/foysalahmedmin"><FaGithub className="text-xl text-primary" /></a>
                                <a href="https://web.facebook.com/foysal.gq"><FaFacebookSquare className="text-xl text-primary" /></a>
                                <a href="https://twitter.com/FoysalAhmedMin"><FaTwitterSquare className="text-xl text-primary" /></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex-col w-full py-5">
                        <div className="mb-3 flex gap-3 items-center">
                            <span><FaLocationDot className="text-primary" /></span> <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className="mb-3 flex gap-3 items-center">
                            <span><FaCalendar className="text-primary" /></span> <p>04, June, 1999</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span><FaFlag className="text-primary" /></span> <p>Bangladeshi</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between py-5">
                        <div className="text-center">
                            <div className="radial-progress" style={{ "--value": "75", "--size": "3.5rem", "--thickness": "2px" }}>75%</div>
                            <p>Bangla</p>
                        </div>
                        <div className="text-center">
                            <div className="radial-progress" style={{ "--value": "55", "--size": "3.5rem", "--thickness": "2px" }}>55%</div>
                            <p>English</p>
                        </div>
                        <div className="text-center">
                            <div className="radial-progress" style={{ "--value": "50", "--size": "3.5rem", "--thickness": "2px" }}>50%</div>
                            <p>Hindi</p>
                        </div>
                    </div>
                    <a className="mt-auto w-full" href="https://drive.google.com/file/d/1BUDGgWeCHh-p7gSUPGDGzGRMUrfWpHAe/view?usp=drive_link">
                        <button className=" btn w-full rounded-none">
                            <FaDownload className="text-primary" /> Resume
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SideBar;