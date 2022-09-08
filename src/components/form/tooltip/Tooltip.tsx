import Button from "../button/Button";

export default function Popover({
  position = "top"
}: Props) {

  return (
    <div className="relative">

      <Button className={'group bg-secondary flex items-center justify-center'}
        data-tooltip-target="tooltip-top" data-tooltip-placement="top"
      >
        {position === 'top' && "Top"}
        {position === 'right' && "Right"}
        {position === 'bottom' && "Bottom"}
        {position === 'left' && "Left"}

        <div className={`opacity-0 group-hover:opacity-100 absolute duration-300
        ${position === 'top' && 'bottom-[70px]'}
        ${position === 'right' && 'right-[-220px]'}
        ${position === 'bottom' && 'top-[70px]'}
        ${position === 'left' && 'left-[-220px]'}
        `}>
          <p className="p-2 w-[200px] text-xs bg-white text-gray-500 rounded">Lorem ipsum dolor sit amet.</p>

          {position === 'top' && (
            <div className=" absolute w-3 h-3 top-2/2 bottom-[-17px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
          )}
          {position === 'right' && (
            <div className={` absolute top-1/2 left-[-4px] transform -translate-x-1/2 -translate-y-1/2 border-solid border-r-white border-r-8 border-y-transparent border-y-8 border-l-0`}></div>
          )}
          {position === 'bottom' && (
            <div className=" absolute top-[-4px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid  border-b-white border-b-8 border-x-transparent border-x-8 border-t-0"></div>
          )}
          {position === 'left' && (
            <div className="  absolute top-1/2 right-[-12px] transform -translate-x-1/2 -translate-y-1/2  border-solid border-l-white border-l-8 border-y-transparent border-y-8 border-r-0"></div>
          )}
        </div>
      </Button>

    </div>
  )
}

type Props = {
  position?: "top" | "right" | "bottom" | "left";
};
