import { Link } from 'react-router-dom';

export default function MrMsTechnocrats() {
    return (
        <div className='pb-32 pt-28 px-2 md:px-40'>
            <div className="w-full md:w-[40rem] mx-auto p-6 bg-white shadow-lg rounded-2xl">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Mr. & Ms. Technocrats
                </h1>

                <div className="flex justify-center items-center mb-5 my-10 w-full">
                    <img src={"/3.png"} className="h-60 w-60 rounded-2xl" alt="Mr. & Ms. Technocrats" />
                </div>

                <p className="text-gray-700 text-lg mb-4 mt-14">
                    Mr. & Ms. Technocrats is a unique competition that blends technical knowledge with personality, 
                    confidence, and stage presence. Participants compete across multiple rounds to claim the title.
                </p>

                <div className="space-y-6">
                    
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-800">1. MCQ Round</h2>
                        <p className="text-gray-700 mt-2">
                            Participants begin with a multiple-choice questionnaire (MCQ) that tests their knowledge 
                            of technology, innovation, and current trends. This is a screening round to qualify for the next stage.
                        </p>
                    </div>
 
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-green-800">2. Judges' Round</h2>
                        <p className="text-gray-700 mt-2">
                            Shortlisted participants face a panel of judges who evaluate their confidence, 
                            communication skills, and ability to think on their feet through interactive questions.
                        </p>
                    </div>
 
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-yellow-800">3. Ramp Walk & Questionnaire</h2>
                        <p className="text-gray-700 mt-2">
                            Finalists showcase their personality and style in a ramp walk, followed by a live 
                            Q&A session where they answer thought-provoking questions to prove their wit and composure.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        🌟 Step into the spotlight and claim the title of Mr. & Ms. Technocrats!
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
