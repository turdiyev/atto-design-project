import { useState } from "react"
import Button from "../button/Button"

type Props = {
  variant: 'Hover' | 'Click' | 'Focus',
  position: 'top' | 'bottom' | 'left' | 'right'
}

export default function Popover({

  variant = "Click",

}: Props) {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="relative">

      <Button className={'peer bg-secondary '}
        onClick={() => {
          if (variant === 'Click') setOpen(!open)
        }}
        onBlur={(e) => {
          setOpen(false)
        }}
        onMouseDown={() => {
          if (variant === 'Focus') setOpen(true)
        }}
        onMouseUp={() => {
          if (variant === 'Focus') setOpen(false)
        }}
        id="popover"
      >
        {variant === 'Hover' && 'Hover to activate'}
        {variant === 'Click' && 'Click to activate'}
        {variant === 'Focus' && 'Focus to activate'}
      </Button>

      <div className={`shadow-md transition duration-300 ease-in-out 
          absolute
          bottom-[70px]
          left-1/2 transform -translate-x-1/2

          flex flex-col opacity-0 w-[400px] bg-white  rounded

        ${variant === 'Hover' && 'peer-hover:opacity-100'}
        ${(variant === 'Click' && open) && 'opacity-100'}
        ${(variant === 'Focus' && open) && 'opacity-100'}
        
        `}>
        <div className="relative p-4 rounded">
          <h1 className="text-md font-semibold mb-2 mt-0 ml-0 ">
            Title to context
          </h1>
          <p className="text-sm font-semibold text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolore voluptatum illum ex?
          </p>
          {/* TRIANGLE */}
          <div className="w-3 h-3 border-solid 
            absolute bottom-[-12px] left-1/2 transform -translate-x-1/2
          border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
        </div>
      </div>

    </div >
  )
}