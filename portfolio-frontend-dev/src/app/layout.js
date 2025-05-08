"use client";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<title>Sergi López - Frontend Web Developer</title>
			</head>
			<body
				suppressHydrationWarning
				className=" min-h-screen flex justify-center align-center  "
			>
				{children}
			</body>
		</html>
	);
}
