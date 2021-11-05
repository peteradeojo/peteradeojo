import Skills from '../components/Skills';
import UnderlinedHead from '../components/UnderlinedHead';
import styles from '../styles/Home.module.css';

export default function Home({ skills }) {
	return (
		<>
			<div className='container'>
				<UnderlinedHead title='Hey, there!' />
				<p>
					Hi. Welcome to my profile page. Let me tell you why you should hire
					me.
				</p>
			</div>
			<section aria-label='my work'>
				<div className={'container'}>
					<UnderlinedHead title='My Work' />
					<p>
						I consider myself proficient at developing web-based applications.
						In my design process, responsiveness and easy-to-use are{' '}
						<u>
							<b>key</b>
						</u>
						. That way you have a solution you can take anywhere with you, on
						any device 😉
					</p>
					<div className='row'>
						<p
							className={styles.intro + ' col-sm-6'}
							style={{ cursor: 'pointer', textAlign: 'justify' }}
						>
							Over the last few years, I have learned and applied some major
							programming languages, concepts and technologies.
						</p>
						<div className='col-sm-6 center'>
							<img
								src='/undraw/undraw_programmer_re_owql.svg'
								className={'img w-50'}
								alt='programmer icon from undraw'
								title='Programmer'
							/>
						</div>
					</div>
					<Skills skills={skills} />
				</div>
			</section>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/skills');
	const skills = await res.json();
	return {
		props: {
			skills,
		},
	};
};
