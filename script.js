const btn = document.getElementById("submit");
const results = document.getElementById("results");

function calc(weight, height) {
    const value = Number(weight) / Number(height);
    const roundedValue = value.toFixed(3);
    results.style.display = "block";
    results.innerText = `Your Body Mass Index is ${roundedValue}`;
    if (value < 18.5) {
        results.style.color = "red";
        results.innerText += "\nYou are underweight";
    } else if (value >= 18.5 && value <= 24.9) {
        results.style.color = "green";
        results.innerText += "\nYou are healthy";
    } else if (value >= 25 && value <= 29.9) {
        results.style.color = "orange";
        results.innerText += "\nYou are overweight";
    } else if (value >= 30) {
        results.style.color = "red";
        results.innerText += "\nYou are obese";
    } else {
        results.innerText = "Please enter valid weight and height";
    }
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    calc(weight,height);
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
 
});