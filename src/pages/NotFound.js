import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col mt-10 items-center gap-5">
    <p className="text-2xl lg:text-4xl text-center font-semibold text-orange-400 ">
       Page not found!
     </p>
     <Link
       to="/"
       className="text-violet-50 text-2xl bg-violet-400 px-5 py-3 rounded-full"
     >
       Go home
     </Link>

   </div>
  )
}

export default NotFound