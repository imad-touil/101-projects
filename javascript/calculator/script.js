function compute()
{
    var pricipal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = pricipal * years * rate / 100;
    var amount = parseInt(interest) + parseFloat(pricipal);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years)

    if (pricipal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = "If you deposit $" + "<mark>" + pricipal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
}

function updateRate() {
    let reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = reteval;
}