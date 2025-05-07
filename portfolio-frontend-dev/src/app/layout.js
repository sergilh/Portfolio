"use client";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
	useEffect(() => {
		document.documentElement.classList.add("remove");
		console.log("Modo oscuro activado");
	}, []);
	return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<title>Sergi López - Frontend Web Developer</title>
			</head>
			<body className=" min-h-screen flex justify-center align-center  ">
				{children}
			</body>
		</html>
	);
}
