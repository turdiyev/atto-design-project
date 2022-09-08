import { useState } from "react"
import Button from "../button/Button"

type Props = {
  variant: 'hover' | 'click' | 'focus'
}

export default function Popover({

  variant = "click",

}: Props) {

  const [open, setOpen] = useState<Boolean>(false)

  return (
    <div className="relative">

      <Button className={'peer bg-secondary '}
        onClick={() => {
          if (variant === 'click') setOpen(!open)
        }}
        onBlur={(e) => {
          setOpen(false)
        }}
        onMouseDown={() => {
          if (variant === 'focus') setOpen(true)
        }}
        onMouseUp={() => {
          if (variant === 'focus') setOpen(false)
        }}
        id="popover"
      >
        {variant === 'hover' && 'Hover to activate'}
        {variant === 'click' && 'Click to activate'}
        {variant === 'focus' && 'Focus to activate'}
      </Button>

      <div className={`shadow-md transition duration-300 ease-in-out translate-x-[-24%] absolute
          bottom-[70px] flex flex-col opacity-0 w-[400px]
        bg-white p-4 rounded 

        ${variant === 'hover' && 'peer-hover:opacity-100'}
        ${(variant === 'click' && open) && 'opacity-100'}
        ${(variant === 'focus' && open) && 'opacity-100'}
        
        `}>
        <h1 className="text-md font-semibold mb-2 mt-0 ml-0 ">
          Title to context
        </h1>
        <p className="text-sm font-semibold text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolore voluptatum illum ex?
        </p>
        {/* TRIANGLE */}
        <div className="w-3 h-3 border-solid absolute bottom-[-12px] left-[46%] border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
      </div>

    </div >
  )
}