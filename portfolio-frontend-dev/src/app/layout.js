"use client";
import "./globals.css";

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
