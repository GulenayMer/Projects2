// The code below ıs my try

// need to select all targets to be able to set rules and manipulate dynamically
const form = document.querySelector("#formAll")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2");
const btn = document.getElementById("button");


// function Error  -- with placeholders input and message
function showError(inputInfo, message){
    const formItem = inputInfo.parentElement;
    formItem.className = "form-item error";

    // to change the error message
    const small = formItem.querySelector("small");
     small.innerHTML = message;
}

// function Success 
function showSuccess(inputInfo){
    const formItem = inputInfo.parentElement;
    formItem.className = "form-item success";
}

 // Check if Email is valid
 function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
         }
    

// the submit event fires on the <form> element itself,
// and not on any <button> or <input type="submit"> inside it.
form.addEventListener("submit", function(e){
    e.preventDefault();

    // Username
    if(username.value === ""){
        showError(username, "Username is required")
    } else {
        showSuccess(username)
    }

    // Email
    if(email.value === ""){
        showError(email, "Email is required")
    } else if(!isValidEmail(email.value)){
        showError(email, "Email is not valid")
    }  else {
        showSuccess(email)
    }

    // Password
    if(password.value === ""){
    showError(password, "Password is required")
   } else {
    showSuccess(password)
   }

   // Confitm Password
   if(password2.value === ""){
    showError(password2, "Password is required")
} else {
    showSuccess(password2)
}
});





// -------- ---------------REFACTORING--------------------------------

// function checkReuqired
function checkRequired(inputInfoArray) {

inputInfoArray.forEach(function(input) {

    // trim is used to remove whitespace characters 
    // from the start and end of a string. Whitespace characters include spaces, tabs, etc.
if(input.value.trim() === ""){
       showError(input, `${getFieldName(input)} is required`)
 } else {
     showSuccess(input);
}
})
}

// Get field Name-- to uppercase the first letter
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Check input length
function checkLength(input, min, max) {
    // property length
    if(input.value.length < min){
          showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be maximum ${max} characters`)
    } else{
        showSuccess(input);
    }
};


// check passwords
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    } 
    
}

// form 
form.addEventListener("submit", function(e){
 e.preventDefault();
 
 checkRequired([username, email, password, password2]);
 // or
 //     // username
//     // checkRequired(username);
//     // email
//     //checkRequired(email);
//      // password
//      //checkRequired(password);
//     // password2
//     //checkRequired(password2);
checkLength(username, 3, 15);
checkLength(password, 6, 20)
checkPasswordsMatch(password, password2);
})

































