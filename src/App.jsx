// import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import { Outlet } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

import {  useRef } from "react";
import { register } from 'swiper/element/bundle';

register();

function App()
{

      let containerRef = useRef(null)

      useEffect(() =>
      {
           const scroll =  new LocomotiveScroll({
                  el: containerRef,
                  smooth: true,
            });

            return () => {
                  scroll.destroy()
            }
       
      }, []);



	return (
		<main  ref={el => containerRef = el}  className="">
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
