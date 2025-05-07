"use client";
import StackIcon from "tech-stack-icons";
import styles from "./Skills.module.css";
const Skills = () => {
	return (
		<section className="mt-40">
			<div>
				<h2 className="font-[ThirdFont] text-black text-4xl md:text-5xl transition-all duration-500 mb-10">
					My Skills
				</h2>
				<div className="flex-col ">
					<div className="flex justify-center items-center gap-15 my-20 ">
						<StackIcon name="js" className={styles.iconTech} />
						<StackIcon
							name="typescript"
							className={styles.iconTech}
						/>
						<StackIcon name="reactjs" className={styles.iconTech} />
						<StackIcon name="nextjs2" className={styles.iconTech} />
						<StackIcon name="vuejs" className={styles.iconTech} />
					</div>
					<div className="flex justify-center items-center gap-15">
						<StackIcon name="html5" className={styles.iconTech} />
						<StackIcon name="css3" className={styles.iconTech} />
						<StackIcon
							name="tailwindcss"
							className={styles.iconTech}
						/>
						<StackIcon name="git" className={styles.iconTech} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
