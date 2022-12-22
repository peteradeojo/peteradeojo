import server from "../config/server";

import Image from "next/image";
import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import UnderlinedHead from "../components/UnderlinedHead";
import Works from "../components/Works";

import { UnderlinedHead as UH, Whitepane } from "../components/UI";

import styles from "../styles/Home.module.css";

export default function Home({ skills, works, posts }) {
	return (
		<>
			<section>
				<div className={"container"}>
					<Whitepane>
						<UH title='Brief' />
						<div className='row'>
							<div className='col-sm-6'>
								<p>
									I am a software engineer specializing in building backend
									solutions for businesses. Over the last few years, I have gained experience in building reliable, secure, distributed and
									perfomance-centered solutions in industries such as Health &
									Hospitality and Fintech.
								</p>
							</div>
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
