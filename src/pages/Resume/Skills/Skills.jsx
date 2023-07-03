
const Skills = () => {
    return (
        <section>
            <div className="py-5">
                <h1 className="uppercase text-3xl mb-1">
                    Skills
                </h1>
                <p className="w-40 h-1 bg-base-content rounded-full"><p className="w-1/3 h-full bg-primary rounded-full"></p></p>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-between py-3">
                    <div className="p-3 border border-base-content">
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">Expertise</h1>
                            <ul className="list-disc ml-5 leading-7">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript ES6</li>
                                <li>React.js</li>
                                <li>React Router</li>
                                <li>React Hook Form</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>DesyUI</li>
                                <li>Firebase Authentication</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 border border-base-content">
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">Comfortable</h1>
                            <ul className="list-disc ml-5 leading-7">
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li>Rest API</li>
                                <li>Devtool and Debugging</li>
                                <li>JWT Token</li>
                                <li>React Query</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 border border-base-content">
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">Familiar</h1>
                            <ul className="list-disc ml-5 leading-7">
                                <li>Node.js</li>
                                <li>Vue.js</li>
                                <li>Stripe</li>
                                <li>Date-fns</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 border border-base-content">
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">Tools</h1>
                            <ul className="list-disc ml-5 leading-7">
                                <li>Windows</li>
                                <li>VS Code</li>
                                <li>Chrome Dev Tools</li>
                                <li>Git and GitHub</li>
                                <li>Vercel</li>
                                <li>Firebase</li>
                                <li>Netlify</li>
                                <li>Dotenv</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;