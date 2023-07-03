import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi";
import Projects_Card from "./Projects/Projects_Card";

const Portfolio = () => {
    const [Projects, setProjects] = useState([])
    useEffect(()=> {
        fetch('https://foysal-ahmed-mi-n-server.vercel.app/')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    console.log(Projects)
    return (
        <section className="py-5 px-[2.5%]">
            <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">Resume.</h1>
                <HiNewspaper />
            </div>
            <div>
                <div className="py-5">
                    <div className="">
                        <h1 className="uppercase text-3xl mb-1">
                            Projects
                        </h1>
                        <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between py-3">
                            {
                                Projects.slice(0,3).map(project => <Projects_Card key={project.id} project={project} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;