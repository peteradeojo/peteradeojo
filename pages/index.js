import server from "../config/server";

import Image from "next/image";

import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import Works from "../components/Works";

import { UnderlinedHead as UH, Whitepane } from "../components/UI";

export default function Home({ skills, works, posts }) {
	return (
		<>
			<section className='pt-24 px-12'>
				<Whitepane>
					<div className='flex'>
						<div className='w-1/2'>
							<UH title='Boluwatife Ade-Ojo' />
							<div className='py-2'></div>
							<p>
								Highly skilled and dynamic Software Engineer with 3+ years of
								expertise in web application design and development for the
								Fintech and Health & Hospitality industries. Proven track record
								of providing innovative business solutions to multinational
								clients across African and Pan-African countries. Seeking a
								challenging role to leverage technical excellence and drive
								impactful results.
							</p>
							<div className='py-2'></div>
							<a
								href='https://read.cv/peteru'
								target='_blank'
								rel='noreferrer'
								className='bg-black btn btn-glass border-0 hover:bg-gray-500 text-white btn-sm rounded-sm'
							>
								Looking for a Resume?
							</a>
						</div>
						<div className='w-1/2 text-center'>
							<Image
								src='/img/profile.jpg'
								className={"img w-50 rounded"}
								height={500}
								width={370}
								layout='intrinsic'
								alt='programmer icon from undraw'
								title='Boluwatife'
							/>
						</div>
					</div>
				</Whitepane>
			</section>

			<div className='px-12'>
				<Skills skills={skills} />
			</div>

			<div className='py-4'></div>

			<div className='px-12'>
				<Works works={works} />
				<div className="pt-[50px]"></div>
				<Posts posts={posts} />
			</div>

			<div className='px-12 py-24'>
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
