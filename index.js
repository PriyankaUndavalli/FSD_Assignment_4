function generateRandom() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = `Random Number: ${randomNumber}`;
}
