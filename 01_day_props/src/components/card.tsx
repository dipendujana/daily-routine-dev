import { cn } from "../lib/utils";



export default function Card({name = 'Batman', image, className, btnText = 'Click me'}: {name?: string, image: string, className: string, btnText?: string}) {
  return (
    <div className={cn("grid gap-4 mt-10 rounded-md", className)}>
      <div className="grid">
        <h1 className="text-2xl font-bold text-center text-white p-2 bg-red-500">{name}</h1>
        <img src={image} alt="placeholder" className="w-full h-[300px] object-cover overflow-hidden" />
        <button className="bg-orange-500 text-white hover:bg-orange-400 cursor-pointer p-2 rounded-md w-1/2 mx-auto my-2">{btnText}</button>
      </div>
    </div>
  )
}           

