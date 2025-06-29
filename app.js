  const form = document.getElementById("buyOne");
    const input = document.getElementById("buy");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent page reload

        const amount = parseFloat(input.value);

        if (isNaN(amount) || amount <= 0) {
            result.textContent = "Please enter a valid amount!";
            result.style.color = "red";
        } else if (amount >= 1200) {
            result.textContent = "You can buy one for yourself!";
            result.style.color = "green";
        } else {
            result.textContent = "Sorry, not enough money to buy!";
            result.style.color = "orange";
        }
    });
