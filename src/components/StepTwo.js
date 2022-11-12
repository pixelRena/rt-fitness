const StepTwo = ({setGoal, goal, setGoalType, goalType, setOtherGoal, otherGoal}) => {
	return(
		<div>
			<div className="mb-3">
				<label>What do you want to accomplish?</label>
				<select className="form-select" id="goal" value={goal} onChange={e => setGoal(e.target.value)}>
					<option selected>Please select a option</option>
					<option value="I want to lose weight">I want to lose weight</option>
					<option value="I want to build muscle">I want to build muscle</option>
					<option value="I want to develop healthier eating habits">I want to develop healthier eating habits</option>
					<option value="I want to be more toned">I want to be more toned</option>
					<option value="Other">Other</option>
				</select>
				<label className="mt-3">If Other (Tell me here):</label>
				<input className="form-control w-50" id="other-goal" type="text" onChange={e => setOtherGoal(e.target.value)}/>
			</div>
			<div className="mb-3">
			<label htmlFor="type-goals">Where do you want to see yourself spiritually, physically, and mentally by next year?</label>
				<textarea id="type-goals" placeholder="Type your answer here" style={{"height":"100px"}} className="form-control" value={goalType} onChange={e => setGoalType(e.target.value)}/>
			</div>
		</div>
	);
};

export default StepTwo;