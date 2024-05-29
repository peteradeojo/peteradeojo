import server from "../config/server";

import Image from "next/image";
import { Button } from "@mui/material";

import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import Works from "../components/Works";

import { UnderlinedHead as UH, Whitepane } from "../components/UI";

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
									Highly skilled and dynamic Software Engineer with 3+ years of
									expertise in web application design and development for the
									Fintech and Health & Hospitality industries.
									Proven track record of providing innovative business solutions
									to multinational clients across African and Pan-African
									countries. Seeking a challenging role to leverage technical
									excellence and drive impactful results.
									<br />
									<br />
									<a href="https://read.cv/peteru" target="_blank" rel="noreferrer">
										<Button style={{ background: "#000", fontStyle: "normal", textTransform: "revert", color: "#fff" }}>
											Looking for a CV?
										</Button>
									</a>
								</p>
							</div>
							<div className='col-sm-6 center'>
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
				</div>
			</section>

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
