import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects_Card = ({ project }) => {
    const {id, projectName, projectImage, liveLink, category, framework} = project;
    return (
        <div className="p-3 border border-base-content">
            <img className="w-full h-40 object-cover mb-3" src={projectImage} alt="" />
            <div>
                <h1 className="text-xl font-semibold">{projectName}</h1>
                <p>{category}</p>
                <p className="mb-3">Based On <span>{framework} Tech.</span></p>
                <div className="w-full flex gap-1">
                    <Link to={`/projectDetails/${id}`}><button className="btn rounded-none flex-1">Details</button></Link>
                    <a href={liveLink}><button className="btn bg-primary rounded-none flex-1">Preview <FaLink /></button></a>
                </div>
            </div>
        </div>
    );
};

export default Projects_Card;