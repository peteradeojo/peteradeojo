import { BiLinkExternal } from "react-icons/bi";
import { Whitepane } from "./UI";

const Posts = ({ posts }) => {
	return (
		<div>
			<p className='text-4xl font-bold'>My Posts</p>
			<div className='mt-2'>
				{posts.map((post) => (
					<Whitepane key={post.id}>
						<div className='py-4'></div>
						<h2 className='text-2xl font-bold'>{post.title}</h2>
						<p>{post.body}</p>
						<a
							href={post.link}
							target='_blank'
							referrerPolicy='no-referrer'
							rel='noreferrer'
							className='flex items-center gap-2 text-blue-300 hover:underline'
						>
							View Post <BiLinkExternal />
						</a>
					</Whitepane>
				))}
			</div>
		</div>
	);
};

export default Posts;
