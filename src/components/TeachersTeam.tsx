export default function TeachersTeam() {

    return (
        <div className="mt-36">

            <p className="text-center text-2xl font-bold">Faculty Coordinator</p>

            <div className="flex justify-center items-center gap-16 flex-wrap mt-20 px-3 md:px-40">
                {
                    [
                        "Dr. Vidya Gavekar",
                        "Prof Megha Mane",
                        "Dr. Medha Deshmukh",
                        "Dr. Sunetra Gaitonde",
                    ].map((a, i) => {
                        return <div className="">
                            <img className="h-40 w-40 rounded-full border border-slate-500 p-1" src={`${i + 1}.png`} alt={a} key={a} />
                            <p className="text-center mt-5 font-semibold text-lg">{a}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
