import Skill from './Skill';

const Skills = ({ skills }) => {
	return skills.map((skill) => (
		<ul>
			<li key={skill.id}>
				<Skill skill={skill} />
			</li>
		</ul>
	));
};

export default Skills;
