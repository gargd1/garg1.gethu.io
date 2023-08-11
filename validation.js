/*
name deepanshu garg
date 10/8/2023
description The name, phone number, email address, and comments sections of a contact form are all validated by this JavaScript function. 
It ensures that the input is correctly formatted and displays error messages if necessary.
When the form is submitted, the code also has capability to draw attention to the first field that has an error. 
In addition, when the form is refreshed, an event listener resets the error messages. By maintaining correct and full form submissions on a website, this script improves user experience.
*/

function validateForm() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let comments = document.getElementById('comments');
    let error = document.getElementsByClassName("field-error");
    for (let i = 0; i < error.length; i++) {
        error[i].classList.add('hidden');
    }

    // Check shipping information and payment information fields
    var isValidFields = true, fieldValue;

    // Name field validation
    fieldValue = name.value.trim();
    if (fieldValue === "") {
        isValidFields = false;
        document.getElementById("name-error").classList.remove('hidden');
    }

    // phone field validation
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    fieldValue = phone.value.trim();
    if (fieldValue === "" || !re.test(fieldValue)) {
        isValidFields = false;
        document.getElementById("phone-error").classList.remove('hidden');
    }

    // Email field validation
    var emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    fieldValue = email.value.trim();
    if (fieldValue === "" || !emailRegex.test(fieldValue)) {
        isValidFields = false;
        document.getElementById("email-error").classList.remove('hidden');
    }

    // comments field validation
    fieldValue = comments.value.trim();
    if (fieldValue === "") {
        isValidFields = false;
        document.getElementById("comments-error").classList.remove('hidden');
    }


    if (!isValidFields) {
        // set focus in first error field
        var errors = document.querySelectorAll('form .field-error');
        errors = Array.prototype.slice.call(errors, 0);
        errors.every(errorElement => {
            if (!errorElement.classList.contains('hidden')) {
                errorElement.previousElementSibling.focus();
                return false;
            }
            return true;
        });

        return false;
    }
    return true;
}



// add document load event listener
document.addEventListener("DOMContentLoaded", function(){
    // add event listener for the form reset
    document.getElementById("contactForm").addEventListener("reset", function (e) {
        let error = document.getElementsByClassName("field-error");
        for (let i = 0; i < error.length; i++) {
            error[i].classList.add('hidden');
        }
    });

});