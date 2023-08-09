import SectionTitle from "../../../components/SectionTitle";

const Courses = () => {
    return (
        <div className="py-5">
            <SectionTitle title={'Courses'} />
            <div className="border-l-4 border-primary py-10 px-5 relative my-10">
                <div>
                    <h1 className="uppercase text-xl font-semibold text-primary">COMPLETE WEB DEVELOPMENT WITH JANKAR MAHABUB</h1>
                    <h2 className="uppercase font-semibold">PROGRAMMING HERO</h2>
                    <p className="mb-3">USA (Online)</p>
                    <p className="opacity-75">
                        Successfully completed a comprehensive MERN Stack Web Development course, gaining proficiency in building full-stack web applications using the MongoDB, Express.js, React.js, and Node.js (MERN) technology stack. Developed practical skills in frontend and backend web development, including creating interactive user interfaces, designing and implementing RESTful APIs, managing databases, and deploying web applications. Acquired hands-on experience in utilizing modern web development tools, libraries, and frameworks. Demonstrated proficiency in HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. Applied agile development methodologies and collaborated in team projects to deliver functional web applications.
                    </p>
                </div>
                <div>
                    <div className="startYear absolute top-[-15px] font-semibold text-xl">Dec, 2022</div>
                    <div className="endYear absolute bottom-[-15px] font-semibold text-xl">Jun, 2023</div>
                </div>
                <p className="top-point absolute w-4 h-4 rounded-full border-4 border-primary top-[-15px] left-[-10px]"></p>
                <span className="bottom-point absolute w-4 h-4 rounded-full border-4 border-primary bottom-[-15px] left-[-10px]"></span>
            </div>
        </div>
    );
};

export default Courses;