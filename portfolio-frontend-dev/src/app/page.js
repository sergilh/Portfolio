"use client";
import Header from "./components/Header";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// React Server Components
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";
const Home = () => {
	const router = useRouter();

	return (
		<div className="flex-col bg-[#141416] w-full h-full ">
			<Header />
			<div className="flex-col justify-center items-center mt-20 animate-fade-in animate-border-neon ">
				<h1 className="text-white text-8xl text-center">
					<span className="text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text">
						Frontend
					</span>{" "}
					<br />
					Developer
				</h1>
				<p className="text-[#8716f7] text-transparent bg-clip-text bg-linear-to-l from-purple-500 to-blue-600 text-center text-4xl mt-4 ">
					Sergi López Hernández
				</p>
				<p className="font-[Arial] text-[1.7rem] p-5 text-white text-transparent bg-clip-text bg-linear-65 from-purple-500 to-blue-800 text-center text-4xl mt-4 ">
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
						speed={55}
						repeat={Infinity}
					/>
				</p>
				<button
					type="button"
					className="flex border-[#c300ff] mx-auto mt-15 rounded-full border-3 p-2 shadow-lg  shadow-[#c300ff] hover:shadow-[#4400ff] hover:border-[#4400ff]  transition duration-500 text-white items-center justify-center text-center cursor-pointer"
				>
					View Projects
				</button>
				<div className="flex justify-center items-center ">
					<Image
						src="/Logo_Gradient-removebg-preview.png"
						alt="logo"
						width={300}
						height={300}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
