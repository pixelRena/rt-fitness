import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//  Add button pos's for all devices
// Enable step button clicks
// Develop mail implementation
const StepOne = ({setName,setLocation,setXP,setSex,name,location,sex,xp}) => {
	return(
		<div className="mb-4">
			<p className="form-text">I would love to know more about you and what goals you would like to pursue.</p>
			<div className="mb-3">
				<label htmlFor="name">Enter your name (First & Last)</label>
				<input className="form-control" type="name" id="name" placeholder="First Name, Last Name" value={name} onChange={e => setName(e.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlFor="location">What city and state do you live in?</label>
				<input className="form-control" type="text" id="location" placeholder="Memphis, TN" value={location} onChange={e => setLocation(e.target.value)}/>
			</div>
			<div>
				<label id="label-sex">What do you identify as?</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="sex" type="radio" id="male-select" value="Male" onClick={e => setSex(e.target.value)}/>
				<label className="form-check-label" htmlFor="male-select">Male</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="sex" type="radio" id="female-select" value="Female" onClick={e => setSex(e.target.value)}/>
				<label className="form-check-label" htmlFor="female-select">Female</label>
			</div>
			<div className="form-check mb-3">
				<input className="form-check-input mt-2" name="sex" type="radio" id="other-select" value="Other" onClick={e => setSex(e.target.value)}/>
				<label className="form-check-label mt-1 me-3" htmlFor="other-select">Other:</label>
				<input className="form-control w-50" id="other-identification" type="text"/>
			</div>
			<div><label id="label-workout">Have you ever worked out before?</label></div>
			<div className="form-check">
				<input className="form-check-input" name="exerciseXP" type="radio" id="yes-select" value="Yes" onClick={e => setXP(e.target.value)}/>
				<label className="form-check-label" htmlFor="yes-select">Yes</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" name="exerciseXP" type="radio" id="no-select" value="No" onClick={e => setXP(e.target.value)}/>
				<label className="form-check-label" htmlFor="no-select">No</label>
			</div>
		</div>
    );
};

const StepTwo = ({setGoal, goal, setGoalType, goalType}) => {
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
				<input className="form-control w-50" id="other-goal" type="text"/>
			</div>
			<div className="mb-3">
			<label htmlFor="type-goals">Where do you want to see yourself spiritually, physically, and mentally by next year?</label>
				<textarea id="type-goals" placeholder="Type your answer here" style={{"height":"100px"}} className="form-control" value={goalType} onChange={e => setGoalType(e.target.value)}/>
			</div>
		</div>
	);
};

const StepThree = ({setEmail, email, setPhoneNum, phoneNum, setReady, ready}) => {
	return(
		<div>
			<div className="mb-3">
				<label className="form-text">To finish up this application, I will need some contact information from you so we can get started</label>
				<br/>
				<label htmlFor="email">Email Address</label>
				<input className="form-control" type="email" id="email" placeholder="youremail@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlFor="tel">Phone Number</label>
				<input className="form-control" type="tel" id="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="901-888-888" value={phoneNum} onChange={e => setPhoneNum(e.target.value)}/>
			</div>
			<div className="mb-3">
				<label id="label-ready" htmlFor="tel">Are you ready to start ASAP?</label>
				<div className="form-check">
					<input className="form-check-input" name="readytogo" type="radio" id="yes-select-ready" value="Yes" onClick={e => setReady(e.target.value)}/>
					<label className="form-check-label" htmlFor="yes-select-ready">Yes</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" name="readytogo" type="radio" id="no-select-ready" value="No" onClick={e => setReady(e.target.value)}/>
					<label className="form-check-label" htmlFor="no-select-ready">No</label>
				</div>
			</div>
		</div>
	);
};

export default function ApplyForm() {
	const navigate = useNavigate();
	// First step
	const [ name, setName ] = useState("");
	const [ location, setLocation ] = useState("");
	const [ sex, setSex ] = useState("");
	const [ xp, setXP ] = useState("");
	// Listen for other
	// Second step
	// Listen for other
	const [ goal, setGoal ] = useState("");
	const [ goalType, setGoalType ] = useState("");
	// Step three
	const [ email, setEmail ] = useState("");
	const [ phoneNum, setPhoneNum ] = useState("");
	const [ ready, setReady ] = useState("");

	const [ step, setStep ] = useState(1);

	const progressState = useRef(null);
	const progressVisibility = useRef(null);
	const changeStep = (num, type) => {
		// first steps elements
		const nameStyle = document.getElementById("name");
		const locationStyle = document.getElementById("location");
		const sexStyle = document.getElementById("label-sex");
		const xpStyle = document.getElementById("label-workout");
		// second steps elements
		const goalStyle = document.getElementById("goal");
		const goalTypeStyle = document.getElementById("type-goals");
		// third steps elements
		const emailStyle = document.getElementById("email");
		const phoneNumStyle = document.getElementById("tel");
		const readyStyle = document.getElementById("label-ready");

		// validations
		if(type) {
			if(num === 2) {
				if(!name) {
					toast.error("Please enter your name");
					nameStyle.style.backgroundColor = "#ffb2b2";
					nameStyle.style.transition = "ease 0.5s";
					setTimeout(() => nameStyle.style.backgroundColor = "unset",1000);
				} else if(!location) {
					toast.error("Please enter your city and state");
					locationStyle.style.backgroundColor = "#ffb2b2";
					locationStyle.style.transition = "ease 0.5s";
					setTimeout(() => locationStyle.style.backgroundColor = "unset",1000);
				} else if(!sex) {
					toast.error("Please choose your identity");
					sexStyle.style.backgroundColor = "#ffb2b2";
					sexStyle.style.transition = "ease 0.5s";
					setTimeout(() => sexStyle.style.backgroundColor = "unset",1000);
				} else if(!xp) {
					toast.error("Please select your experience");
					xpStyle.style.backgroundColor = "#ffb2b2";
					xpStyle.style.transition = "ease 0.5s";
					setTimeout(() => xpStyle.style.backgroundColor = "unset",1000);
				} else {
					setStep(num);
				}
			} else if(num === 3) {
				if(!goal) {
					toast.error("Please select a option for the following field");
					goalStyle.style.backgroundColor = "#ffb2b2";
					goalStyle.style.transition = "ease 0.5s";
					setTimeout(() => goalStyle.style.backgroundColor = "unset",1000);
				} else if(!goalType) {
					toast.error("Please answer the following question in the textbox below");
					goalTypeStyle.style.backgroundColor = "#ffb2b2";
					goalTypeStyle.style.transition = "ease 0.5s";
					setTimeout(() => goalTypeStyle.style.backgroundColor = "unset",1000);
				} else {
					setStep(num);
				}
			} else {
				if(!email) {
					toast.error("Please enter your email address");
					emailStyle.style.backgroundColor = "#ffb2b2";
					emailStyle.style.transition = "ease 0.5s";
					setTimeout(() => emailStyle.style.backgroundColor = "unset",1000);
				} else if(!phoneNum) {
					toast.error("Please enter your phone number");
					phoneNumStyle.style.backgroundColor = "#ffb2b2";
					phoneNumStyle.style.transition = "ease 0.5s";
					setTimeout(() => phoneNumStyle.style.backgroundColor = "unset",1000);
				} else if (!ready) {
					toast.error("Select if you are ready to start!");
					readyStyle.style.backgroundColor = "#ffb2b2";
					readyStyle.style.transition = "ease 0.5s";
					setTimeout(() => readyStyle.style.backgroundColor = "unset",1000);
				} else {
					setStep(num);
				}
			}
		} else {
			setStep(num);
		}
	};


	const handleApplication = (e) => {
		e.preventDefault();
		navigate('/apply-now/confirmation', {
			state: {
				name: name
			}
		});
		console.log({
			name: name,
			email: email,
			phone: phoneNum,
			location: location,
			sex: sex,
			experience: xp,
			goals: goal+" "+goalType,
			"are they ready?": ready,
		});
	};

	useEffect(() => {
		if(step === 1) {
			progressState.current.style.width = "0%";
		} else if(step === 2) {
			progressState.current.style.width = "50%";
		} else {
			progressState.current.style.width = "100%";
		}

		if(step === 4) {
			progressVisibility.current.classList.add("d-none");
		} else {
			progressVisibility.current.classList.remove("d-none");
		}
	},[changeStep])

	return(
		<div className="apply container mt-5 mb-5">
			<h1 className="text-uppercase text-center">Application Form</h1>
			<div className="position-relative m-4" ref={progressVisibility}>
				<div className="progress" style={{"height": "1px"}}>
				<div className="progress-bar" role="progressbar" ref={progressState} style={{"backgroundColor":"#f47308", "width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
				<button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-dark rounded-pill" style={{width: "2rem", height:"2rem"}}>1</button>
				<button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-dark rounded-pill" style={{width: "2rem", height:"2rem"}}>2</button>
				<button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-dark rounded-pill" style={{width: "2rem", height:"2rem"}}>3</button>
			</div>
			<div className="d-flex justify-content-center h-75">
				<div className={`w-75 ${step === 1 ? '':'d-none'}`} >
					<StepOne name={name} setName={setName} sex={sex} setSex={setSex} xp={xp} setXP={setXP}
							location={location} setLocation={setLocation}/>
				</div>
				<div className={`w-75 ${step === 2 ? '':'d-none'}`}>
					<StepTwo goal={goal} setGoal={setGoal} typeGoal={goalType} setGoalType={setGoalType}/>
				</div>
				<div className={`w-75 ${step === 3 ? '':'d-none'}`}>
					<StepThree email={email} setEmail={setEmail} phoneNum={phoneNum} setPhoneNum={setPhoneNum} ready={ready} setReady={setReady}/>
				</div>
				<div className={`w-75 card text-center rounded-0 ${step === 4 ? '':'d-none'}`}>
					<div className="text-capitalize card-header">Review your information</div>
					<div className="card-body">
						<p>Name: <i>{name}</i></p>
						<p>Location: <i>{location}</i></p>
						<p>Sex: <i>{sex}</i></p>
						<p>Experience: <i>"{xp}"</i></p>
						<hr/>
						<p>Goal: <i>"{goal}"</i></p>
						<p><i>"{goalType}"</i></p>
						<hr/>
						<p>Email Address: <i>{email}</i></p>
						<p>Phone Number: <i>{phoneNum}</i></p>
						<p>Are you ready to start ASAP?: <i>"{ready}"</i></p>
						<p className="form-text">If you need to go back and make changes, feel free to do so!</p>
						<button type="button" onClick={() => changeStep(3)} className="mt-3 btn btn-dark float-start">Prev</button>
						<button type="button" onClick={handleApplication} className="mt-3 btn btn-dark float-end">Submit Application</button>
					</div>
				</div>
				<div className="position-absolute" style={{bottom: "250px"}}>
						<button type="button" onClick={() => changeStep(step-1)} className={`me-3 btn btn-dark float-start ${step === 1 || step === 4 ? 'd-none':''} `}>Prev</button>
						<button type="button" onClick={() => changeStep(step+1, "next")} className={`btn btn-dark float-end ${step === 4 ? 'd-none':''}`}>Next</button>
				</div>
			</div>
		</div>
	);
};