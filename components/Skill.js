import Image from 'next/image';
import skillStyles from '../styles/Skills.module.css';

const Skill = ({ skill }) => {
	return (
		<div className='center mt-2'>
			<Image
				src={'/img/' + skill.img}
				width={'100'}
				height={'75'}
				layout='fixed'
				title={skill.title}
				alt={skill.title}
				className={skillStyles.logo}
			/>
		</div>
	);
};

export default Skill;
