import { HiNewspaper } from "react-icons/hi";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

const Resume = () => {
    return (
        <section className="py-5 px-[2.5%]">
            <div>
                <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                    <h1 className="uppercase">Resume.</h1>
                    <HiNewspaper />
                </div>
                <div>
                    <Education />
                    <Skills />
                </div>
            </div>
        </section>
    );
};

export default Resume;