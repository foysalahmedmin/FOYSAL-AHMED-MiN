import { useEffect, useState } from "react";
import { HiBriefcase } from "react-icons/hi";
import Projects_Card from "../Projects/Projects_Card";
import SectionTitle from "../../../components/SectionTitle";

const Portfolio = () => {
    const [Projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://foysal-ahmed-mi-n-server.vercel.app/')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <section className="py-5 px-[2.5%]">
            <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">Portfolio.</h1>
                <HiBriefcase />
            </div>
            <div>
                <div className="py-5">
                <SectionTitle title={'Projects'} />
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between py-3">
                            {
                                Projects.slice(0, 3).map(project => <Projects_Card key={project.id} project={project} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;