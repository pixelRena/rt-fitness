//  Adjust mobile functionality (pexel)
// center in middle
export default function About() {
	return(
		<div className="mt-5 container">
			<div className="about row p-5">
				<div className="col">
					<img src="/images/rtfPortrait3.jpeg" alt="image_of_trainer"/>
				</div>
				<div className="col-md-8">
					<h1 className="text-center text-capitalize">Meet your trainer</h1>
					<p className="text-wrap mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis maximus mauris, non vulputate lectus. Integer fringilla rutrum accumsan. Phasellus et est non mi ultrices egestas ac a ligula. In vel porttitor ante, a consectetur tellus. Duis tristique ligula in mi tempus molestie. Sed placerat ex nunc, id vestibulum ante tristique non. Nam eros magna, auctor sed porttitor sed, interdum id nunc. Donec vulputate, quam eu tempor sagittis, sem est auctor odio, ut dapibus justo magna vel risus. Fusce molestie cursus cursus. Donec quis elit at mauris ultricies vulputate. Nam vitae magna erat. Aliquam sodales sem nec sem sagittis, at aliquam mi laoreet. Maecenas venenatis erat ut velit facilisis dapibus.</p>
				</div>
			</div>
		</div>
	);
};