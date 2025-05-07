import Image from "next/image";
import Link from "next/link";
import { useTransform, useScroll, motion } from "framer-motion";

const Header = () => {
	return (
		<header className=" bg-cover bg-end bg-no-repeat sticky top-0  bg-gradient-to-r from-purple-500 to-blue-600 md:bg-none transition-all duration-500 ease-in-out relative z-50">
			<nav className="flex  items-center justify-center w-full px-5 py-4 border-white md:justify-between transition-all duration-500 ease-in">
				<div className="flex  justify-center hidden md:inline-flex transition-all duration-500 animate-fade-in">
					<a href="#home">
						<h2 className=" font-[MainFont]  text-black text-center font-bold text-4xl gap-2  hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200 cursor-pointer">
							Portfolio
						</h2>
					</a>
					<Image
						src="/Logo_Gradient-removebg-preview.png"
						alt="logo"
						width={60}
						height={60}
					/>
				</div>
				<div className="flex flex-col md:flex-row gap-10 items-center justify-center transition-all duration-500 ease-in-out ">
					<button
						type="button"
						className="text-[#9526f0]  font-bold text-2xl cursor-pointer transition-colors duration-300 ease-in "
					>
						<span className="text-black hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200">
							Projects
						</span>
					</button>
					<a href="#about">
						<span className="text-[#9526f0] font-bold text-2xl cursor-pointer hover:text-white transition-colors transition duration-400">
							<span className="text-black hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200">
								About
							</span>
						</span>
					</a>

					<button
						type="button"
						className=" neon-button neon-button:hover"
					>
						Contact
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
