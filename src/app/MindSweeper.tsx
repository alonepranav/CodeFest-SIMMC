import { Link } from 'react-router-dom';

export default function Mindsweeper() {
    return (
        <div className='pb-32 pt-28 px-2 md:px-40'>
            <div className="w-full md:w-[40rem] mx-auto p-6 bg-white shadow-lg rounded-2xl">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Mindsweeper Event Overview
                </h1>

                <div className="flex justify-center items-center mb-5 my-10 w-full">
                    <img src={"/2.png"} className="h-60 w-60 rounded-2xl" alt="Mindsweeper Event" />
                </div>

                <p className="text-gray-700 text-lg mb-4 mt-14">
                    Mindsweeper is an exciting event where participants showcase their technical skills 
                    through live project demonstrations and detailed project presentations.
                </p>

                <div className="space-y-6"> 
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-800">1. Project Presentation</h2>
                        <p className="text-gray-700 mt-2">
                            Participants explain the idea, development process, and impact of their projects. 
                            Judges assess innovation, feasibility, and technical execution.
                        </p>
                    </div>
 
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-green-800">2. Live Project Showcase</h2>
                        <p className="text-gray-700 mt-2">
                            Participants present a working prototype or a live demonstration of their project, 
                            showcasing its functionality and problem-solving approach.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        🚀 Join Mindsweeper and display your innovative projects!
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-20">
                <Link to={"/register"}>
                    <button className='px-5 py-1.5 rounded-md font-semibold bg-orange-500 text-white'>Register</button>
                </Link>
            </div>
        </div>
    );
}
