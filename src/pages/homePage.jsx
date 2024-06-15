import * as React from "react";
import { useNavigate } from "react-router-dom";


import TrendingSongs from "./trending";
import Top20 from "./Top20";
import Top50 from "./Top50";
import Evergreen from "./Evergreen";
import Happy from "./Happy";
import Romantic from "./Romantic";
import Excited from "./Excited";
import Sad from "./Sad";


const HomePage = ({ isLogin, setIsLogin }) => {


    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signin')
    }



    return (
        <main className="flex flex-col  bg-zinc-950 ">

            <header className="sticky top-0 pt-4 bg-zinc-950">
            <section className="flex overflow-hidden relative z-10 flex-col px-8 pb-2 w-full min-h-[75px] max-md:px-5 max-md:max-w-full ">
                    
                    

                    <div className="flex justify-between  p- relative  pt-px  bg-black bg-opacity-0">
                        <div className="p-4  overflow-hidden relative flex-col  items-start px-4 py-5 text-base aspect-[3.06] text-stone-300 w-[162px] max-md:pr-5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/712912365f2675b23859c08829c04b9c18a99f0c72d83fb9e2103ae7b66ea09c?apiKey=d9edbd9b9779410cb6e09fa7760d29d8&" className="object-cover absolute inset-0 " alt="" />
                        </div>

                        <div className="p-4 ">

                            <button onClick={handleSignIn} className="px-4 py-3.5 bg-cyan-400 rounded-2xl border border-teal-700 border-solid">

                                {isLogin ? 'Sign Out' : 'Sign In'}
                            </button>

                        </div>
                    </div>
                </section>
            </header>
            
            <hr></hr>

        <TrendingSongs/>
        <Top20/>
        <Top50/>
        <Evergreen/>
        <Happy/>
        <Romantic/>
        <Excited/>
        <Sad/>


        </main>
    );
};

export default HomePage;













