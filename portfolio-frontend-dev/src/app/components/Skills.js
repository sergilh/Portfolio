"use client";
import StackIcon from "tech-stack-icons";
const Skills = () => {
	return (
		<section className="mt-40">
			<div>
				<h2 className="font-[ThirdFont] text-black text-4xl md:text-5xl transition-all duration-500 mb-10">
					My Skills
				</h2>
				<div className="flex-col ">
					<div className="flex justify-center items-center gap-15 my-20">
						<StackIcon name="js" />
						<StackIcon name="typescript" />
						<StackIcon name="reactjs" />
						<StackIcon name="nextjs2" />
						<StackIcon name="vuejs" />
					</div>
					<div className="flex justify-center items-center gap-15">
						<StackIcon name="html5" />
						<StackIcon name="css3" />
						<StackIcon name="tailwindcss" />
						<StackIcon name="git" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
