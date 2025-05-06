"use client";
import { useScroll, useSpring, motion } from "framer-motion";
/*Componentes*/
import Header from "./components/Header";
import Hero from "./components/Hero";
// React Server Components
import { React, useEffect, useState } from "react";
import Preloader from "./components/Preloader.js";

const Home = () => {
	const [loading, setLoading] = useState(true);

	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useEffect(() => {
		const time = setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{loading && <Preloader />}
			<motion.div
				id="scroll-indicator"
				style={{
					scaleX,
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					height: 10,
					originX: 0,
					backgroundColor: "#ff0088",
					zIndex: 50,
				}}
			/>
			<main
				className="flex-col w-full min-h-[300vh]"
				style={{ opacity: loading ? 0 : 1 }}
			>
				<Header />

				{/* Sección Hero Home */}
				<Hero />
			</main>
		</>
	);
};

export default Home;
