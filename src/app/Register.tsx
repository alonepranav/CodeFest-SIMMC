import { FormEvent } from "react";

export default function Register() {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen py-40 w-screen flex justify-center items-center p-1.5">

            <div className="w-[45rem] mx-auto rounded-2xl bg-white mt-0 p-1.5 bg-gradient-to-tr from-cyan-300 via-fuchsia-500 to-rose-400">
                <div className="bg-white p-6 px-5 md:px-14 rounded-xl">

                    <h2 className="text-center text-2xl font-semibold text-gray-900">
                        Student Registration for Event
                    </h2>
                    <p className="text-center text-gray-600 mt-2">
                        Fill he above form and Submit the attendence to teh event
                    </p>

                    <form className="w-full mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                id="name"
                                className="block w-full rounded-[4px] border border-gray-400 px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                placeholder="Enter your name..."
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="name"
                                className="block w-full rounded-[4px] border border-gray-400 px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                placeholder="Enter your email..."
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Choose the Event
                            </label>
                            <select className="w-full py-2 border border-slate-200">
                                <option>Code Fire</option>
                                <option>MrMs TechFest</option>
                                <option>Battle with Code</option>
                                <option>MindSweeper</option>
                            </select>
                        </div>

                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Scan the QR and Pay with G-Pay
                        </label>
                        <div className="flex justify-center items-center mt-5">
                            <img src="/pay.png" alt="" />
                        </div>
                        <br />
                        <br />
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Attachet the transaction Screenshot
                        </label>
                        <div className="flex mt-3">
                            <input type="file" className="p-2 border border-slate-400 w-full rounded-md" />
                        </div>

                        <br />  
                        <div className="flex justify-center mb-5">
                            <button type="submit" className="bg-orange-500 text-white font-semibold px-10 py-2 rounded-lg hover:bg-sky-600 transition-all disabled:opacity-50">
                                Register for the event
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}