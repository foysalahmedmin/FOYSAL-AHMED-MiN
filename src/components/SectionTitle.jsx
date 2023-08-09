
const SectionTitle = ({ title }) => {
    return (
        <div className="mb-5">
            <h1 className="uppercase text-3xl mb-1">
                {title}
            </h1>
            <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
        </div>
    );
};

export default SectionTitle;