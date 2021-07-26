const form = document.getElementById('form');
const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const gender = document.getElementById('gender');
const regbtn = document.getElementById('regbtn');



regbtn.addEventListener('click', () => {
	// e.preventDefault();
	
	checkInputs();
});

	var tooltip = document.querySelector('.final__tooltip')

	tooltip.addEventListener('click', () => {


	});
 
function checkInputs() {
	// trim to remove the whitespaces
	const FirstnameValue = Firstname.value.trim();
	const LastnameValue = Lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const dayValue = day.value.trim();
	const monthValue = month.value.trim();
	const genderValue = gender.value.trim();
	

	
	if(FirstnameValue === '') {
		setErrorFor(Firstname, '');
	} else if (!isFirstname(FirstnameValue)) {
		setErrorFor(firstname, '');
	} else {
		setSuccessFor(Firstname);
	}

	if(LastnameValue === '') {
		setErrorFor(Lastname, '');
	}	else if (!isLastname(LastnameValue)) {
		setErrorFor(Lastname, '');
	} else {
		setSuccessFor(Lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, '');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, '');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, '');
	} else if (!isPassword(passwordValue)) {
		setErrorFor(password, '');
	}
	 else {
		setSuccessFor(password);
	}
	if(dayValue === '') {
		setErrorFor(day, '');
	} else {
		setSuccessFor(day);
	}
	if(monthValue === '') {
		setErrorFor(month, '');
	} else {
		setSuccessFor(month);
	}
	if(yearValue === '') {
		setErrorFor(year, '');
	} else {
		setSuccessFor(year);
	}
	if(genderValue === '') {
		setErrorFor(gender, '');
	} else {
		setSuccessFor(gender);
	}
	
	// if(password2Value === '') {
	// 	setErrorFor(password2, '');
	// } else if(passwordValue !== password2Value) {
	// 	setErrorFor(password2, '');
	// } else{
	// 	setSuccessFor(password2);
	// }
}


function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = ' form-control-1 error';
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control-1 success';
}

	//regular expression

function isFirstname(Firstname){
	return/^[A-Za-z. ]{3,30}$/.test(Firstname);
}
function isLastname(Lastname){
	return/^[A-Za-z. ]{3,30}$/.test(Lastname);
}
function isPassword(password){
	return/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password);

}
	
function isEmail(email) {
	// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	return /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(email);
}

