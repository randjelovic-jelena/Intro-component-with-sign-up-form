'use strict';

const submitBtn=document.querySelector('#submit-btn');

const userName=document.querySelector('#user-name');
let wrongName=document.querySelector('.wrong-name');

const userLastname=document.querySelector('#user-lastname');
let wrongLastname=document.querySelector('.wrong-lastname');

const userEmail=document.querySelector('#user-email');
let wrongEmail=document.querySelector('.wrong-email');

const userPassword=document.querySelector('#user-password');
let wrongPassword=document.querySelector('.wrong-password');

const successMessage=document.querySelector('.success-message');

//SHOW WARNING MESSAGE
const showWarning=(element, status)=>{
	
	if(status==="add"){
		element.classList.add('warning');
	}else{
		element.classList.remove('warning');
		element.nextElementSibling.innerText='';
	}
}
//CHECK USER NAME
const checkName=(val)=>{
	//not empty field
	if(userName.value.length===0 ){
		showWarning(userName,'add');
		wrongName.innerText='Name field cannot be empty';
	}
	else{
		showWarning(userName,'remove');
		//at least 4 characters
		if(val.length<4){
			showWarning(userName,'add');
			wrongName.innerText='Name must contain at least 4 characters';
		}else{
			showWarning(userName,'remove');

			//name must have only letters
			let regName=/^[a-zA-Z\s]*$/;
			if(val.match(regName)){
				showWarning(userName,'remove');
				return true;
			}else{
				showWarning(userName,'add');
				wrongName.innerText='Name must contain only letters';
			}
		}	
	}
}

//check lastname
const checkLastname=(val)=>{
	//not empty field
	if(userLastname.value.length===0 ){
		showWarning(userLastname,'add');
		wrongLastname.innerText='Last Name field cannot be empty';
	}else{
		showWarning(userLastname,'remove');
		//at least 3 characters
		if(val.length<3){
			showWarning(userLastname,'add');
			wrongLastname.innerText='Last Name must contain at least 3 characters';
		}else{
			showWarning(userLastname,'remove');
			
			//userLastname must have only letters
			let regName=/^[a-zA-Z\s]*$/;
			if(val.match(regName)){
				showWarning(userLastname,'remove');
				return true;
			}else{
				showWarning(userLastname,'add');
				wrongLastname.innerText='Last name must contain only letters';
			}
		}
	}
}

//CHECK EMAIL
const checkEmail=(val)=>{
	//not empty field
	if(userEmail.value.length===0 ){
		showWarning(userEmail,'add');
		wrongEmail.innerText='Email field cannot be empty';
	}
	else{
		showWarning(userEmail,'remove');

		let validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if(val.match(validRegex)){
			showWarning(userEmail,'remove');
			return true;
		}else{
			showWarning(userEmail,'add');
			wrongEmail.innerText='Enter valid email address';
		}
	}
}

//CHECK PASSWORD
const checkPassword=(val)=>{
	//not empty field
	if(userPassword.value.length===0 ){
		showWarning(userPassword,'add');
		wrongPassword.innerText='Password field cannot be empty';
	}else{
		showWarning(userPassword,'remove');

		//at least 8-characters,signs,numbers, must be without space
		if(val.length>=8){
			showWarning(userPassword,'remove');
			if(val.includes(' ')){
				showWarning(userPassword,'add');
				wrongPassword.innerText='Could not contain empty space';
			}else{
				showWarning(userPassword,'remove');
				return true;
			}
		}else{
			showWarning(userPassword,'add');
			wrongPassword.innerText='At least 8-characters, signs, numbers, must be without space';
		}
	}
}
/*RESET ALL*/
const resetAll=()=>{
	userEmail.value='';
	userLastname.value='';
	userName.value='';
	userPassword.value='';
}
/*SUCCESS MESSAGE */
const showSuccessMessage=()=>{

	successMessage.innerText='Successfully sent!';
	resetAll();
	setTimeout(()=>{
		successMessage.innerText='';
	},1200);
}

/*FORM SUBMIT*/
submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	let name=checkName(userName.value);
	let lastname=checkLastname(userLastname.value);
	let email=checkEmail(userEmail.value);
	let password=checkPassword(userPassword.value);
	if(name && lastname && email && password){
		showSuccessMessage();
	}

});