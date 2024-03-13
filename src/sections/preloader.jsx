import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Preloader()
{
      return (
            <motion.div
                  className="flex bg-zinc-900 items-center justify-center h-screen py-12 w-screen" key={'preload'}>
                  <div className="w-[200px]">
                        <img src="/logo2-crop.png" className=" animate-pulse" alt="" />
                  </div>
            </motion.div>
      );
}

// function FlagIcon(props)
// {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   );
// }
