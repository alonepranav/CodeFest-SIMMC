import { FormEvent, useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen w-screen flex justify-center items-center p-1.5 pt-32">

            <div className="max-w-4xl mx-auto rounded-2xl bg-white mt-0 p-1.5 bg-gradient-to-tr from-cyan-300 via-fuchsia-500 to-rose-400">
                <div className="bg-white p-6 px-5 md:px-14 rounded-xl py-16">

                    <h2 className="text-center text-2xl font-semibold text-gray-900">
                        Share Your Feedback & Suggestions for our event 💡
                    </h2>
                    <p className="text-center text-gray-600 mt-3">
                        Your feedback helps us improve the event! Let us know if you have any issues, suggestions, or ideas from your side.
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
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                id="email"
                                className="block w-full rounded-[4px] border border-gray-400 px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="email"
                                placeholder="Enter your email..."
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 flex gap-1 items-center">
                                <span>Your Feedback / Suggestion</span>
                                <span className="text-orange-500 text-3xl"></span>
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="block w-full rounded-[4px] border border-gray-400 px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your feedback / suggestion ..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <button type="submit" className="bg-orange-500 text-white font-semibold px-10 py-2 rounded-lg hover:bg-sky-600 transition-all disabled:opacity-50">
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}