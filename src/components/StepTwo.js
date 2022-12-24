const StepTwo = ({handleChange}) => {
	return(
		<div>
			<div className="mb-3">
				<label>What do you want to accomplish?</label>
				<select className="form-select" id="goal" name="goal" onChange={handleChange}>
					<option selected>Please select a option</option>
					<option value="I want to lose weight">I want to lose weight</option>
					<option value="I want to build muscle">I want to build muscle</option>
					<option value="I want to develop healthier eating habits">I want to develop healthier eating habits</option>
					<option value="I want to be more toned">I want to be more toned</option>
					<option value="Other">Other</option>
				</select>
				<label className="mt-3">If Other (Tell me here):</label>
				<input className="form-control w-50" name="otherGoal" id="other-goal" type="text" onChange={handleChange}/>
			</div>
			<div className="mb-3">
			<label htmlFor="type-goals">Where do you want to see yourself spiritually, physically, and mentally by next year?</label>
				<textarea id="type-goals" name="goalType" placeholder="Type your answer here" style={{"height":"100px"}} className="form-control" onChange={handleChange}/>
			</div>
		</div>
	);
};

export default StepTwo;