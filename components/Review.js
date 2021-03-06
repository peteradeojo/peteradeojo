import style from "../styles/Review.module.css";
import Image from "next/image";

const Review = ({ good, content }) => {
	return (
		<div className={style.review + " " + (good ? style.good : style.bad)}>
			<span className={style.identify}>
				{good ? (
					<svg
						width='24px'
						height='24px'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect x='0' fill='none' width='24' height='24' />
						<g>
							<path d='M6.7 22H2v-9h2l2.7 9zM20 9h-6V5c0-1.657-1.343-3-3-3h-1v4L7.1 9.625c-.712.89-1.1 1.996-1.1 3.135V14l2.1 7h8.337c1.836 0 3.435-1.25 3.88-3.03l1.622-6.485C22.254 10.223 21.3 9 20 9z' />
						</g>
					</svg>
				) : (
					<svg height='24px' width='24px' viewBox='0 0 437.849 437.849'>
						<path
							d='M394.854,205.444c9.218-15.461,19.102-30.181,14.258-49.527
					c-2.951-11.632-10.965-21.126-23.882-28.255c3.26-7.982,7.421-22.76,2.008-37.27c-4.893-13.054-16.298-21.663-28.881-26.686
					c-2.78-16.826-10.323-33.823-23.613-44.935C292.987-16.133,183.129,5.367,138.43,21.437C96.934,36.369,69.053,41.198,24.89,41.198
					c0,63.444,0,127.334,0,190.761l61.525,0.122c29.336,18.175,52.641,43.992,81.286,63.354
					c16.981,11.518,51.218,33.62,63.045,119.238c1.439,10.461,5.154,17.55,11.9,21.02c8.714,4.511,19.143,1.211,27.011-3.219
					c57.615-32.327,1.975-88.536,21.947-132.569c17.168-37.822,53.25-15.054,84.789-22.476c30.425-7.169,36.684-23.459,36.562-35.855
					C412.843,226.163,402.511,211.451,394.854,205.444z'
						/>
					</svg>
				)}
			</span>
			<div>{content}</div>
		</div>
	);
};

export default Review;
