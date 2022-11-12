import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function NavBar() {
	const [ isOpen, setIsOpen ] = useState(false);
	const nav = useRef();

	const navCollapse = (bool) => {
		setIsOpen(bool);
		if(bool){
			console.log("opening");
			nav.current.classList.remove("collapse");
		} else {
			console.log("closing");
			nav.current.classList.add("collapse");
		}
	};

	return(
		<nav className="navbar navbar-dark sticky-top text-white navbar-expand-lg bg-dark" style={{padding: "unset"}}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src="logo.png" alt="RTFLOGO" width="60"/>
				</Link>
				<button className="navbar-toggler" type="button" onClick={() => navCollapse(!isOpen)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" ref={nav} id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/" onClick={() => navCollapse(false)}>Home</Link>
						</li>
						<li className="nav-item">
							<Link  className="nav-link" to="/programs" onClick={() => navCollapse(false)}>Programs</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about" onClick={() => navCollapse(false)}>About</Link>
						</li>
						<li className="nav-item">
							<Link as={Link} className="nav-link" to="/contact-me" onClick={() => navCollapse(false)}>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};