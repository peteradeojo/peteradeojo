import server from '../config/server';

import Image from 'next/image';
import UnderlinedHead from '../components/UnderlinedHead';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Posts from '../components/Posts';
import Contacts from '../components/Contacts';

import styles from '../styles/Home.module.css';

export default function Home({ skills, works, posts }) {
	return (
		<>
			<div className='container'>
				<p>
					Hi. Welcome to my profile page. Allow me to give you a quick tour.
				</p>
			</div>
			<section aria-label='my work'>
				<div className={'container'}>
					<UnderlinedHead title='Brief' />
					<p>
						I consider myself proficient at developing web-based applications.
						In my design process, responsiveness and easy-of-use are{' '}
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
							<Image
								src='/undraw/undraw_programmer_re_owql.svg'
								className={'img w-50'}
								height={40}
								width={100}
								layout='responsive'
								alt='programmer icon from undraw'
								title='Programmer'
							/>
						</div>
					</div>
					<Skills skills={skills} />
					<p className='center'>
						For example, this website is powered by Next.js
					</p>
					<Works works={works} />
					<Posts posts={posts} />
				</div>
			</section>

			<div className='container'>
				<Contacts />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const skillRes = await fetch(`${server}/api/skills`);
	const skills = await skillRes.json();

	const workRes = await fetch(`${server}/api/works`);
	const works = await workRes.json();

	const postsRes = await fetch(`${server}/api/posts`);
	const posts = await postsRes.json();

	return {
		props: {
			skills,
			works,
			posts,
		},
	};
};
