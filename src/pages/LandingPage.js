import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(){
	const [ muted, setMuted ] = useState(0);
	const soundButton = useRef(null);

	function handleSound() {
		if(muted === 0) {
			setMuted(1);
			soundButton.current.classList.remove("bi-volume-mute");
			soundButton.current.classList.add("bi-volume-up");
		} else {
			setMuted(0);
			soundButton.current.classList.remove("bi-volume-up");
			soundButton.current.classList.add("bi-volume-mute");
		}
	};

	return(
		<div>
			<button type="button"
					className="btn btn-dark btn-sound btn-sound bi-volume-mute"
					onClick={handleSound}
					ref={soundButton}/>
			<div className="overlay"></div>
			<video className="position-fixed start-0 top-0" autoPlay playsInline loop muted={muted === 0} src="/videos/RTF_Intro.mov" type="video/mp4"/>
			<section className="hero text-uppercase text-white text-center p-3">
				<h1>Introducing <span className="secondary-text">Redemption Temple Fitness</span></h1>
				<h3>Premium Personal Training</h3>
				<h4 className="fw-lighter">It's <em className="secondary-text">never </em> too late</h4>
				<hr className="line mb-3"/>
				<Link to="/apply-now"><button className="btn btn-dark fs-6 btn-sm text-uppercase pe-3 ps-3 pt-2 pb-2">Apply Now</button></Link>
			</section>
		</div>
	);
};
