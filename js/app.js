// Register Button

var formModal = document.getElementById("formModal");

var regBtn = document.getElementById("regBtn");

var span = document.getElementsByClassName("formClose")[0];

var formSubmit = document.getElementById("formSubmit");

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

formSubmit.onclick = function() {
    alert("Congratulations! You just submitted something into the void!");
}
