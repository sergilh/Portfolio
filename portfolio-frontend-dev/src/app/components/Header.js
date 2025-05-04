import Image from "next/image";
const Header = () => {
	return (
		<div className="flex  items-center justify-between w-full px-5 py-4  border-white">
			<div className="flex  justify-center ">
				<h1 className=" font-[MainFont]  text-white text-center font-bold text-4xl gap-2 ">
					Portfolio
				</h1>
				<Image
					src="/Logo_Gradient-removebg-preview.png"
					alt="logo"
					width={60}
					height={60}
				/>
			</div>
			<div className="flex gap-10 items-center justify-center">
				<button
					type="button"
					className="text-[#9526f0]  font-bold text-2xl cursor-pointer hover:text-white transition-colors duration-300 ease-in"
				>
					<span className="text-neon">Projects</span>
				</button>
				<button
					type="button"
					className="text-[#9526f0] font-bold text-2xl cursor-pointer hover:text-white transition-colors transition duration-400"
				>
					<span className="text-neon">About</span>
				</button>

				<button
					type="button"
					className=" neon-button neon-button:hover"
				>
					Contact
				</button>
			</div>
		</div>
	);
};

export default Header;
