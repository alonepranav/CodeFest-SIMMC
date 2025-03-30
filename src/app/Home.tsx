import HomeAllEvents from "../components/HomeAllEvents";
import EventVenue from "../components/EventVenue";
import Sponsors from "../components/Sponsors";
import OurTeam from "../components/OurTeam";


export default function Home() {
    return (
        <div className='pt-32'>

            <p className="text-orange-500 text-center text-3xl font-semibold">SIMMC's</p>
            <p className='text-center text-5xl md:text-8xl font-bold mt-3'>TechFest  2<span className="text-orange-500">k</span>25
            </p>
            <div className="flex justify-center items-center px-2">
                <div className="flex justify-center">
                    <p className='text-white bg-orange-500 text-2xl text-center mt-14 font-semibold px-10 py-2.5 rounded-md w-fit'>27, 28 & 29 March, 2025</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="mt-10 w-fit flex p-4 rounded-md gap-10 items-center justify-center bg-amber-300">
                    <div className="bg-blue h-10 w-10 border-4 animate-spin border-white"></div>
                    <p className="text-center text-xl">
                        Price up to <span className="text- font-semibold text-3xl">1,10,000 /-</span>
                    </p>
                    <div className="bg-blue h-10 w-10 border-4 animate-spin border-white"></div>
                </div>
            </div>

            <HomeAllEvents />

            <div className="bg-gray-100 py-16 mt-40">
                <p className="text-5xl font-bold tracking-wide text-center">About Us</p>
                <p className="text-center text-xl mt-14 px-3 md:px-60">
                    One of the Best and Top MCA College in Pune for Academic Excellence. AICTE CII Survey of Industry Linked Technical Institutes 2020 ranked Suryadatta Institute of Management & Mass Communication (SIMMC) in platinum category for 6 consecutive years.
                </p>
            </div>


            <Sponsors />


            <OurTeam />

            <br />
            <br />
            <br />
            <br />

            <EventVenue />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <p className="text-center font-bold text-3xl md:text-4xl" >Our Event Invitation</p>
            <div className="flex justify-center items-center mt-20 p-2">
                <img src="/TechFest-SuryaDatta.jpeg" className="border-2 border-orange-500 rounded-2xl h-[32rem] w-full md:h-[50rem] md:w-[36rem]" alt="TechFest-SuryaDatta - Poster" />
            </div>

            <br />
            <br />
            <br />
        </div>
    )
}
