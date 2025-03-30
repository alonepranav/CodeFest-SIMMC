import { Link } from 'react-router-dom'

export default function Codefier() {
    return (
        <div className='pb-32 pt-28 px-2 md:px-40'>
            <div className="w-full md:w-[40rem] mx-auto p-6 bg-white shadow-lg rounded-2xl">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Code Fier Event Overview
                </h1>

                <div className="flex justify-center items-center mb-5 my-10 w-full">
                    <img src={"/1.png"} className="h-60 w-60 rounded-2xl" alt="" />
                </div>

                <p className="text-gray-700 text-lg mb-4 mt-14">
                    Coe-Fier is a competitive tech fest event designed to challenge participants
                    through multiple rounds, testing problem-solving, coding, and analytical skills.
                </p>

                <div className="space-y-6">
                    
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-800">1. MCQ Round (Preliminary Screening)</h2>
                        <p className="text-gray-700 mt-2">
                            Participants start with a multiple-choice questionnaire (MCQ) that tests their fundamental knowledge
                            in programming, algorithms, and general tech concepts. This is a time-bound qualifier round.
                        </p>
                    </div>
 
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-green-800">2. Coding Round</h2>
                        <p className="text-gray-700 mt-2">
                            Qualified participants move to a hands-on coding challenge, solving algorithmic problems
                            and debugging tasks. This round assesses efficiency, logic, and programming skills.
                        </p>
                    </div>
 
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-yellow-800">3. Case Study Round (Final Stage)</h2>
                        <p className="text-gray-700 mt-2">
                            Finalists tackle a real-world tech problem, analyzing and presenting their solutions based on
                            innovation and feasibility. The best strategic solutions win.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        🔥 Join Coe-Fier and showcase your technical prowess!
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-20">
                <Link to={"/register"}>
                    <button className='px-5 py-1.5 rounded-md font-semibold bg-orange-500 text-white'>Register</button>
                </Link>
            </div>
        </div>
    )
}
