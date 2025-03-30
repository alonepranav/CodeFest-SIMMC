export default function Loader({ color, size }: { color?: "dark" | "light", size?: string }) {

    if (color == "light")
        return <div className={`border-[5px] border-t-[5px] border-t-black border-white animate-spin ${typeof size == "string" ? size : "h-9 w-9"} rounded-full`}></div>

    return <div className={`border-[5px] border-t-[5px] border-t-slate-200 border-black/80 animate-spin ${typeof size == "string" ? size : "h-9 w-9"} rounded-full`}></div>

}