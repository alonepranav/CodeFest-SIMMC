import { Link } from "react-router-dom";

export default function HomeAllEvents() {

    return (
        <div className="mt-40">
            <p className="text-center text-5xl font-bold tracking-wide mb-20">Events</p>

            <div className="flex gap-6 justify-center flex-wrap">
                <div className="border border-slate-300 rounded-md p-5 w-80 flex flex-col justify-between gap-3.5">
                    <div className="flex justify-center items-center mb-5">
                        <img src={"/1.png"} className="h-44 w-full object-contain" alt="" />
                    </div>
                    <p className='text-3xl font-semibold'>Code Fire</p>
                    <p className=''>This is the coding event where you willl be tested to code by using Java, C++, Python.</p>
                    <div className="flex gap-5">
                        <Link to={"/register"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-rose-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white'>Register</button>
                        </Link>
                        <Link to={"/event/codefier"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-black transition-all hover:bg-black hover:text-white'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className="border border-slate-300 rounded-md p-5 w-80 flex flex-col justify-between gap-3.5">
                    <div className="flex justify-center items-center mb-5">
                        <img src={"/4.png"} className="h-44 w-full object-contain" alt="" />
                    </div>
                    <p className='text-3xl font-semibold'>MindSweeper</p>
                    <p className=''>MindSweeper is a project Presentation Competition.</p>
                    <div className="flex gap-5">
                        <Link to={"/register"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-rose-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white'>Register</button>
                        </Link>
                        <Link to={"/event/mindsweeper"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-black transition-all hover:bg-black hover:text-white'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className="border border-slate-300 rounded-md p-5 w-80 flex flex-col justify-between gap-3.5">
                    <div className="flex justify-center items-center mb-5">
                        <img src={"/2.png"} className="h-44 w-full object-contain" alt="" />
                    </div>
                    <p className='text-3xl font-semibold'>UI Design</p>
                    <p className=''>A UI designing competition, where students are allocated with a time and provided with different theme to design a web UI.</p>
                    <div className="flex gap-5">
                        <Link to={"/register"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-rose-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white'>Register</button>
                        </Link>
                        <Link to={"/event/uidesign"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-black transition-all hover:bg-black hover:text-white'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className="border border-slate-300 rounded-md p-5 w-80 flex flex-col justify-between gap-3.5">
                    <div className="flex justify-center items-center mb-5">
                        <img src={"/3.png"} className="h-44 w-full object-contain" alt="" />
                    </div>
                    <p className='text-3xl font-semibold'>Mr. Ms Technocrat</p>
                    <p className=''>This event has live intercation with Judges. Participants are tested with their hobies, general knowledge and the final showing the inside talent</p>
                    <div className="flex gap-5">
                        <Link to={"/register"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-rose-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white'>Register</button>
                        </Link>
                        <Link to={"/event/technocrat"}>
                            <button className='px-5 py-1.5 rounded-md font-semibold border border-black transition-all hover:bg-black hover:text-white'>Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
