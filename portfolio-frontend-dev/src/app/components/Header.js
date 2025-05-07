import Image from "next/image";
import Link from "next/link";
import { useTransform, useScroll, motion } from "framer-motion";

const Header = () => {
	return (
		<header className=" bg-cover bg-end bg-no-repeat sticky top-0 fixed">
			<nav className="flex  items-center justify-center w-full px-5 py-4 border-white md:justify-between transition duration-500 ease-in">
				<div className="flex  justify-center hidden md:inline-flex transition-all duration-500 animate-fade-in">
					<h2 className=" font-[MainFont]  text-white text-center font-bold text-4xl gap-2 ">
						Portfolio
					</h2>
					<Image
						src="/Logo_Gradient-removebg-preview.png"
						alt="logo"
						width={60}
						height={60}
					/>
				</div>
				<div className="flex gap-10 items-center justify-center sm:justify-center transition-all duration-500 ease-in-out">
					<button
						type="button"
						className="text-[#9526f0]  font-bold text-2xl cursor-pointer hover:text-white transition-colors duration-300 ease-in"
					>
						<span className="text-neon">Projects</span>
					</button>
					<a href="#about">
						<span className="text-[#9526f0] font-bold text-2xl cursor-pointer hover:text-white transition-colors transition duration-400">
							<span className="text-neon">About</span>
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
