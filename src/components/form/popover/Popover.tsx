import Button from "../button/Button"

type Props = {}

export default function Popover({ }: Props) {
  return (
    <div className="relative">

      <Button className={'peer bg-secondary '}>
        Hover to activate
      </Button>

      <div className="hidden shadow-md transition duration-300 ease-in-out translate-x-[-24%] absolute
      bottom-[70px] peer-hover:flex flex-col  w-[400px]
        bg-white p-4 rounded">
        <h1 className="text-md font-semibold mb-2 mt-0 ml-0 ">
          Title to context
        </h1>
        <p className="text-sm font-semibold text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolore voluptatum illum ex?
        </p>
        <div className="w-3 h-3 border-solid absolute bottom-[-12px] left-[46%] border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
      </div>

    </div >
  )
}