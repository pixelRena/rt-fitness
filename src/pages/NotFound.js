import {Link} from 'react-router-dom';

export default function NotFound() {
	return( 
		<div className="container text-center fs-5 mt-5">
			<p>Page was not found. Are you lost? Let's head back <Link className="text-warning" to="/">Home</Link>.</p>
			<div className="d-flex justify-content-center">
				<img src="/images/notfound.png" alt="not-found" width="500"/>
			</div>
		</div>
	);
};