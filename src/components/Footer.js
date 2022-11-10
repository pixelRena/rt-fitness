
const currentYear = new Date().getFullYear();

export default function Footer() {
	return(
		<footer className="bg-dark text-center text-white">
		  <div className="container p-2">
			<section className="mt-2 text-uppercase">
				Get in touch with me
			</section>
		    <section>
		      <a className="btn btn-outline-light rounded-5 btn-floating m-1" href="https://www.instagram.com/rtfitness1_" target="_blank" role="button"
		        ><i className="bi-instagram"></i
		      ></a>
		      <a className="btn btn-outline-light rounded-5 btn-floating m-1" href="https://www.tiktok.com/@1andonlyhope_" target="_blank" role="button"
		        ><i className="bi-tiktok"></i
		      ></a>
		    </section>
		    <section>
		    	<p>
			    	<u role="button">Privacy Policy</u> | <u role="button">About RTF</u>
			    </p>
		    </section>
		  </div>
		  <div className="text-center" style={{"backgroundColor": "rgba(0, 0, 0, 0.3)"}}>
		    © {currentYear} Copyright
		  </div>
		</footer>
	);
};