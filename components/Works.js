import { BiLinkExternal } from "react-icons/bi";
import styles from "../styles/Works.module.scss";
import UnderlinedHead from "./UnderlinedHead";

const Works = ({ works }) => {
	return (
		<div>
			<UnderlinedHead title='Projects' center />
			<div className={styles.works}>
				{works
					.sort((a, b) => a.id - b.id)
					.map((work) => (
						<div key={work.id} className={styles.work}>
							{work.thumbnail ? (
								<div
									style={{
										height: "400px",
										overflow: "hidden",
										marginBottom: "1em",
									}}
								>
									<img src={work.thumbnail} alt='' />
								</div>
							) : null}

							<h3>
								<a
									href={work.url}
									target='_blank'
									referrerPolicy='no-referrer'
									rel='noreferrer'
								>
									{work.title} <BiLinkExternal />
								</a>
							</h3>
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
						</div>
					))}
			</div>
		</div>
	);
};

export default Works;
