import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const ProjectDetails = () => {
    const paramsId = useParams()
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`https://foysal-ahmed-mi-n-server.vercel.app/project/${paramsId.id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [paramsId])
    const { projectName, projectImage, projectScreenshots, developmentDate, companyName, liveLink, githubClientSiteLink, githubServerSiteLink, category, framework, usedTechnologies, aboutProject } = project;
    return (
        <section className="py-5 px-[2.5%]">
            <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">{projectName}</h1>
            </div>
            <div className="w-full max-h-[700px] p-5 border border-base-content my-5">
                <img className="w-full object-cover" src={projectImage} alt="" />
            </div>
            <div>
                <div className="md:flex gap-5 justify-between py-5">
                    <div className='flex-1 mb-5 md:mb-auto'>
                        <SectionTitle title={'About Project'} />
                        <p className='mb-3 opacity-75'>
                            {aboutProject}
                        </p>
                    </div>
                    <div>
                        <div className="md:w-96" >
                            <SectionTitle title={'Project Info'} />
                            <div className="mb-5">
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Name:</span> <span>{projectName}</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Company:</span> <span>{companyName}</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Category:</span> <span>{category}</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Framework:</span> <span>{framework}</span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Technologies:</span> <span>
                                        {
                                            usedTechnologies?.map((x, i) => <><span key={i}>{x}</span>,</>)
                                        }
                                    </span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Date:</span> <span>{developmentDate}</span>
                                </p>
                            </div>
                            <div className="w-full mt-5 flex justify-between gap-3">
                                <a className="flex-1" href={liveLink}>
                                    <button className="w-full btn rounded-none">
                                        Preview
                                    </button>
                                </a>
                                <a className="flex-1" href={githubClientSiteLink}>
                                    <button className="w-full btn rounded-none">
                                        Client
                                    </button>
                                </a>
                                <a className="flex-1" href={githubServerSiteLink}>
                                    <button className="w-full btn rounded-none">
                                        Server
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <SectionTitle title={'Project Screenshots'} />
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between py-3">
                            {
                                projectScreenshots?.map((img, i) => <div key={i} className="p-3 border border-base-content h-80">
                                    <img className="transition-all duration-1000 h-full w-full object-cover object-top hover:object-bottom" src={img} alt="" />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;