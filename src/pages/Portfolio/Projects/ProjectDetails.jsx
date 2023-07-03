import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const paramsId = useParams()
    console.log(paramsId.id)
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`https://foysal-ahmed-mi-n-server.vercel.app/project/${paramsId.id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [paramsId])
    console.log(project)
    const { projectName, projectImage, projectScreenshots, developmentDate, companyName, liveLink, githubClientSiteLink, githubServerSiteLink, category, framework, usedTechnologies, aboutProject } = project;
    return (
        <section className="py-5 px-[2.5%]">
            <div className="flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">{projectName}</h1>
                <div className="flex gap-1 items-center">
                    <a className="flex underline items-center gap-1 text-xl pr-1 border-primary border-r-2" href={liveLink}>Preview</a>
                    <a className="flex underline items-center gap-1 text-xl pr-1 border-primary border-r-2" href={githubClientSiteLink}>Client</a>
                    <a className="flex underline items-center gap-1 text-xl" href={githubServerSiteLink}>Server</a>
                </div>
            </div>
            <div>
                <div className="md:flex gap-5 justify-between py-5">
                    <div className='flex-1 mb-5 md:mb-auto'>
                        <div className=" my-5">
                            <h1 className="uppercase text-3xl mb-1">
                                About Project
                            </h1>
                            <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
                        </div>
                        <p className='mb-3 opacity-75'>
                            {aboutProject}
                        </p>
                    </div>
                    <div>
                        <div className="md:w-96" >
                            <div className=" my-5">
                                <h1 className="uppercase text-3xl mb-1">
                                    Project Info
                                </h1>
                                <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
                            </div>
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
                                            usedTechnologies.map((x, i) => <><span key={i}>{x}</span>,</>)
                                        }
                                    </span>
                                </p>
                                <p className="mb-2">
                                    <span className="border-b border-primary font-semibold">Date:</span> <span>{developmentDate}</span>
                                </p>
                            </div>
                            <a className="w-full mt-5" href={liveLink}>
                                <button className="w-full btn rounded-none">
                                    Visit Live Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div>
                        <div className="py-5">
                            <div className=" my-5">
                                <h1 className="uppercase text-3xl mb-1">
                                    Project Screenshots
                                </h1>
                                <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
                            </div>
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between py-3">
                                    {
                                        projectScreenshots.map((img, i) => <div key={i}>
                                            <img src={img} alt="" />
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;