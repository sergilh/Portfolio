"use client";
import Header from "./components/Header";
import Image from "next/image";
// React Server Components
import { motion, useScroll } from "framer-motion";
const Home = () => {
	const { scrollYProgress } = useScroll();
	return (
		<div className="flex-col bg-[#141416] w-full h-full ">
			<Header />
			<div
				className="flex-col justify-center items-center mt-20 animate-fade-in animate-border-neon "
				style={{ scaleX: scrollYProgress }}
			>
				<h1 className="text-white text-8xl text-center">
					Sergi López <br />
					Hernández
				</h1>
				<p className="text-[#00b7ff] text-center text-4xl mt-4 ">
					Frontend Developer
				</p>
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
