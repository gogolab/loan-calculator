document.getElementById("loan-form").addEventListener("submit", calculateResutls);


function calculateResutls(e) {
    e.preventDefault();

    const UIamount = document.getElementById("amount");
    const UIinterest = document.getElementById("interest");
    const UIyears = document.getElementById("years");
    const UImonthlyPayment = document.getElementById("monthly-payment");
    const UItotalPayment = document.getElementById("total-payment");
    const UItotalInterest = document.getElementById("total-interest");

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        showResults();
    } else {
        showError("Please check your numbers.");
    }
}

function showResults() {
    document.querySelector(".results").style.display = "none";
    document.getElementById("loading").style.display = "block";

    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.querySelector(".results").style.display = "block";
    }, 1000)
}

function showError(msg) {

    document.getElementById("loading").style.display = "none";
    document.querySelector(".results").style.display = "none";

    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(msg));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000)
}

function clearError() {
    document.querySelector(".alert").remove();
}