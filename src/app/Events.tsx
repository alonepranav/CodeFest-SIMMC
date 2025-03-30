import { Link } from 'react-router-dom'

export default function Events() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-center text-4xl font-semibold mb-10">Events</p>
            <p className="text-center text-2xl font-semibold mb-10">The above events are ging to happen in the SIMMC Campus</p>
            <br />
            <br />
            <br />
            <div className="flex gap-20 items-center justify-center flex-wrap">
                <Link to={"/event/codefier"} className="p-2 w-64 rounded-2xl hover:bg-slate-100 border border-slate-300">
                    <div className="flex justify-center items-center">
                        <img src={"/1.png"} className="h-60 w-60 rounded-xl" alt="Image" />
                    </div>
                    <p className='text-2xl text-center my-3'>Code Fire</p>
                </Link>
                <Link to={"/event/mindsweeper"} className="p-2 w-64 rounded-2xl hover:bg-slate-100 border border-slate-300">
                    <div className="flex justify-center items-center">
                        <img src={"/4.png"} className="h-60 w-60 rounded-xl" alt="Image" />
                    </div>
                    <p className='text-2xl text-center my-3'>Mindsweeper</p>
                </Link>
            </div>

            <div className="flex gap-20 items-center justify-center mt-20 flex-wrap">
                <Link to={"/event/uidesign"} className="p-2 w-64 rounded-2xl hover:bg-slate-100 border border-slate-300">
                    <div className="flex justify-center items-center">
                        <img src={"/2.png"} className="h-60 w-60 rounded-xl" alt="Image" />
                    </div>
                    <p className='text-2xl text-center my-3'>UI Design</p>
                </Link>
                <Link to={"/event/technocrat"} className="p-2 w-64 rounded-2xl hover:bg-slate-100 border border-slate-300">
                    <div className="flex justify-center items-center">
                        <img src={"/3.png"} className="h-60 w-60 rounded-xl" alt="Image" />
                    </div>
                    <p className='text-2xl text-center my-3'>Mr. Ms Technocrat</p>
                </Link>
            </div>


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
