import { useState } from 'react';

export default function Contact() {
	const [ switchQR, setQR ] = useState(1);

	return(
		<div className="contact container w-75 mt-5 mb-5">
			<div className="row">
				<div className="row mb-3 bg-dark p-3 rounded-3">
					<div className="col text-center">
					<h2 className="text-capitalize text-white mt-2">How to reach out</h2>
					<p className="text-wrap text-white p-4 fs-6">The best way to contact me would be through my social platforms. Use the QR to scan and find me or you can click on the icons below to get sent directly to my page.</p>
					</div>
					<div className="text-center">
						<a href="https://www.instagram.com/rtfitness1_" className="me-2"><i className="btn btn-outline-light bi-instagram rounded-5 fs-4"/></a>
						<a href="https://www.tiktok.com/@1andonlyhope_"><i className="btn btn-outline-light bi-tiktok rounded-5 fs-4"/></a>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-outline-dark" type="button" onClick={() => setQR(switchQR ? 0:1)}>{switchQR ? 'Show Tiktok QR':'Show Instagram QR'}</button>
				</div>
				<div className="col d-flex justify-content-center mt-2">
						<img className={`igQR ${switchQR ? '':'d-none'}`} alt="instagramQR" src="/images/InstagramQR.jpg"/>
						<img className={`tiktokQR ${switchQR ? 'd-none':''}`} alt="tiktokQR" src="/images/TiktokQR.jpg"/>
				</div>
			</div>
		</div>
	);
};
