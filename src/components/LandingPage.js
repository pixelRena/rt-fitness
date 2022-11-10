import { useEffect, useState, useRef } from 'react';

export default function LandingPage(){
	const [ muted, setMuted ] = useState(0);
	const soundButton = useRef(null);

	function handleSound() {
		if(muted == 0) {
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
					className="btn btn-dark btn-sound rounded-0 btn-sound bi-volume-mute"
					onClick={handleSound}
					ref={soundButton}/>
			<div className="overlay"></div>
			<video autoPlay loop muted={muted == 0} /*src="/videos/RTF_Intro.mov"*/ type="video/mp4"/>
			<section className="hero text-uppercase text-white text-center p-3">
				<h1 className="fw-bolder">Introducing <span className="secondary-text">Redemption Temple Fitness</span></h1>
				<h3>Premium Personal Training</h3>
				<h5 className="fw-lighter">It's <em className="secondary-text">never</em> too late</h5>
				<hr className="line mb-3"/>
				<button className="btn btn-dark btn-sm text-uppercase p-3 rounded-0">Apply Now</button>
			</section>
		</div>
	);
};