export default function Input({ className = '', ...props }: Props): JSX.Element {
  return (
    <label className="relative text-gray-400 focus-within:text-primary block">

      {/* <input
      id='input'
      {...props}
      className={`
      bg-black/20
      text-white
        peer appearance-none font-semibold z-10 
        placeholder-gray-400 
        block w-full px-4 h-[48px] py-6
        rounded-md focus:outline-none
        focus:ring-indigo-500
        focus:outline-green-500 focus:outline-primary focus:outline-1 focus:z-10 sm:text-sm 
        ${className}`}
      placeholder="+998"
    /> */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-4">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
      </svg>


      <input
        id="phone"
        placeholder="+998"
        className="
        form-input
        text-white 
        placeholder-gray-400
        peer appearance-none font-semibold z-10 
        focus:ring-indigo-500
        focus:outline-none
        focus:outline-primary focus:outline-2 focus:z-10 sm:text-sm 
        block w-full px-4 h-[48px] py-6.5 pl-12 pr-12
        rounded-md 
        bg-black/20
        " />
    </label>
  );
}


type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  placeholder?: string; className?: string,
};


const Types = {
  name: "",
  phone: "",
  code: ""
};