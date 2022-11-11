import { Link } from 'react-router-dom';

export default function NavBar() {
	return(
		<nav className="navbar navbar-dark sticky-top text-white navbar-expand-lg bg-dark" style={{padding: "unset"}}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src="logo.png" width="60"/>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/programs">Programs</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact-me">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};