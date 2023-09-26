import Image from "next/image";
import { Inter } from "next/font/google";

import { TIndexProps } from "@/types/home";
import { NavbarComponent } from "@/components";
import CustomHead from "@/layout/CustomHead";
import { Navbar } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<TIndexProps> = ({ data }) => {
  return (
    <>
      <CustomHead icon="robot1" title="Home" />
      <NavbarComponent />
    </>
  );
};

export default Home;
