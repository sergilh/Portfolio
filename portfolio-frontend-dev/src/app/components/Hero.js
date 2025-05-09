"use client";
import { React, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

/*Componentes*/
import AboutMe from "./AboutMe";

const Hero = () => {
	const text = "Developer";

	return (
		<>
			<section id="home" className=" h-[100vh] ">
				<div
					id="bg-dark"
					className=" h-screen scroll-smooth  flex flex-col items-center justify-start p-10 bg-gradient-to-b from-white to-purple-300"
				>
					<div className="flex justify-center items-center mt-2 ">
						<Image
							src="/descargar (13) (1) (1).png"
							alt="logo"
							width={400}
							height={400}
						/>
					</div>
					<h1 className="text-white md:text-9xl text-6xl  transition-all duration-500  text-center">
						<span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text   text-transparent ">
							Frontend
						</span>{" "}
						<br />
						{text.split("").map((letter, index) => {
							return (
								<span
									key={index}
									className="letter-hover-effect cursor-pointer text-black   "
								>
									{letter}
								</span>
							);
						})}
					</h1>
					<p className=" text-[#8716f7] text-transparent  bg-clip-text bg-linear-to-l from-purple-500 to-blue-600 text-center text-3xl  text-wrap md:text-4xl mt-4   ">
						Sergi López Hernández
					</p>
					<p className="font-[Arial] text-[1.5rem] md:text-[1.7rem] p-5 text-black  text-center text-4xl mt-4 cursor-default">
						<TypeAnimation
							sequence={[
								"Web developer",
								1000,
								"Web developer with a passion for creating",
								1000,
								"Web developer with a passion for creating beautiful and responsive websites.",
								3000,
							]}
							wrapper="span"
							speed={60}
							repeat={Infinity}
						/>
					</p>
					<button
						type="button"
						className="flex border-[#4400ff] mx-auto mt-15 rounded-full border-3 p-3 shadow-lg  shadow-[#4400ff]    transition duration-500  text-white bg-black hover:bg-white hover:text-black items-center justify-center text-center cursor-pointer"
					>
						View Projects
					</button>
				</div>
				<AboutMe />
			</section>
		</>
	);
};

export default Hero;
