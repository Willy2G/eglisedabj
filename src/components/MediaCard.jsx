import { React, useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";

import audioIco from "../assets/mediaco/audio.png";
import videoIco from "../assets/mediaco/video.png";
import enregIco from "../assets/mediaco/enreg.png";
import LivreIco from "../assets/mediaco/livre.png";

import { motion } from "framer-motion";

const Media = () => {
  const mediaEl = [
    {
      titre: "Prédications audio",
      contenu:
        "Toutes les prédications de notre frère Ewald Frank, de notre frère William Marrion Branham, de l'Eglise d'Abidjan, ainsi que les cantiques vous sont proposées ici",
      image: enregIco,
      lien: "/audio"
    },
    {
      titre: "Vidéo",
      contenu:
        "Nous mettons à votre disposition toutes les prédications vidéos de votre assemblée locale ainsi que celles de notre bien aimé frère Ewald Frank",
      image: videoIco,
      lien: "/video"
    },
    {
      titre: "Cantiques",
      contenu:
        "Ecoutez, téléchargez des cantiques spirituels interpretés par nos bien-aimés chantres de l'Eglise d'Abidjan.",
      image: audioIco,
      lien: "/chants"
    },
    {
      titre: "Livres et brochures",
      contenu:
        "Trouvez ici les transcriptions des prédications de notre Fr William Branham, en brochures ainsi que les livres et autres écrits de notre Fr Ewald Frank",
      image: LivreIco,
      lien: "/"
    },
  ];

  const ecouteReunion = [
    {
      jourR: "Mercredi",
      heureR: "A partir de 10H",
      typeR: "Prière et exhortation",
      modeSuivi: [
        {
          icon: AiFillAudio,
          libelle: "Suivre en Audio",
          lien: "#",
          couleur: "amber",
        },
        {
          icon: FaFacebookF,
          libelle: "Direct sur Facebook",
          lien: "#",
          couleur: "blue",
        },
        {
          icon: FaYoutube,
          libelle: "Direct sur Youtubre",
          lien: "#",
          couleur: "red",
        },
      ],
    },
    {
      jourR: "Samedi",
      heureR: "A partir de 15H",
      typeR: "Prière et exhortation",
      modeSuivi: [
        {
          icon: AiFillAudio,
          libelle: "Suivre en Audio",
          lien: "#",
          couleur: "amber",
        },
        {
          icon: FaFacebookF,
          libelle: "Direct sur Facebook",
          lien: "#",
          couleur: "blue",
        },
        {
          icon: FaYoutube,
          libelle: "Direct sur Youtubre",
          lien: "#",
          couleur: "red",
        },
      ],
    },
    {
      jourR: "Dimanche",
      heureR: "A partir de 9H",
      typeR: "Culte",
      modeSuivi: [
        {
          icon: AiFillAudio,
          libelle: "Suivre en Audio",
          lien: "#",
          couleur: "amber",
        },
        {
          icon: FaFacebookF,
          libelle: "Direct sur Facebook",
          lien: "#",
          couleur: "blue",
        },
        {
          icon: FaYoutube,
          libelle: "Direct sur Youtubre",
          lien: "#",
          couleur: "red",
        },
      ],
    },
  ];

  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <motion.section className="lg:py-16 py-8 bg-[#fed7aa] text-black" 
      
      initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
      
      >
        <h2
          className="text-black font-bold lg:text-4xl text-2xl uppercase relative h-auto w-full pb-1 text-center "
        >
          NOS RÉUNIONS EN DIRECT <span className="text-red-500">.</span>
        </h2>
        <motion.div className="justify-center flex-1 w-full py-4 mx-auto lg:py-6 md:px-6 " variants={item}>
          <div className="flex flex-wrap">
            <div
              className="w-full mx-auto px-4 mb-10 lg:w-1/2 md:mb-0"
             
            >
              <div class="md:text-2xl text-xl font-bold mb-5">
                <h2 className="text-center">Le Programmes des réunions</h2>
              </div>
              <div class="text-center">
                <p className="md:w-3/5 px-4 mx-auto text-lg">
                  Les réunions se tiennent en français. Pour les personnes ne
                  pouvant comprendre cette langue, une assistance de traduction
                  peut leur etre accordés après qu'elles se soient signalées
                  auprès des diacres.
                </p>
              </div>
              <div class="flex justify-center items-center text-center mt-8 mx-auto">
                <div class="cursor-pointer items-center flex-col flex justify-center hidden">
                  <div class="w-24 h-24 bg-[#ffffff] bg-gradient-to-b rounded-full items-center relative flex justify-center">
                    <img src={enregIco} alt={enregIco} className="w-12" />
                  </div>
                  <div class="text-white rounded-full bg-[#EF5357] bg-gradient-to-b flex justify-center items-center h-8 w-14 mx-auto relative -top-6">
                    <svg
                      class="fill-white w-2 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                    <span>Live</span>
                  </div>
                  <div class="font-bold -mt-5">Eglise d'Abidjan</div>
                </div>
              </div>
            </div>
            <div
              className="w-full mx-auto px-4 mb-10 lg:w-1/2 md:mb-0"
            
            >
              <div className="relative">
                <div class="bg-[#ffffff] bg-gradient-to-b rounded-xl flex flex-col items-center p-4 shadow-2xl">
                  <div class="md:flex md:w-3/4 w-full justify-between items-center text-center">
                    {ecouteReunion.map((data, key) => (
                      <div>
                        <div
                          class="rounded-full font-bold  bg-[#c36c08] text-lg p-3 px-10 text-white"
                          key={key}
                        >
                          {data.jourR}
                        </div>
                        <div class="my-6 text-xl">{data.heureR}</div>
                        <div class="w-10 mx-auto bg-[#A2272A] h-1 rounded-full items-center mb-6"></div>
                        <div class="text-xl">{data.typeR}</div>
                      </div>
                    ))}
                  </div>
                  <div class="w-11/12 mx-auto bg-[#A2272A] h-1 rounded-full items-center my-6"></div>
                  <div class="text-[0.847rem] text-bold ">
                    Les premiers samedi et dimanche du mois sont réservés au
                    suivi{" "}
                    <span className="text-[#c36c08]">
                      en direct du culte de Krefeld.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      
      
      
      <section className="lg:py-16 py-4">
        <h2 className="text-black pb-8 font-bold lg:text-4xl text-3xl uppercase relative h-auto w-full pb-1 text-center ">
          Médias <span className="text-red-500">.</span>
        </h2>
        <div className="z-50 p-2 grid grid-flow-row gap-4 mx-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {mediaEl.map(({ titre, contenu, image, lien }, key) => (
            <div
              key={key}
              className="bg-gradient-to-b from-white/60 to-white/30 text-[#1c0708] backdrop-blur-[.5em] border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-black/50  overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-black/75 hover:backdrop-blur-[1em] transition"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="grid place-items-center text-center gap-1">
                <div className="col-span-4 p-4">
                  <img src={image} alt={image} className="w-16 mx-auto mb-2" />
                  <h2 className="font-bold text-2xl mb-4">{titre}</h2>
                  <p className="text-md text-[#1c0708]/60 font-bold">
                    {contenu}
                  </p>
                   <Link to={`${lien}`} key={key}
                    className="mt-6 py-3 px-2 inline-flex bg-[#8d4d03] hover:bg-[#c36c08] transition-colors text-gray-200 font-bold rounded-sm text-sm"
                  >
                    Consulter
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="hidden">
        <div className="bg-[#fed7aa] text-black py-8">
          <h2 className="text-black pt-6 font-bold lg:text-4xl text-3xl uppercase relative h-auto w-full pb-1 text-center ">
            NOS RÉUNIONS EN DIRECT <span className="text-red-500">.</span>
          </h2>

          <div class="flex justify-center items-center w-full 2lg:w-10/1 mx-auto gap-10">
            <div class="w-full lg:w-1/4 mx-auto ">
              <div class="text-4xl font-bold mb-5">
                <h2>Le Programmes des réunions</h2>
              </div>
              <div class="text-justify text-sm">
                <p>
                  Les réunions se tiennent en français. Pour les personnes ne
                  pouvant comprendre cette langue, une assistance de traduction
                  peut leur etre accordés après qu'elles se soient signalées
                  auprès des diacres
                </p>
              </div>
              <div class="flex justify-between items-center text-center mt-8 w-2/3 mx-auto">
                <div class="cursor-pointer items-center flex-col flex justify-center">
                  <div class="w-24 h-24 bg-[#ffffff] bg-gradient-to-b rounded-full items-center relative flex justify-center">
                    <img src={enregIco} alt={enregIco} className="w-12" />
                  </div>
                  <div class="text-white rounded-full bg-[#EF5357] bg-gradient-to-b flex justify-center items-center h-8 w-14 mx-auto relative -top-6">
                    <svg
                      class="fill-white w-2 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                    <span> Live</span>
                  </div>
                  <div class="font-bold -mt-5">Eglise d'Abidjan</div>
                </div>
              </div>
            </div>
            <div class="bg-[#FF5E64] bg-gradient-to-b rounded-xl flex flex-col items-center p-14 shadow-2xl">
              <div class="flex text-white justify-between gap-10 items-center text-center">
                <div>
                  <div class="rounded-full bg-[#BA0D11] text-lg p-3 px-10"></div>
                  <div class="my-6 text-xl font-bold"></div>
                  <div class="w-10 mx-auto bg-[#A2272A] h-1 rounded-full items-center mb-6"></div>
                  <div class="font-bold text-xl"></div>
                </div>
              </div>
              <div class="w-11/12 mx-auto bg-[#A2272A] h-1 rounded-full items-center my-6"></div>
              <div class="text-[0.847rem]">
                Les premiers samedi et dimanche du mois sont réservés au suivi{" "}
                <span class="text-white">en direct du culte de Krefeld.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
