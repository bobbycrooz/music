import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { GaugeCircle, BadgeDollarSign, ReceiptText, CreditCard, TicketCheck } from "lucide-react";
// import { Button } from './ui/button'
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
// import Taable from './Taable'
// import { NavLink } from 'react-router-dom';

const sidebarLinks = [
      {
            page: "overview",
            link: "/dashboard/overview",
            meta: {
                  icon: (style) => <GaugeCircle className={style} />,
            },
      },
      {
            page: "payment order",
            link: "/dashboard/order",
            meta: {
                  icon: (style) => <BadgeDollarSign className={style} />,
            },
      },
      {
            page: "payment invoice",
            link: "/dashboard/invoice",
            meta: {
                  icon: (style) => <ReceiptText className={style} />,
            },
      },
      {
            page: "payment booking",
            link: "/dashboard/finance",
            meta: {
                  icon: (style) => <CreditCard className={style} />,
            },
      },
      {
            page: "validate receipt",
            link: "/dashboard/validate",
            meta: {
                  icon: (style) => <TicketCheck className={style} />,
            },
      },
];

const Sidebar = () =>
{
      return (
            <div className="hidden border-r border-gray-200 bg-gray-100/40 lg:block dark:border-gray-800 dark:bg-gray-800/40 h-screen">
                  <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-16 items-center border-b px-6">
                              <NavLink className="flex items-center gap-2 font-semibold" to="#">
                                    <div className="centered w-8 h-8 rounded-full bg-gray-700">
                                          <h1 className="font-bold text-xl font-mono text-white">W</h1>
                                    </div>
                                    <span className="">WayaPay</span>
                              </NavLink>
                              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                                    <BellIcon className="h-4 w-4" />
                                    <span className="sr-only">Toggle notifications</span>
                              </Button>
                        </div>

                        <div className="flex-1 overflow-auto py-2">
                              <nav className="grid items-start px-4 text-sm font-medium gap-2">
                                    {sidebarLinks.map((linkItem, index) => (
                                          <NavLink
                                                className="capitalize hover:font-bold text-sm flex items-center gap-3 rounded-lg hover:bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                                to={linkItem.link}
                                                key={index}
                                          >
                                                {linkItem.meta.icon("w-5 h-5")}
                                                {linkItem.page}
                                          </NavLink>
                                    ))}
                              </nav>
                        </div>

                        <div className="mt-auto p-4 mb-10 border-t">

                              <div className="">
                                    <DropdownMenu>
                                          <DropdownMenuTrigger asChild>

                                                <div className="flex items-center gap-3">

                                                      <div className="avatar">
                                                            <div
                                                                  alt="Avatar"
                                                                  className="rounded-full border font-semibold centered p-2"
                                                                  height="32"
                                                                  src="/placeholder.svg"
                                                                  style={{
                                                                        aspectRatio: "32/32",
                                                                        objectFit: "cover",
                                                                  }}
                                                                  width="32"
                                                            >ID</div>
                                                            <span className="sr-only">Toggle user menu</span>
                                                      </div>


                                                      <div className="">
                                                            <h1 className="user font-semibold text-sm">
                                                                  Idrisloove@gmail.com
                                                            </h1>

                                                            <h1 className="user font-sm text-xs capitalize text-gray-400">
                                                                  Admin
                                                            </h1>
                                                      </div>
                                                </div>


                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                                <DropdownMenuItem>Support</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <NavLink to={"/auth"}>
                                                      <DropdownMenuItem>Logout</DropdownMenuItem>
                                                </NavLink>
                                          </DropdownMenuContent>
                                    </DropdownMenu>


                              </div>

                        </div>
                  </div>
            </div>
      );
};

function BellIcon(props)
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
      );
}

// function DollarSignIcon(props)
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
//                   <line x1="12" x2="12" y1="2" y2="22" />
//                   <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//             </svg>
//       )
// }

// function HomeIcon(props)
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
//                   <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                   <polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//       )
// }

// function LineChartIcon(props)
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
//                   <path d="M3 3v18h18" />
//                   <path d="m19 9-5 5-4-4-3 3" />
//             </svg>
//       )
// }

// function Package2Icon(props)
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
//                   <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//                   <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//                   <path d="M12 3v6" />
//             </svg>
//       )
// }

// function PackageIcon(props)
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
//                   <path d="m7.5 4.27 9 5.15" />
//                   <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//                   <path d="m3.3 7 8.7 5 8.7-5" />
//                   <path d="M12 22V12" />
//             </svg>
//       )
// }

// function UsersIcon(props)
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
//                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                   <circle cx="9" cy="7" r="4" />
//                   <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//       )
// }

export default Sidebar;
