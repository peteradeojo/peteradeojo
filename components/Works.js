import { BiLinkExternal } from "react-icons/bi";

const Works = ({ works }) => {
	return (
		<div className='py-[50px]'>
			<h1 className='text-center text-3xl'>Projects</h1>
			<div className='py-4'></div>
			<div className={"md:grid grid-cols-3 gap-y-8"}>
				{works
					.sort((a, b) => a.id - b.id)
					.map((work) => (
						<a
							key={work.id}
							className={
								"transition duration-200 hover:glass p-2 rounded block"
							}
							href={work.url || "#"}
							target='_blank'
						>
							<div className='overflow-hidden'>
								<div className='max-h-[220px] relative hover:scale-125 duration-200'>
									{work.thumbnail ? (
										<img src={work.thumbnail} alt='' className='w-full' />
									) : (
										<div className='h-[220px] glass w-full'></div>
									)}
								</div>
							</div>
							<div className='py-1'></div>
							<a
								href={work.url}
								target='_blank'
								referrerPolicy='no-referrer'
								rel='noreferrer'
								className='flex items-center gap-2 text-2xl font-bold pb-2'
							>
								{work.title} <BiLinkExternal />
							</a>
							<p>{work.description}</p>
							{work.github ? (
								<a
									href={work.github}
									style={{ textDecoration: "underline" }}
									target='_blank'
									rel='noopener noreferrer'
									referrerPolicy='no-referrer'
								>
									View Project on Github <BiLinkExternal />
								</a>
							) : null}
						</a>
					))}
			</div>
		</div>
	);
};

export default Works;
