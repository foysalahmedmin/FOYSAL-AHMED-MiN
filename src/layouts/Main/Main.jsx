import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import SideBar from "../../pages/Shared/SideBar/SideBar";

const Main = () => {
    return (
        <>
            <main className="flex w-screen mx-auto justify-center lg:h-screen overflow-y-hidden flex-row-reverse relative">
                <section className="flex-1 relative w-screen lg:w-full">
                    <Header dashboard={true} />
                    <div className="min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:overflow-y-scroll">
                        <Outlet />
                    </div>
                </section>
                <section>
                    <SideBar />
                </section>

            </main>
            
        </>

    );
};

export default Main;