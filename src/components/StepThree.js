const StepThree = ({handleChange}) => {
	return(
		<div>
			<div className="mb-3">
				<label className="form-text">To finish up this application, I will need some contact information from you so we can get started</label>
				<br/>
				<label htmlFor="email">Email Address</label>
				<input className="form-control" type="email" name="email" id="email" placeholder="youremail@email.com" onChange={handleChange}/>
			</div>
			<div className="mb-3">
				<label htmlFor="tel">Phone Number</label>
				<input className="form-control" name="phoneNum" type="tel" id="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="901-888-888" onChange={handleChange}/>
			</div>
			<div className="mb-3">
				<label id="label-ready" htmlFor="tel">Are you ready to start ASAP?</label>
				<div className="form-check">
					<input className="form-check-input" name="ready" type="radio" id="yes-select-ready" value="Yes" 
					onClick={handleChange}/>
					<label className="form-check-label" htmlFor="yes-select-ready">Yes</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" name="ready" type="radio" id="no-select-ready" value="No" 
					onClick={handleChange}/>
					<label className="form-check-label" htmlFor="no-select-ready">No</label>
				</div>
			</div>
		</div>
	);
};

export default StepThree;