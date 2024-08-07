import Image from 'next/image';
import skillStyles from '../styles/Skills.module.scss';

const Skill = ({ skill }) => {
	return (
		<div className='w-full'>
			<Image
				src={'/img/' + skill.img}
				width={skill.style?.width || '100'}
				height={skill.style?.height || '100'}
				layout='fixed'
				title={skill.title}
				alt={skill.title}
				className={skillStyles.logo}
			/>
		</div>
	);
};

export default Skill;
