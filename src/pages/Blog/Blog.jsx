import { HiBookOpen } from "react-icons/hi";

const Blog = () => {
    return (
        <div className="px-[2.5%]">
            <div className="py-5 flex justify-between text-3xl pb-3 text-primary border-b-2 border-dashed border-base-content">
                <h1 className="uppercase">Blog.</h1>
                <HiBookOpen />
            </div>
        </div>
    );
};

export default Blog;