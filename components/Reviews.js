import Review from './Review';
import style from '../styles/Review.module.css';

const Reviews = () => {
	return (
		<div className={style.review_display}>
			<Review
				good={true}
				content={
					"Learn't React, Rebuilt my personal website with NextJs and deployed it on Vercel"
				}
			/>
			<Review content={"Didn't make any money from this. My fault."} />
			<Review
				good={true}
				content={
					'Met some notable personalities online in the tech space and got my head right'
				}
			/>
			<Review content={"Didn't make any money from this knowledge. My fault"} />
			<Review
				good={true}
				content={'Barter says I spent seven hundred thousand this year'}
			/>
			<Review
				good={false}
				content={"Didn't make any money from this. My fault."}
			/>
			<Review
				good={true}
				content={
					'Broke even on my crypto trades this year. They were not much.'
				}
			/>
			<Review
				content={"Didn't find love this year again. Because of money sha."}
			/>
			<Review
				good={true}
				content={
					'Gained some basic data analysis and visualization skills. Upgrading next year'
				}
			/>
			<Review
				content={
					"Didn't complete any of my projects this year. And didn't contribute to any OSC. (Mostly because of school)"
				}
			/>
			<Review
				good={true}
				content={
					"Wrote my first article on 'Transitioning from MySQL to MongoDB'"
				}
			/>
			<Review content={"Didn't secure any freelance/internship"} />
		</div>
	);
};

export default Reviews;
