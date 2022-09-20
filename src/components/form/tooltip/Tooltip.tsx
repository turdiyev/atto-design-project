import Button from "../button/Button";

export default function Popover({
  position = "Top"
}: Props) {

  return (
    <div className="relative">

      <Button className={'peer bg-secondary flex items-center justify-center'}
        data-tooltip-target="tooltip-top" data-tooltip-placement="top"
      >
        {position === 'Top' && "Top"}
        {position === 'Right' && "Right"}
        {position === 'Bottom' && "Bottom"}
        {position === 'Left' && "Left"}
      </Button>

      <div className={`opacity-0 peer-hover:opacity-100 absolute duration-300
        ${PositionClasses[position] || ''}`}>

        <p className="bg-white p-2 rounded min-w-[200px] text-sm font-semibold text-gray-600 ">
          Lorem ipsum dolor sit amet.
        </p>

        {position === 'Top' && (
          <div className=" absolute w-3 h-3 top-2/2 bottom-[-17px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
        )}
        {position === 'Right' && (
          <div className={` absolute top-1/2 left-[-4px] transform -translate-x-1/2 -translate-y-1/2 border-solid border-r-white border-r-8 border-y-transparent border-y-8 border-l-0`}></div>
        )}
        {position === 'Bottom' && (
          <div className=" absolute top-[-4px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid  border-b-white border-b-8 border-x-transparent border-x-8 border-t-0"></div>
        )}
        {position === 'Left' && (
          <div className="  absolute top-1/2 right-[-12px] transform -translate-x-1/2 -translate-y-1/2  border-solid border-l-white border-l-8 border-y-transparent border-y-8 border-r-0"></div>
        )}

      </div>
    </div>
  )
}

type Props = {
  position?: "Top" | "Right" | "Bottom" | "Left";
};

const PositionClasses = {
  Top: 'bottom-[70px]  left-1/2 transform -translate-x-1/2',
  Bottom: 'top-[70px]  left-1/2 transform -translate-x-1/2',
  Left: 'right-[119px] top-1/2 transform -translate-y-1/2',
  Right: 'left-[132px] top-1/2 transform -translate-y-1/2',
}