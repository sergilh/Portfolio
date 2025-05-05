"use client";
import { React, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
	useTransform,
	useScroll,
	motion,
	useMotionValueEvent,
} from "framer-motion";
import AboutMe from "./AboutMe";

const Hero = () => {
	const [effectFinish, setEffectFinish] = useState(false);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setEffectFinish(latest >= 0.99);
	});

	return (
		<>
			<section ref={ref} id="home" className="h-[60vh]">
				<div className="sticky top-0 h-screen scroll-smooth bg-cover bg-end bg-repeat-space flex items-center justify-center">
					<motion.div
						style={{ scale, opacity }}
						className=" w-full h-full items-center justify-center pt-30"
					>
						<motion.h1 className="text-white md:text-9xl text-6xl transition-all duration-500  text-center">
							<span className="text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text">
								Frontend
							</span>{" "}
							<br />
							Developer
						</motion.h1>
						<p className="text-[#8716f7] text-transparent  bg-clip-text bg-linear-to-l from-purple-500 to-blue-600 text-center text-3xl  text-wrap md:text-4xl mt-4 ">
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
					</motion.div>
				</div>
			</section>
			{effectFinish && <AboutMe />}
		</>
	);
};

export default Hero;
