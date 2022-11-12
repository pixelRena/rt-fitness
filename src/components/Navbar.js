import { Link, NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function NavBar() {
	const [ isOpen, setIsOpen ] = useState(false);
	const nav = useRef();

	const navCollapse = (bool) => {
		setIsOpen(bool);
		if(bool){
			nav.current.classList.remove("collapse");
		} else {
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
							<NavLink className="nav-link" activeClassName="active" to="/" onClick={() => navCollapse(false)}>Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink  className="nav-link" activeClassName="active" to="/programs" onClick={() => navCollapse(false)}>Programs</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/apply-now" onClick={() => navCollapse(false)}>Apply</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/about" onClick={() => navCollapse(false)}>About</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};