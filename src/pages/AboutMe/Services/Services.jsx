import { FaLaptopHouse, FaLaptopCode, FaShieldAlt } from "react-icons/fa";

const Services = () => {
    return (
        <div className="py-5">
            <div className="text-center my-5">
                <h1 className="uppercase text-3xl mb-1">
                    Services
                </h1>
                <p className="w-40 h-1 bg-base-content rounded-full mx-auto"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
            </div>
            <div className="flex flex-wrap gap-5 justify-between py-3">
                <div className="flex-1 p-3 border border-base-content w-80">
                    <FaLaptopHouse className="text-7xl mb-3 text-primary" />
                    <div>
                        <h1 className="text-2xl font-semibold mb-3">Responsive Web Design</h1>
                        <ul className="list-disc ml-5 leading-7">
                            <li>React website design</li>
                            <li>HTML template design</li>
                            <li>Figma to HTML design</li>
                            <li>Pixel perfect front-end development</li>
                            <li>Fully Responsive front-end development</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 p-3 border border-base-content w-80">
                    <FaLaptopCode className="text-7xl mb-3 text-primary" />
                    <div>
                        <h1 className="text-2xl font-semibold mb-3">Web Development</h1>
                        <ul className="list-disc ml-5 leading-7">
                            <li>Front-end react.js and Back-end Node.js & Express.js</li>
                            <li>SEO friendly coding & standard maintain</li>
                            <li>3rd party applications & scripts integration with existing website</li>
                            <li>Custom layout/feature/functionality</li>
                            <li>development for existing website using HTML, CSS, JS, Node.js, etc.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 p-3 border border-base-content w-80">
                    <FaShieldAlt className="text-7xl mb-3 text-primary" />
                    <div>
                        <h1 className="text-2xl font-semibold mb-3">Web Optimization</h1>
                        <ul className="list-disc ml-5 leading-7">
                            <li>Latest industry leading technology to compress & optimize websites</li>
                            <li>Advanced optimization from server side to client side</li>
                            <li>Performance/speed optimization and security tweak</li>
                            <li>Penetration testing of websites and fixing issues</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;