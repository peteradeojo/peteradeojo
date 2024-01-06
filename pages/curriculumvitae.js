import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Whitepane } from "../components/UI";
import styles from "../src/scss/CV.module.scss";

import UnderlinedHead from "../components/UnderlinedHead";

const Education = ({ details }) => {
	return (
		<div className={styles.education}>
			<div className={styles.qualification}>{details.qualification}</div>
			<div className={styles.institution}>
				{details.institution + ", " + details.address}
			</div>
			<div className={styles.dates}>{details.from + " - " + details.to}</div>
		</div>
	);
};

const Experience = ({ details }) => {
	return (
		<div className={styles.experience}>
			<div className={styles.experienceLocation}>
				{details.location}
				<p>{details.role}</p>
			</div>
			<div className={styles.experienceDesc}>{details.description}</div>
			{details.achievements ? (
				<>
					{/* <p
						style={{
							fontWeight: "bold",
							margin: "0px",
							marginTop: "10px",
							color: "#223",
						}}
					>
						Achievements
					</p> */}
					<ul className={styles.achievements}>
						{details.achievements.map((ach, index) => (
							<li key={index}>{ach}</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	);
};

const Certifications = ({ details }) => {
	return (
		<div className={styles.certification}>
			<div className={styles.certificate}>
				<Image
					src={"/img/" + details.cert}
					width={50}
					height={35}
					alt=''
					layout='responsive'
				/>
			</div>
			<div className={styles.certificationTitle}>{details.title}</div>
			<div className={styles.certificationDetails}>
				<span className={styles.certificationLogo}>
					<Image
						src={"/img/" + details.logo}
						width={"24px"}
						height={"24px"}
						alt=''
					/>
				</span>
				{details.from}
			</div>
		</div>
	);
};

const CurriculumVitae = () => {
	const educationList = [
		{
			institution: "University of Lagos",
			address: "Akoka, Yaba, Lagos, Nigeria",
			qualification: "Computer Engineering, B.Eng",
			course: "Computer Engineering",
			from: "2018",
			to: "present",
		},
		{
			id: 2,
			institution: "The International School, University of Ibadan",
			address: "Ibadan, Oyo State",
			qualification: "WASSCE",
			from: "2012",
			to: "2018",
		},
	];

	const experiences = [
		{
			location:
				"Maternal-Child Specialists' Clinics, Ado-Ekiti, Ekiti State, Nigeria",
			role: "Software Developer",
			// description:
			// 	"Developed and deployed the hospital's first Health Information system and website landing page which provided directions to the facility and increased online engagement.",
			achievements: [
				"Deployed the first Electronic Point of Sales system in the hospital pharmacy.",
				"Responsible for the development, deployment and maintenance of the hospital's web site which provided contact information, directions and allowed patients to schedule visits with specialists.",
			],
		},
		{
			location: "VoltWolf Ltd., Lagos, Nigeria",
			role: "Lead Backend Engineer",
			// description:
			// 	"Purscliq is a financial technology based company that provides digital solutions for finance and banking in Nigeria",
			achievements: [
				"Performed troubleshooting, monitored and maintained several backend services in PHP/Laravel.  ",
				"Documented the development process, architecture, and technical details of several components of the backend service",
				"Debugged and extended existing codebase to ship new features",
				"Reduced request latency by introducing data caching and improved response time by 2x",
				"Optimized database queries for faster performance and better security",
				"Communicated with other teams to ensure the successful shipping of the product to production",
				"Provisioned, deployed and secured a Digital Ocean server for production environment",
				"Scrum team member delivering quality features in a timely manner",
			],
		},
		{
			location: "Baxi by MFS Africa",
			role: "Software Engineer",
			achievements: [
				"Developed automated scripts to simplify common tasks and reduce manual effort",
				"Investigated and identified the root cause of customer issues and provided detailed reports to stakeholders",
				"Supported the development and testing of new software applications, ensuring a smooth transition to production",
				"Identified and implemented performance enhancements that improved system stability and reduced downtime by ~66%",
				"Created an automated system that monitored application performance and alerted the team of any potential issues",
			],
		},
	];

	const certifications = [
		{
			title: "Mobile Web Specialist",
			from: "Google Africa Developer Scholarship (with Andela)",
			logo: "google.png",
			cert: "gads-2021-cert.png",
		},
		{
			title: "Python Developer Trainee",
			from: "Bincom Dev Center",
			cert: "binc.jpg",
		},
		{
			title: "Python 3 Tutorial",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-Python.jpg",
		},
		{
			title: "PHP Tutorial",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-PHP.jpg",
		},
		{
			title: "SQL Fundamentals",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-SQL.jpg",
		},
		{
			title: "JavaScript",
			from: "SoloLearn",
			logo: "sololearn-2.svg",
			cert: "sololearn-JS.jpg",
		},
	];

	return (
		<>
			<div className='container'>
				<UnderlinedHead title={"My CV"} center />
			</div>
			<div className='container'>
				<div className={styles.pane}>
					<h1>Ade-Ojo Boluwatife Peter</h1>
					<p className={styles.contact}>
						adeojopeter@gmail.com, +234 810 349 0675
					</p>
					<ul className={styles.linklist}>
						<li>
							<FaGithub className={styles.icon} />
							<span className={styles.label}>Github:</span>{" "}
							<a href='https://github.com/peteradeojo'>peteradeojo</a>
						</li>
						<li>
							<FaLinkedin className={styles.icon} />
							<span className={styles.label}>LinkedIn:</span>{" "}
							<a href='https://www.linkedin.com/in/peter-adeojo'>peteradeojo</a>
						</li>
						<li>
							<FaTwitter className={styles.icon} />
							<span className={styles.label}>Twitter:</span>{" "}
							<a href='https://twitter.com/boluwatifee__'>@boluwatifee__</a>
						</li>
					</ul>
				</div>
				<div className={styles.pane}>
					<h2>Education</h2>
					{educationList.map((edu, index) => {
						return <Education key={index} details={edu} />;
					})}
				</div>
				<div className={styles.pane}>
					<h2>Experience</h2>
					{/* <Experience /> */}
					{experiences.map((ex, index) => (
						<Experience key={index} details={ex} />
					))}
				</div>
				{/* <div className={styles.pane}>
					<h2>Portfolio</h2>
          <h3>Skills</h3>

				</div> */}
				<div className={styles.pane}>
					<h2>Certifications</h2>
					<div className={styles.certificationList + " row"}>
						{certifications.map((cert, index) => (
							<div key={index} className='col-sm-6 col-md-3 col-lg-4'>
								<Certifications details={cert} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CurriculumVitae;
