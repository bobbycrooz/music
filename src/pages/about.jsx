// import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Hero from "@/sections/hero";
import SectionTwo from "@/sections/DummySection";
import Preloader from "@/sections/preloader";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export default function About()
{

      const [isLoading, setisLoading] = useState(true)

      useEffect(() =>
      {
            setTimeout(() =>
            {
                  setisLoading(!true)
            }, 3000);
      }, []);

      return (
            <AnimatePresence mode="wait">
                  {
                        isLoading ? <Preloader /> : (
                              <motion.main
                                    initial={{ y: 0 }}
                                    animate={{ y: 100 }}
                                    exit={{ y: 0 }}
                                    key="main" className="home bg-red-400 w-full">
                                    <Hero />
                                    <SectionTwo />

                              </motion.main>
                        )
                  }
            </AnimatePresence>
      );
}
