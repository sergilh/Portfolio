"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
/*Componentes*/
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// React Server Components
import { React } from "react";
import { Link, Element } from "react-scroll";
const Home = () => {
	return (
		<main className="flex-col   w-full min-h-[300vh] ">
			<Header />
			{/* Sección Hero Home */}
			<Hero />
			{/* Sección About */}
		</main>
	);
};

export default Home;
