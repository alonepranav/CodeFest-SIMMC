import TeachersTeam from "./TeachersTeam"

export default function OurTeam() {

    return (
        <div className="mt-36">
            <p className="font-bold text-4xl tracking-wide text-center">Our Team</p>

            <TeachersTeam />
            <br />
            <br />
            <br />
            <p className="text-center text-2xl font-bold">Students Coordinator</p>

            <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap mt-20 px-3 md:px-40">
                {
                    [
                        "Akanksha Bothe",
                        "Sandesh Pol",
                        "Omkar Kumbhar",
                        "Shivraj Dhage",
                        "Priyanshu S",
                        "Navnath Bharathi",
                    ].map((a) => {
                        return <div className="">
                            <img className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-slate-500 p-1" src={`3.png`} alt={a} key={a} />
                            <p className="text-center mt-5 font-semibold text-lg">{a}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
