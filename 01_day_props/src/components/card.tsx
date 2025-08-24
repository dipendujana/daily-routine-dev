import { cn } from "../lib/utils";



export default function Card({name = 'Batman', image, className}: {name?: string, image: string, className: string}) {
  return (
    <div className={cn("bg-blue-500 grid gap-4 mt-10 rounded-md", className)}>
      <div className="grid bg-red-500">
        <h1 className="text-2xl font-bold text-center text-white p-2">{name}</h1>
        <img src={image} alt="placeholder" className="w-full h-[300px] object-cover overflow-hidden" />
      </div>
    </div>
  )
}           

