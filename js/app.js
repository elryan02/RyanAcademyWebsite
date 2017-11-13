

$(document).ready(function() {

// Register Button

var formModal = document.getElementById("formModal");

var regBtn = document.getElementById("regBtn");

var span = document.getElementsByClassName("formClose")[0];

regBtn.onclick = function() {
    formModal.style.display = "block";
}

span.onclick = function() {
    formModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
}

// Submit Button

var formSubmit = document.getElementById("formSubmit");

formSubmit.onclick = function() {
    alert("You just submitted something to nothingness");
}
});
