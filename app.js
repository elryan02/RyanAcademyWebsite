// Popup Form

var formModal = document.getElementById("formModal");

var regBtn = document.getElementById("regBtn");

$("#regBtn").click(function(){
    formModal.style.display = "block";
});

// Closing Popup Form

var span = document.getElementsByClassName("formClose")[0];

$("span").click(function(){
    formModal.style.display = "none";
});

$(document).click(function(){
    if (event.target == formModal) {
      formModal.style.display = "none";
    };
});

// Submit Button

var formSubmit = document.getElementById("formSubmit");

$("#formSubmit").click(function(){
    alert("Congratulations! You just submitted something into the void!");
    formModal.style.display = "none";
});
