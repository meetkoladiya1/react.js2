
function dis(val) { 
	document.getElementById("result").value += val ;
}

function myFunction(event) { 
	if (event.key == '0' || event.key == '1' 
		|| event.key == '2' || event.key == '3' 
		|| event.key == '4' || event.key == '5' 
		|| event.key == '6' || event.key == '7' 
		|| event.key == '8' || event.key == '9' 
		|| event.key == '+' || event.key == '-' 
		|| event.key == '*' || event.key == '/') 
		document.getElementById("result").value += event.key; 
}

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
	if (event.keyCode === 13) { 
		console.log("Enter"); 
		let x = document.getElementById("result").value 
		console.log(x); 
		solve(); 
	} 
}

function solve() { 
	let x = document.getElementById("result").value 
	let y = math.evaluate(x) 
	document.getElementById("result").value = y 
}

function clr() { 
	document.getElementById("result").value = "" 
} 












// setInterval(showTime, 1000);
 
// function showTime() {
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     am_pm = "AM";
 
//     if (hour >= 12) {
//         if (hour > 12) hour -= 12;
//         am_pm = "PM";
//     } else if (hour == 0) {
//         hr = 12;
//         am_pm = "AM";
//     }
 
//     hour = hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
 
//     let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
 
//     document.getElementById("clock").innerHTML = currentTime;
// }
 
// showTime();














// function wordsLen(str) { 
// 	const array = str.trim().split(/\s+/); 
// 	return array.length; 
// } 

// const str = "Welcome, to the Geeeksforgeeks"; 

// console.log("Word count:" ,wordsLen(str));

























// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));






















// function vowelCount(str) {
//     const vowelRegex = /[aeiou/AEIOU]/gi; 
//     const strMatches = str.match(vowelRegex);

//     if (strMatches) {
//         return strMatches.length;
//     } else {
//         return 0; 
//     }
// }
// const string = "Hello! How Are You";
// const len = vowelCount(string);
// console.log("Number of vowels:", len);