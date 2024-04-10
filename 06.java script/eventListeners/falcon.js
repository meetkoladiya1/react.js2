// function OnClick(){
//   document.getElementById("demo").innerHTML = "Javascript Events!";
//   document.getElementById("demo").style.backgroundColor = "green"
// }

// /* Add EventLiseners */

// document.getElementById("head").addEventListener("mouseout" ,greet)

// function greet(){
//   document.getElementById("head").style.color = "orange"
// }




// function changeColor(newColor) {
//   const ele = document.getElementById("para");
//   ele.style.color = newColor;
// }




// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });




// function bgChange() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }




const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
