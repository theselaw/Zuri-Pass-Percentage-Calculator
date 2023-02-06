let Name = prompt("Kindly, Enter Your Name Below ?");
const PresentScore = prompt("What's your present score on the dashboard ?");
const ObtainableScore = prompt(
  "What's your total obtainable score on the dashboard ?"
);
let PresentPercent = (PresentScore / ObtainableScore) * 100;
let CutOff = (80 / 100) * ObtainableScore;
document.getElementById("Name").innerHTML = Name;
document.getElementById("track").innerHTML = prompt("What's your course track");
document.getElementById("PS").innerHTML = PresentScore;
document.getElementById("OO").innerHTML = ObtainableScore;
document.getElementById("PPercentage").innerHTML = PresentPercent;
document.getElementById("Cutoff").innerHTML = CutOff;
console.log("Hello " + Name, "Your Present % is : " + PresentPercent);
