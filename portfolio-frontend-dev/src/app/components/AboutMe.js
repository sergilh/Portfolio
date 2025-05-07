import { useTransform, useScroll, motion } from "framer-motion";
import Skills from "./Skills";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="bg-[#8716f7] bg-linear-to-b from-purple-300 via-60% via-blue-300  rounded-b-[12vw] flex justify-center items-center scroll-smooth h-auto "
		>
			<div className="sticky top-0 flex mb-20 ">
				<div className="flex flex-col items-center justify-center mt-20 px-6 text-center">
					<h2 className="font-[ThirdFont] text-black text-4xl md:text-5xl transition-all duration-500 mb-10">
						Hi, I&apos;m Sergi
					</h2>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="max-w-3xl w-full bg-gradient-to-b from-white via-white to-purple-100 font-[SecondaryFont] flex flex-col items-center justify-center backdrop-blur-sm border border-black/10 text-black px-10 py-8 rounded-3xl shadow-xl/30 transition-shadow duration-200  hover:shadow-2xl cursor-pointer"
					>
						<div className="flex items-center justify-center w-full mb-6">
							<div className="h-[2px] bg-gradient-to-r from-white to-purple-400 flex-grow mx-3"></div>
							<h3 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600  uppercase whitespace-nowrap">
								About me
							</h3>
							<div className="h-[2px] bg-gradient-to-l from-white to-purple-400 flex-grow mx-3"></div>
						</div>

						<p className="font-[ThirdFont] text-gray-800 text-lg md:text-xl leading-relaxed text-center">
							I&apos;m a passionate frontend developer deeply
							connected to the world of web development. I love
							crafting visually engaging, functional interfaces
							and solving challenges through code.
						</p>
					</motion.div>
					<Skills />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
