import { BiLinkExternal } from "react-icons/bi";
import UnderlinedHead from "./UnderlinedHead";
import { UnderlinedHead as UH, Whitepane } from "./UI";
import postStyle from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
	return (
		<div>
			<UH title='My Posts' />
			<div className='mt-2'>
				{posts.map((post) => (
					<Whitepane key={post.id} className={postStyle.post}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<a
							href={post.link}
							target='_blank'
							referrerPolicy='no-referrer'
							rel='noreferrer'
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
