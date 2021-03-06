import server from "../config/server";

import Image from "next/image";
import UnderlinedHead from "../components/UnderlinedHead";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Posts from "../components/Posts";
import Contacts from "../components/Contacts";

import { Whitepane, UnderlinedHead as UH } from "../components/UI";

import styles from "../styles/Home.module.css";

export default function Home({ skills, works, posts }) {
	return (
		<>
			<section>
				<div className={"container"}>
					<Whitepane>
						<UH title='Brief' />
						<p>
							I consider myself proficient at developing web-based applications.
							In my design process, responsiveness and easy-of-use are{" "}
							<u>
								<b>key</b>
							</u>
							. That way you have a solution you can take anywhere with you, on
							any device 😉
						</p>
						<div className='row'>
							<p
								className={styles.intro + " col-sm-6"}
								style={{ cursor: "pointer", textAlign: "justify" }}
							>
								Over the last few years, I have learned and applied some major
								programming languages, concepts and technologies.
							</p>
							<div className='col-sm-6 center'>
								<Image
									src='/undraw/undraw_programmer_re_owql.svg'
									className={"img w-50"}
									height={40}
									width={100}
									layout='responsive'
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
						For example, this website is powered by Next.js and hosted on{" "}
						<a
							href='https://vercel.com'
							style={{ textDecoration: "underline", color: 'blue' }}
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
