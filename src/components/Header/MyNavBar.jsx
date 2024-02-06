// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  Bars2Icon
} from "@heroicons/react/24/solid";

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import { motion } from "framer-motion";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <div className="flex gap-4">
          <IconButton size="sm" color="blue" className="rounded-full">
            <FaFacebookF />
          </IconButton>
          <IconButton size="sm" color="red" className="rounded-full">
            <FaYoutube />
          </IconButton>
        </div>
      </MenuHandler>
    </Menu>
  );
}

// nav list menu
// const navListMenuItems = [
//   {
//     title: "@material-tailwind/html",
//     description:
//       "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
//   },
//   {
//     title: "@material-tailwind/react",
//     description:
//       "Learn how to use @material-tailwind/react, packed with rich components for React.",
//   },
//   {
//     title: "Material Tailwind PRO",
//     description:
//       "A complete set of UI Elements for building faster websites in less time.",
//   },
// ];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListMenuItems.map(({ title, description }) => (
//     <a href="#" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//               Pages{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//         Pages{" "}
//       </MenuItem>
//       <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
//         {renderItems}
//       </ul>
//     </React.Fragment>
//   );
// }

// nav list component
const navListItems = [
  {
    label: "Accueil",
    lien: "/home",
  },
  {
    label: "A propos",
    lien: "/about",
  },
  {
    label: "Media",
    lien: "/media",
  },
  {
    label: "Notre Communauté",
    lien: "/communaute",
  },
];

function NavList(propos) {

  
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {/* <NavListMenu /> */}
      {navListItems.map(({ label, lien }, key) => (

       <Typography
          key={key}
          as="li"
          variant="small"
          color="gray"
          className="font-bold text-blue-gray-500"
        >
          <NavLink to={lien}>
          <MenuItem  onClick={propos.openff} className="flex items-center gap-2 lg:rounded-full uppercase">
            <motion.div whileHover={{ scale: 1.2 }}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, staggerChildren: 1 }}
                className="text-gray-900"
              >
                {label}
              </motion.span>
            </motion.div>
          </MenuItem>
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
}

const MyNavbar = () => {

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 mx-auto z-50 max-w-full bg-white border-none   rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium font-bold"
        >
          EGLISE D'ABIDJAN
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList openff={toggleIsNavOpen} />
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
