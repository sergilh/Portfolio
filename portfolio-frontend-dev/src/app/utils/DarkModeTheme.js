import { useState, useEffect } from "react";

const DarkModeTheme = () => {
	// Estado para el tema oscuro
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Cambiar entre modo oscuro y claro
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Aplicar la clase dark al body cuando el estado cambie
	useEffect(() => {
		const containers = document.querySelectorAll(".dark-target");
		if (isDarkMode) {
			document.body.classList.add("dark");
			containers.forEach((container) => {
				container.classList.add("bg-dark");
				container.classList.remove("bg-no-dark");
			});
			localStorage.setItem("theme", "dark"); // Guardar preferencia en localStorage
		} else {
			document.body.classList.remove("dark");
			containers.forEach((container) => {
				container.classList.remove("bg-dark");
				container.classList.add("bg-no-dark");
			});
			localStorage.setItem("theme", "light"); // Guardar preferencia en localStorage
		}
	}, [isDarkMode]);

	// Retornar las variables necesarias
	return {
		isDarkMode,
		toggleTheme,
	};
};

export default DarkModeTheme;
