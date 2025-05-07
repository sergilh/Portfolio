import { useTransform, useScroll, motion } from "framer-motion";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="bg-[#8716f7] bg-linear-to-b from-[#141416] via-96% via-purple-500 to-[#4400ff] rounded-b-[12vw] flex justify-center items-center scroll-smooth h-[100vh] "
		>
			<div className="sticky top-0 flex mb-20 ">
				<div className="flex flex-col items-center justify-center mt-20 px-6 text-center">
					<h2 className="font-[SecondaryFont] text-white text-4xl md:text-7xl transition-all duration-500 mb-10">
						Hi, I&apos;m Sergi <br /> Web Developer
					</h2>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="max-w-3xl bg-white bg-linear-to-b  from-white via-white via-90% to-purple-700  font-[SecondaryFont] flex-col items-center justify-center  backdrop-blur-md border-2 border-black/80 text-black px-8 py-6 rounded-3xl shadow-xl/35"
					>
						<div className="flex items-center justify-center w-full ">
							<div className="h-[4px] bg-white flex-grow mx-3 bg-linear-to-b from-white to-purple-800 bg-clip-border"></div>
							<h3 className="text-3xl mb-2 bg-clip-text text-transparent bg-linear-to-b from-black to-purple-400  uppercase whitespace-nowrap">
								About me
							</h3>
							<div className="h-[4px] bg-white flex-grow mx-3 bg-linear-to-b from-white to-purple-800 bg-clip-border"></div>
						</div>
						<p className="font-[ThirdFont] text-black text-lg md:text-xl leading-relaxed">
							I&apos;m a passionate frontend developer deeply
							connected to the world of web development. I love
							crafting visually engaging, functional interfaces
							and solving challenges through code.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
