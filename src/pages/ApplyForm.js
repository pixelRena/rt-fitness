import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';

//  Add button pos's for all devices
// Develop mail implementation
export default function ApplyForm() {
	const navigate = useNavigate();
	// First step
	const [ name, setName ] = useState("");
	const [ location, setLocation ] = useState("");
	const [ sex, setSex ] = useState("");
	const [ otherSex, setOtherSex ] = useState("");
	const [ xp, setXP ] = useState("");
	// Second step
	const [ goal, setGoal ] = useState("");
	const [ otherGoal, setOtherGoal ] = useState("");
	const [ goalType, setGoalType ] = useState("");
	// Step three
	const [ email, setEmail ] = useState("");
	const [ phoneNum, setPhoneNum ] = useState("");
	const [ ready, setReady ] = useState("");
	// current step
	const [ step, setStep ] = useState(1);

	// Check if user can go to next steps by clicking on progressbar
	const [ validateOne, setValidateOne ] = useState(0);
	const [ validateTwo, setValidateTwo ] = useState(0);
	const [ validateThree, setValidateThree ] = useState(0);

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
		const otherGoalStyle = document.getElementById("other-goal");
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
				} else if(!sex ||( sex === "Other" && !otherSex)) {
					if(!sex) {
						toast.error("Please choose your identity");
					} else {
						toast.error("Please fill in the field for 'Other'");
					}
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
					setValidateOne(1);
					setValidateTwo(1);
				}
			} else if(num === 3) {
				if(!goal || (goal === "Other" && !otherGoal)) {
					if(!goal) {
						toast.error("Please select a option for the following field");		
						goalStyle.style.backgroundColor = "#ffb2b2";
						goalStyle.style.transition = "ease 0.5s";
						setTimeout(() => goalStyle.style.backgroundColor = "unset",1000);
					} else {
						toast.error("Please fill in the field for 'Other'");
						otherGoalStyle.style.backgroundColor = "#ffb2b2";
						otherGoalStyle.style.transition = "ease 0.5s";
						setTimeout(() => otherGoalStyle.style.backgroundColor = "unset",1000);
					}
				} else if(!goalType) {
					toast.error("Please answer the following question in the textbox below");
					goalTypeStyle.style.backgroundColor = "#ffb2b2";
					goalTypeStyle.style.transition = "ease 0.5s";
					setTimeout(() => goalTypeStyle.style.backgroundColor = "unset",1000);
				} else {
					setStep(num);
					setValidateThree(1);
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
		toast.success("Application sent!");
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
			sex: sex === "Other" ? otherSex:sex,
			experience: xp,
			goals: (goal === "Other" ? otherGoal:goal)+" "+goalType,
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
				<button type="button" disabled={!validateOne} 
				className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-dark rounded-pill" 
				style={{width: "2rem", height:"2rem"}}
				onClick={() => changeStep(1)}>1</button>
				<button type="button" disabled={!validateTwo} 
				class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-dark rounded-pill" 
				style={{width: "2rem", height:"2rem"}}
				onClick={() => changeStep(2)}>2</button>
				<button type="button" disabled={!validateThree} 
				class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-dark rounded-pill" 
				style={{width: "2rem", height:"2rem"}}
				onClick={() => changeStep(3)}>3</button>
			</div>
			<div className="d-flex justify-content-center h-75">
				<div className={`w-75 ${step === 1 ? '':'d-none'}`} >
					<StepOne name={name} setName={setName} sex={sex} setSex={setSex} xp={xp} setXP={setXP}
							location={location} setLocation={setLocation} otherSex={otherSex} setOtherSex={setOtherSex}/>
				</div>
				<div className={`w-75 ${step === 2 ? '':'d-none'}`}>
					<StepTwo goal={goal} setGoal={setGoal} typeGoal={goalType} setGoalType={setGoalType} otherGoal={otherGoal}
							setOtherGoal={setOtherGoal}/>
				</div>
				<div className={`w-75 ${step === 3 ? '':'d-none'}`}>
					<StepThree email={email} setEmail={setEmail} phoneNum={phoneNum} setPhoneNum={setPhoneNum} ready={ready} setReady={setReady}/>
				</div>
				<div className={`w-75 card text-center rounded-0 ${step === 4 ? '':'d-none'}`}>
					<div className="text-capitalize card-header">Review your information</div>
					<div className="card-body">
						<p>Name: <i>{name}</i></p>
						<p>Location: <i>{location}</i></p>
						<p>Sex: <i>{sex === "Other" ? otherSex:sex}</i></p>
						<p>Have you ever worked out?: <i>"{xp}"</i></p>
						<hr/>
						<p>Goal: <i>"{goal === "Other" ? otherGoal:goal}"</i></p>
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