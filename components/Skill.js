import skillStyles from '../styles/Skills.module.css';

const Skill = ({ skill }) => {
	return (
		<div className='center mt-2'>
			{/* <div className={skillStyles.skill}>{skill.title}</div> */}
			<img src={'/img/' + skill.img} alt={skill.title} title={skill.title} className={skillStyles.logo} />
		</div>
	);
};

export default Skill;
