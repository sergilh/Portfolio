import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<title>Sergi López - Frontend Web Developer</title>
			</head>
			<body className="expansion-alids-init h-screen">{children}</body>
		</html>
	);
}
