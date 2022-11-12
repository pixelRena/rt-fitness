export default function About() {
	return(
		<div className="about d-flex align-items-center justify-content-center">
			<div className="row w-75 text-center">
				<div className="col-lg-4 mt-5 me-5">
					<img src="/images/rtfPortrait3.jpeg" alt="image_of_trainer"/>
				</div>
				<div className="col-lg-7 col-sm-4 col-md-12 col-12">
					<h1 className="text-center text-capitalize mt-5">Meet your trainer</h1>
					<hr className="line secondary-text"/>
					<p className="text-wrap mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis maximus mauris, non vulputate lectus. Integer fringilla rutrum accumsan. Phasellus et est non mi ultrices egestas ac a ligula. In vel porttitor ante, a consectetur tellus. Duis tristique ligula in mi tempus molestie. Sed placerat ex nunc, id vestibulum ante tristique non. Nam eros magna, auctor sed porttitor sed, interdum id nunc. Donec vulputate, quam eu tempor sagittis, sem est auctor odio, ut dapibus justo magna vel risus. Fusce molestie cursus cursus. Donec quis elit at mauris ultricies vulputate. Nam vitae magna erat. Aliquam sodales sem nec sem sagittis, at aliquam mi laoreet. Maecenas venenatis erat ut velit facilisis dapibus.</p>
				</div>
			</div>
		</div>
	);
};