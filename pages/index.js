import server from "../config/server";

import Image from "next/image";
import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import UnderlinedHead from "../components/UnderlinedHead";
import Works from "../components/Works";

import { UnderlinedHead as UH, Whitepane } from "../components/UI";

// import styles from "../styles/Home.module.css";

export default function Home({ skills, works, posts }) {
	return (
		<>
			<section>
				<div className={"container"}>
					<Whitepane>
						<UH title='Boluwatife Ade-Ojo' />
						<div className='row start'>
							<div className='col-sm-6'>
								<p>
								Highly skilled and dynamic Software Engineer with 3+ years of expertise in web application design and development for the Fintech and Health & Hospitality industries. Proficient in JavaScript and PHP, adept at crafting complex solutions. Proven track record of providing innovative business solutions to multinational clients across African and Pan-African countries. Seeking a challenging role to leverage technical excellence and drive impactful results.
								</p>
							</div>
							<div className='col-sm-6 center'>
								<Image
									src='/img/profile.jpg'
									className={"img w-50 rounded"}
									height={500}
									width={370}
									layout="intrinsic"
									alt='programmer icon from undraw'
									title='Programmer'
								/>
							</div>
						</div>
					</Whitepane>
				</div>
			</section>

			<div className='container'>
				{/* <Whitepane> */}
				<Skills skills={skills} />
				<Whitepane small>
					<span style={{ textAlign: "center", display: "block" }}>
						This website is powered by Next.js and hosted on{" "}
						<a
							href='https://vercel.com'
							style={{ textDecoration: "underline", color: "blue" }}
						>
							Vercel
						</a>
					</span>
				</Whitepane>
				{/* </Whitepane> */}
			</div>

			<div className='container'>
				<Works works={works} />
				<Posts posts={posts} />
			</div>

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
