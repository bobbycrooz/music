// import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Hero from "@/sections/hero";
import Section from "@/sections/DummySection";
import Preloader from "@/sections/preloader";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Layout from "@/layout";
import { ParaOne } from "@/sections/pre-section";
import Overview from "@/sections/overview";
import Tours from "@/sections/tours";
export default function Root()
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
                        isLoading ?
                              <Preloader /> :
                              (
                                    <Layout>
                                          <motion.main
                                                key="main" className="w-full">
                                                <Hero />
                                                <Overview />
                                                <ParaOne />
                                                <Tours/>
                                                <ParaOne />
                                                <Section />
                                          </motion.main>
                                    </Layout>
                              )
                  }
            </AnimatePresence>
      );
}
