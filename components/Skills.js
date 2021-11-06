import skillStyles from '../styles/Skills.module.css';
import UnderlinedHead from './UnderlinedHead';
import Skill from './Skill';

const Skills = ({ skills, data }) => {
	return (
		<>
			<UnderlinedHead title='What Can I Do?' center />
			<ul className={skillStyles.skills + ' mt-2'}>
				{skills.map((skill) => (
					<li key={skill.id}>
						<Skill skill={skill} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Skills;
