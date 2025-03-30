import galleryData, { GalleryDataType } from "../components/data";

export default function Gallery() {
    return (
        <div>
            <div className="pt-24">
                <p className="text-center text-5xl font-bold tracking-wide">Gallery</p>
                <p className="text-center mt-2 text-xl">Our proud moments</p>
            </div>

            <div className="flex gap-10 flex-wrap justify-center mt-14">
                {
                    galleryData.map((a) => <GalleryImageCard data={a} />)
                }
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

function GalleryImageCard({ data }: { data: GalleryDataType }) {
    return <div className="w-72 px-2 pt-2 hover:bg-gray-50 pb-3 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200 border border-slate-200 rounded-2xl transition-all">
        <img src="/1.png" alt={data.title} className="h-64 w-full rounded-lg" />
        <p className="mt-3 px-1">{data.description}</p>
    </div>;
}