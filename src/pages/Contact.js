import { useState } from 'react';

// explore text color on hover <a>
export default function Contact() {
	const [ switchQR, setQR ] = useState(1);

	return(
		<div className="contact container w-75 mt-5 mb-5">
			<div className="row">
				<div className="row mb-3 bg-dark p-5 rounded-3">
					<div className="col text-center">
					<h1 className="text-capitalize text-white">How to reach out</h1>
					<p className="text-wrap text-white p-4 fs-6">The best way to contact me would be through my social platforms. Use the QR to scan and find me or you can click on the icons below to get sent directly to my page.</p>
					</div>
					<div className="text-center">
						<a href="instagram.com/rtfitness1_" className="btn btn-outline-light bi-instagram rounded-5 fs-4 me-2"/>
						<a href="tiktok.com/@1andonlyhope_" className="btn btn-outline-light bi-tiktok rounded-5 fs-4"/>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-outline-dark" type="button" onClick={() => setQR(switchQR ? 0:1)}>{switchQR ? 'Show Tiktok QR':'Show Instagram QR'}</button>
				</div>
				<div className="col d-flex justify-content-center mt-2">
						<img className={`igQR ${switchQR ? '':'d-none'}`} src="/images/InstagramQR.jpg"/>
						<img className={`tiktokQR ${switchQR ? 'd-none':''}`} src="/images/TiktokQR.jpg"/>
				</div>
			</div>
		</div>
	);
};