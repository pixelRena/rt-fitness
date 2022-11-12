import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {

	return(
		<footer className="bg-dark text-center text-white">
		  <div className="container p-4">
			<section className="mt-2 mb-2 text-uppercase">
				Get in touch with me
			</section>
		    <section className="mb-3">
		      <a className="btn dark-text btn-outline-light rounded-5 btn-floating m-1" href="https://www.instagram.com/rtfitness1_" target="_blank" role="button"
		        ><i className="bi-instagram"></i
		      ></a>
		      <a className="btn dark-text btn-outline-light rounded-5 btn-floating m-1" href="https://www.tiktok.com/@1andonlyhope_" target="_blank" role="button"
		        ><i className="bi-tiktok"></i
		      ></a>
		    </section>
		    <section>
		    	<p>
			    	<Link className="link-color">Privacy Policy</Link> | <Link className="link-color" to="/about">About RTF</Link>
			    </p>
		    </section>
		  </div>
		  <div className="text-center p-2" style={{"backgroundColor": "rgba(0, 0, 0, 0.3)"}}>
		    © {currentYear} Copyright
		  </div>
		</footer>
	);
};