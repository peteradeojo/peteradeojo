import Skill from "./Skill";

const Skills = ({ skills }) => {
	return (
		<div className="py-[100px]">
			<p className='text-3xl text-center'>Skills</p>
			<ul
				className={
					"flex flex-wrap justify-center gap-y-4 items-center"
				}
			>
				{skills.map((skill) => (
					<li className='w-1/5 text-center' key={skill.id}>
						<Skill skill={skill} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
