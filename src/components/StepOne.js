const StepOne = ({handleChange}) => {
	return(
		<div className="mb-4">
			<p className="form-text">I would love to know more about you and what goals you would like to pursue.</p>
			<div className="mb-3">
				<label htmlFor="name">Enter your name (First & Last)</label>
				<input className="form-control" name="name" type="name" id="name" placeholder="First Name, Last Name" onChange={handleChange}/>
			</div>
			<div className="mb-3">
				<label htmlFor="location">What city and state do you live in?</label>
				<input className="form-control" type="text" id="location" placeholder="Memphis, TN" name="location" onChange={handleChange}/>
			</div>
			<div>
				<label id="label-sex">What do you identify as?</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="sex" type="radio" id="male-select" value="Male" onClick={handleChange}/>
				<label className="form-check-label" htmlFor="male-select">Male</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="sex" type="radio" id="female-select" value="Female" onClick={handleChange}/>
				<label className="form-check-label" htmlFor="female-select">Female</label>
			</div>
			<div className="form-check mb-3">
				<input className="form-check-input mt-2" name="sex" type="radio" id="other-select" value="Other" onClick={handleChange}/>
				<label className="form-check-label mt-1 me-3" htmlFor="other-select">Other:</label>
				<input className="form-control w-50" name="otherSex" id="other-identification" type="text" onChange={handleChange}/>
			</div>
			<div><label id="label-workout">Have you ever worked out before?</label></div>
			<div className="form-check">
				<input className="form-check-input" name="xp" type="radio" id="yes-select" value="Yes" onClick={handleChange}/>
				<label className="form-check-label" htmlFor="yes-select">Yes</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="xp" type="radio" id="no-select" value="No" onClick={handleChange}/>
				<label className="form-check-label" htmlFor="no-select">No</label>
			</div>
		</div>
    );
};

export default StepOne;