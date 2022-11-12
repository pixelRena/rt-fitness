import { useLocation } from 'react-router-dom';

export default function Confirmation() {
	const location = useLocation();

	return(
		<div className="container w-75 form-text fs-4" style={{position:'absolute', top:"40%", left:"50%", transform:"translate(-50%,-50%)"}}>
				<p>Thank you so much for your interest in Redemption Temple Fitness {location.state.name}! Expect an email from me within 24-48 hours following the next steps. If you don't hear me from, contact me on either of my social platforms for a follow-up!</p>
				<div className="text-center text-primary"><i className="bi-envelope-check fs-1"/></div>
		</div>
	);
};