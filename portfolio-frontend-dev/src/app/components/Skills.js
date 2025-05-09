"use client";
import StackIcon from "tech-stack-icons";
import styles from "./Skills.module.css";
import { useState, useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useScrollOpacity from "../utils/motionEffects";

const Skills = () => {
	const ref = useRef(null);

	const { opacity, opacityOut } = useScrollOpacity(ref, [
		"start start",
		"end start",
	]);

	return (
		<section id="skills" className="mt-40 p-20 ">
			<motion.div
				ref={ref}
				style={{ opacity, opacityOut }}
				transition={{ duration: 0.7 }}
			>
				<h2 className="font-[ThirdFont] text-white text-4xl md:text-5xl transition-all duration-200 mb-10 hover:text-white">
					My Frontend Skills
				</h2>
				<div className="flex flex-col  ">
					<div className="flex justify-center items-center gap-15 my-20 flex-wrap-reverse ">
						<StackIcon name="js" className={styles.iconTech} />
						<StackIcon
							name="typescript"
							className={styles.iconTech}
						/>
						<StackIcon name="reactjs" className={styles.iconTech} />
						<StackIcon name="nextjs2" className={styles.iconTech} />
						<StackIcon name="vuejs" className={styles.iconTech} />
					</div>
					<div className="flex justify-center items-center gap-15 flex-wrap">
						<StackIcon name="html5" className={styles.iconTech} />
						<StackIcon name="css3" className={styles.iconTech} />
						<StackIcon
							name="tailwindcss"
							className={styles.iconTech}
						/>
						<StackIcon name="git" className={styles.iconTech} />
						<StackIcon name="vitejs" className={styles.iconTech} />
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Skills;
