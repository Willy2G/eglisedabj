import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import video1 from "../assets/bg/bg1.mp4";
import video2 from "../assets/bg/bg2.mp4";
import video3 from "../assets/bg/bg3.mp4";

const VideoCarousel = () => {
  const videos = [video1, video2, video3];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    fade: true, // Activez l'effet de fondu
    autoplaySpeed: 10000,
    lazyLoad: true,
  };

  return (
    <div className="relative lg:h-[680px] overflow-hidden">
      <Slider {...settings} className="brightness-50">
        {videos.map((video, index) => (
          <div key={index} className="h-full">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src={video}
              type="video/mp4"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.p
                
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 15,
          }}
          className="text-white font-bold lg:text-6xl sm:text-3xl text-md font-gowun
          
          lg:leading-[4.8rem]	text-center"
        >
          Et voici, Je viens bientôt Heureux celui qui garde les paroles de la
          prophétie de ce Livre !
        </motion.p>
      </div>
    </div>
  );
};

export default VideoCarousel;
