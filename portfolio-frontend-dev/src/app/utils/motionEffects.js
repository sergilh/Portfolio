import { useTransform, useScroll } from "framer-motion";

const useScrollOpacity = (ref, offset = ["start start", "end start"]) => {
	const { scrollYProgress } = useScroll({
		target: ref,
		offset,
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const opacityOut = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return { opacity, opacityOut };
};

export default useScrollOpacity;
