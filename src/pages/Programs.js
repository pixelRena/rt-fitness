import { Link } from 'react-router-dom';

export default function Programs() {
	return(
		<div className="container mt-5 mb-5">
			<h1 className="text-center">Programs</h1>
			<p className="form-text text-center">Here are the main programs I offer, but I also offer other programs if these do not fit within your goal.</p>
			<div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
				<div className="col">
					<div className="card h-100">
						<div className="card-img-top" style={{height:"200px", overflow:"hidden", backgroundColor:"lightgrey"}}>
							<img src="/images/pexels-karolina-grabowska-4397840.jpg" style={{"marginTop":"-400px"}} alt="motivational-sign-on-floor" width="500px"/>
						</div>
						<div className="card-body">
							<h5 className="card-title">Performance Program</h5>
							<p className="card-text">Get ready to take your performance and abilities to the next level.</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-img-top" style={{height:"200px", overflow:"hidden", backgroundColor:"lightgrey"}}>
							<img src="/images/pexels-andrea-piacquadio-3766211.jpg" alt="weights" width="400px"/>
						</div>
						<div className="card-body">
							<h5 className="card-title">Weight Loss Program</h5>
							<p className="card-text"> Your target weight awaits you by applying High Intensity exercises that'll help burn off those stubborn calories.</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-img-top" style={{height:"200px", overflow:"hidden", backgroundColor:"lightgrey"}}>
							<img src="/images/pexels-ivan-samkov-4162449.jpg" alt="strength-boxing-bag" width="400px" style={{"marginTop":"-100px"}}/>
						</div>
						<div className="card-body">
							<h5 className="card-title">Strength Program</h5>
							<p className="card-text">Strength & Conditioning to help build that muscle that's layered deep within you.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<Link to="/contact-me">
					<button className="btn btn-dark me-3">Contact Me</button> 
				</Link>
				<Link to="/apply-now">
					<button className="btn btn-dark">Apply Now</button>
				</Link>
			</div>
		</div>
	);
};