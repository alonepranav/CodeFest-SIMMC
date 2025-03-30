import { Link } from 'react-router-dom';

export default function UIDesign() {
    return (
        <div className='pb-32 pt-28 px-2 md:px-40'>
            <div className="w-full md:w-[40rem] mx-auto p-6 bg-white shadow-lg rounded-2xl">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    UI Design Event Overview
                </h1>

                <div className="flex justify-center items-center mb-5 my-10 w-full">
                    <img src={"/4.png"} className="h-60 w-60 rounded-2xl" alt="UI Design Event" />
                </div>

                <p className="text-gray-700 text-lg mb-4 mt-14">
                    The UI Design event challenges participants to create visually appealing 
                    and user-friendly interfaces. It consists of two exciting rounds focusing 
                    on creativity and presentation skills.
                </p>

                <div className="space-y-6"> 
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-800">1. UI Designing</h2>
                        <p className="text-gray-700 mt-2">
                            Participants must design a UI in any tool or platform of their choice. 
                            This round tests creativity, user experience design, and aesthetic sense.
                        </p>
                    </div>
 
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-green-800">2. Presentation to Judges</h2>
                        <p className="text-gray-700 mt-2">
                            Participants present their developed UI to a panel of judges, explaining 
                            their design choices, usability, and overall user experience considerations.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        🎨 Show off your UI design skills and impress the judges!
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
