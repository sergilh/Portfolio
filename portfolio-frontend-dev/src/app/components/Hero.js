"use client";
import { React, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
	useTransform,
	useScroll,
	useSpring,
	motion,
	useMotionValueEvent,
} from "framer-motion";
/*Componentes*/
import AboutMe from "./AboutMe";

const Hero = () => {
	/*Animaciones Scroll*/
	const [effectFinish, setEffectFinish] = useState(false);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 14]);
	const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setEffectFinish(latest >= 0.3);
	});

	const text = "Developer";

	return (
		<>
			<section ref={ref} id="home" className="dark h-[100vh]">
				<div className=" h-screen scroll-smooth bg-cover bg-end bg-repeat-space flex items-center justify-center p-10 bg-gradient-to-b from-white to-purple-300">
					<motion.div
						style={{ scale, opacity }}
						className=" w-full h-full items-center justify-center pt-30  "
					>
						<motion.h1 className="text-white md:text-9xl text-6xl transition-all duration-500  text-center">
							<span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text dark:text-white  text-transparent ">
								Frontend
							</span>{" "}
							<br />
							{text.split("").map((letter, index) => {
								return (
									<span
										key={index}
										className="letter-hover-effect cursor-pointer text-black  dark:text-white  "
									>
										{letter}
									</span>
								);
							})}
						</motion.h1>
						<p className=" text-[#8716f7] text-transparent  bg-clip-text bg-linear-to-l from-purple-500 to-blue-600 text-center text-3xl  text-wrap md:text-4xl mt-4   ">
							Sergi López Hernández
						</p>
						<motion.p
							style={{
								opacity: effectFinish > 0.99 ? 0 : opacity,
							}}
							className="font-[Arial] text-[1.7rem] p-5 text-black  text-center text-4xl mt-4 cursor-default"
						>
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
						</motion.p>
						<button
							type="button"
							className="flex border-[#4400ff] mx-auto mt-15 rounded-full border-3 p-3 shadow-lg  shadow-[#4400ff]    transition duration-500  text-white bg-black hover:bg-white hover:text-black items-center justify-center text-center cursor-pointer"
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
					</motion.div>
				</div>
				<AboutMe />
			</section>
		</>
	);
};

export default Hero;
