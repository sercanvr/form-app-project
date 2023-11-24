const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.getElementById('alertTitle');


let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    console.log(isValid);
    if(!isValid)
    {
        alertTitle.textContent = "Please Fill in All Fields!";
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        return;
    }


    if(password.value === repassword.value)
    {
        passwordMatch = true;
        password.style.borderColor = '#00d800';
        repassword.style.borderColor = '#00d800';
    } else {
        passwordMatch = false;
        alertTitle.textContent = "Password Doesn't Match!";
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        password.style.borderColor = 'red';
        repassword.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordMatch)
    {
        alertTitle.textContent = "Registration Successful!";
        alertTitle.style.color = '#00d800';
        alertMessage.style.borderColor = '#00d800';
    }
};

function takeFormInformation() {
    const user = {
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.address.value,
    };

    console.log(user);
};



function submitForm(e) {
    e.preventDefault();
    validateForm();

    if(isValid && passwordMatch)
    {
        takeFormInformation();
    }
};

form.addEventListener('submit', submitForm);