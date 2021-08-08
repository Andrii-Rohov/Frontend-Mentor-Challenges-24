let emailField = document.querySelector("#email-field");
let submitButton = document.querySelector("#email-form-button");
let errorMessage = document.querySelector("#error-message");

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

function validateEmail(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    console.log(re.test(email.value));
    return re.test(email.value);
}

emailField.addEventListener("input", function(){
    errorMessage.classList.remove("active");
})

submitButton.addEventListener("click", function() {
    if(emailField.validity.valueMissing) {
        errorMessage.innerHTML = "Cannot be empty";
        errorMessage.classList.add("active");
        
    } else if(!validateEmail(emailField)) {
        errorMessage.innerHTML = "Please enter a valid email address"
        errorMessage.classList.add("active");
    } 
})