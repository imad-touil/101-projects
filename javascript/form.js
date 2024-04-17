// This is Just First Try To Master JS;

function checkData() {
    // Create reference to the input elements which to validate
    var username = document.getElementById("name");
    var email = document.getElementById("email");

    // Check if username field is empty
    if (username.value == "") {
        alert("Please Enter Your Name");
        username.focus();
        return false;
    }

    // Check if email field is empty
    if (email.value == "") {
        alert("Please Enter Your Email");
        email.focus();
        return false;
    }
}