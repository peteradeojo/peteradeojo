import skillStyles from '../styles/Skills.module.css';
import UnderlinedHead from './UnderlinedHead';
import Skill from './Skill';
import Image from 'next/image';

const Skills = ({ skills }) => {
	return (
		<div className='mt-2'>
			<UnderlinedHead title='What Can I Do?' center />
			<ul className={skillStyles.skills + ' mt-2'}>
				{skills.map((skill) => (
					<li key={skill.id}>
						<Skill skill={skill} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
