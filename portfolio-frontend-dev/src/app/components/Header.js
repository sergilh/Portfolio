import Image from "next/image";
import DarkModeTheme from "../utils/DarkModeTheme.js";
import { useState, useEffect } from "react";

const Header = () => {
	// Estado para el tema oscuro
	const { isDarkMode, toggleTheme } = DarkModeTheme();

	// Cambiar entre modo oscuro y claro

	return (
		<header className=" bg-cover bg-end bg-no-repeat sticky top-0  bg-gradient-to-r from-purple-500 to-blue-600 md:bg-none transition-all duration-500 ease-in-out relative z-50 ">
			<nav className="flex  items-center justify-center w-full px-5 py-4 border-white md:justify-between transition-all duration-500 ease-in">
				<div className="flex  justify-center hidden md:inline-flex transition-all duration-500 animate-fade-in">
					<a href="#home">
						<h2
							id="text-color"
							className=" font-[MainFont]  text-black text-center font-bold text-4xl gap-2  hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200 cursor-pointer "
						>
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
				<div className="flex flex-col md:flex-row gap-6 items-center justify-center transition-all duration-500 ease-in-out  ">
					<span
						id="text-color"
						className="text-black cursor-pointer text-2xl hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200"
					>
						Projects
					</span>
					<a href="#about">
						<span
							id="text-color"
							className="text-black text-2xl hover:text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text transition duration-200"
						>
							About
						</span>
					</a>

					<div
						className="w-auto cursor-pointer"
						onClick={toggleTheme}
					>
						<Image
							src="/moon_10238592.png"
							alt="darkModeIcon"
							width={25}
							height={25}
						></Image>
					</div>

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
