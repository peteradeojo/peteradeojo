import { BiLinkExternal } from 'react-icons/bi';
import UnderlinedHead from './UnderlinedHead';
import postStyle from '../styles/Posts.module.css';

const Posts = ({ posts }) => {
	return (
		<div>
			<UnderlinedHead title='My Posts' />
			<div className='mt-2'>
				{posts.map((post) => (
					<div key={post.id} className={postStyle.post}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<a href={post.link} target='_blank' referrerPolicy='no-referrer' rel='noreferrer'>
							View Post <BiLinkExternal />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
