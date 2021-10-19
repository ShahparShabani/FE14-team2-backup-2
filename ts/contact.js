"use strict";
// selected all the elements with a class ".form-control"
let input = document.querySelectorAll(".form-control");
//added an event to the button submit. If the required inputs are empty only the first if condition runs, otherwise the second if condition runs.
document.getElementById("submit").addEventListener("click", function () {
    for (let i = 0; i <= input.length; i++) {
        input[i];
        if (input[i].value == 0) {
            alert("Please fill in all required data!");
            break;
        }
        else if (input[i].value != 0) {
            alert("Thank you for contact us. We will send you an email with the available spots for the shooting in the next 5 minutes!");
            break;
        }
    }
});
