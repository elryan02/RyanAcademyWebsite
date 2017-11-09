$(document).ready(function() {

var formModal = document.getElementById('formModal');

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
});
