type Props = {}

export default function NotFound({ }: Props) {
  return (
    <div className="h-screen w-full text-white flex items-center justify-center">
      <div className="flex flex-col space-y-4 items-center justify-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </span>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Sorry, There's Nothing Here
          </h1>
          <p className="text-gray-400 hover:text-white hover:underline transition-all cursor-pointer">Back to Dashboard</p>
        </div>
      </div>
    </div>
  )
}