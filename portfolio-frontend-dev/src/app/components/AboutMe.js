import { useTransform, useScroll, motion } from "framer-motion";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="bg-[#8716f7] rounded-b-[12vw]  flex justify-center items-center scroll-smooth h-[250vh]   animate-fade-in "
		>
			<div className="sticky top-0 bottom-0">
				<div className="flex items-center md:block justify-center mt-20">
					<h2 className="font-[SecondaryFont] text-white ml-10 text-7xl text-3xl text-center slideIn slideIn-left">
						Hi, I&apos;m Sergi <br /> Web Developer
					</h2>
					<p className="font-[Arial] text-[1.9rem] p-5 text-white text-transparent bg-clip-text bg-linear-65 from-purple-500 to-blue-800 text-center text-4xl mt-4 mx-6 slideIn slideIn-right">
						Passionate frontend developer with a strong connection
						to the web development world.
						<br />
						<br /> I’m a curious, detail-oriented professional who
						enjoys solving problems and turning ideas into visually
						engaging, functional interfaces.
						<br />
						<br />
						Interested in ambitious projects with a great
						development opportunities.
					</p>
				</div>
			</div>
		</section>
	);
};
export default AboutMe;
