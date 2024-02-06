import React from "react";
import { Typography } from "@material-tailwind/react";
import assemblee from "../assets/images/assemblee.jpg";

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="flex items-center lg:py-16 py-4 bg-stone-100  font-poppins dark:bg-gray-800 z-0">
        <div className="justify-center flex-1 w-full lg:mx-16 py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src={assemblee}
                  alt=""
                  className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div className="absolute z-10 hidden w-full h-full bg-brown-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="text-black  font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center xl:text-left ">
                A propos <span className="text-red-500">.</span>
              </h2>
              <Typography color="gray" className="mb-8 mt-3 font-normal">
                Dix ans que le précédent site a été mis en ligne, permettant à
                tous ceux qui ont soif de la Parole de Dieu, d'avoir accès au
                Message divin dans notre temps... Le temps a coulé, et la
                technologie obligeant, nous avons été contraints de remanier le
                site pour le moderniser.
              </Typography>

              <Typography color="gray" className="mb-8 mt-3 font-normal">
                Sans prétention aucune, ce site se veut une courroie, un canal,
                un véhicule pour prolonger ce que Dieu fait par Ses serviteurs
                sur terre dans notre temps...
              </Typography>

              <Typography color="gray" className="mb-8 mt-3 font-normal">
                Cette version n'est pas achevée. Elle sera complètée au fil du
                temps pour vous offrir l'ensemble des services que la version
                précédente vous proposait... Tout y est gratuit car... ce que
                vous avez reçu gratuitement, donnez-le gratuitement.
              </Typography>

              <Link to={'/home'}
               
                className="px-4 py-3 uppercase text-white transition-all transform bg-[#8d4d03] rounded-[80px] hover:bg-[#c36c08] dark:hover:text-gray-100 dark:text-gray-100 "
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
