import { BiLinkExternal } from 'react-icons/bi';
import styles from '../styles/Works.module.css';
import Link from 'next/link';
import UnderlinedHead from './UnderlinedHead';

const Works = ({ works }) => {
	return (
		<div>
			<UnderlinedHead title='What Have I Done?' center />
			<div className={styles.works}>
				{works.map((work) => (
					<div key={work.id} className={styles.work}>
						<h3>
							<a href={work.url} target='_blank' referrerPolicy='no-referrer'>
								{work.title}
							</a>{' '}
							<BiLinkExternal />
						</h3>
						<p>{work.description}</p>
						{/* <a href=''></a> */}
						{/* <Link href={'/show/' + work.page}>View User Story</Link> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Works;
