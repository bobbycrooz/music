import { Link } from 'react-router-dom'
// import { Input } from "@/components/ui/input"
import { useLocation } from 'react-router-dom';



const DashboardHeader = () =>
{
      let location = useLocation();


      return (
            <div className="flex flex-col">
                  <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        <Link className="lg:hidden" href="#">
                              <Package2Icon className="h-6 w-6" />
                              <span className="sr-only">Home</span>
                        </Link>
                        <div className="w-full flex-1">

                              <h1 className="title flex-1">{location.pathname.split("/")[2]}</h1>

                        </div>

                  </header>

            </div>
      )
}

// <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//       <Taable />
// </main>


// function SearchIcon(props)
// {
//       return (
//             <svg
//                   {...props}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//             >
//                   <circle cx="11" cy="11" r="8" />
//                   <path d="m21 21-4.3-4.3" />
//             </svg>
//       )
// }
function Package2Icon(props)
{
      return (
            <svg
                  {...props}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
            </svg>
      )
}

export default DashboardHeader
