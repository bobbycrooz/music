// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

// const anim = {
//       initial:
// }


export function Slides()
{
	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
			className="w-screen h-[90vh]"
			autoplay={true}
		>
			<SwiperSlide className="w-screen h-full bg-primary">
				<MusicPromotionSlide />
			</SwiperSlide>

			<SwiperSlide className="w-screen h-full bg-primary">
				<MusicPromotionSlide />
			</SwiperSlide>
		</Swiper>
	);
}


function MusicPromotionSlide({ coverImg, songTitle, songUrl })
{

	return (
		<div style={{
			backgroundImage: `url(${coverImg || "/slides/img1.webp"})`,
			backgroundSize: "corver"
		}} className="promotion-music-container w-full h-full object-cover bg-cover relative">

			<div className="overlay absolute w-full h-full bg-[#00000073]">

				<div className="absolute text-right text-white bottom-[30%] right-20 space-y-10">
					<p className="title1">New release</p>
					<h1 className="song-name title3 text-[56px] font-bold shadow text-white font-inter">
						girls on girls (with lil baby)
					</h1>

					<Button>Listen noww</Button>

				</div>

				<div className="g-box absolute left-20 border border-white py-2 p-4 bg-transparent bottom-10">
					<p className="song font-mono text-sm capitalize">songs</p>
				</div>
			</div>

		</div>
	)
}