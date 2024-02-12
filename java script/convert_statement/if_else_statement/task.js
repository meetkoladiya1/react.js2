/* ---------- 1 ----------*/


// {
//     let number = 10;
//     if(number % 2 == 0)
//     {
//         console.log("This is a even number");
//     }
//     else{
//         console.log("This is odd number");
//     }
// }


/* ---------- 2 ----------*/


// {
//     let m = 10;
//     let n = 2;
//     if(m > n)
//     {
//         console.log("M is a large number");
//     }
//     else{
//         console.log("N is a large number");
//     }
// }


/* ---------- 3 ----------*/


// {
//       let m = 10;
//       let n = 20;
    
//       let num = 1;
    
//       switch (num) {
//         case 1:
//             console.log(m + n);
//             break;
    
//         case 2:
//           console.log(m - n);
//           break;
    
//         case 3:
//           console.log(m / n);
//           break;
    
//         case 4:
//           console.log(m * n);
//           break;
    
//         case 5:
//           console.log(m % n);
//           break;
//         default:
//             console.log("enter right number")
//           break;
//       }
// }


/* ---------- 4 ----------*/


// {
//         var mark = prompt()

//     if(mark <= 33){
//         console.log("failed");
//     }

//     else if(mark >= 34 &&  mark <= 50){
//         console.log("D gred");
//     }

//     else if(mark >= 51 &&  mark <= 60){
//         console.log("C gred");
//     }

//     else if(mark >= 61  && mark <= 70){
//         console.log("B2 gread");
//     }

//     else if(mark >= 71  && mark <= 80)
//     {
//         console.log("B1 gread");
//     }

//     else if(mark >= 81  && mark <= 90)
//     {
//         console.log("A2 gread");
//     }

//     else if(mark >= 91  && mark <= 100)
//     {
//         console.log("A1 gread");
//     }

//     else if(mark >= 101)
//     {
//         console.log("Only 100 Marks Available");
//     }
// }


/* ---------- 5 ----------*/


var x = 13;
var y = 7;
var z = 21;


if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
} 






// LOGICAL PROGRAM


// 1.   - 9 * 3     ‐27


// {
//     var m = -9;
//     var n = 3;

//     console.log(m * n);
// }


// // 2. “Value is “+ 50     “value is 50”


// {
//     var m = "value is";
//     var n = 50;
    // var o = `"${m} ${n}"`

//     console.log(o);
// }


// // 3. 17 % 5     2


// {
//     var m = 17;
//     var n = 5;

//     console.log(m % n);
// }


// // 4. 5 % 17     5


// {
//     var m = 5;
//     var n = 17;

//     console.log(m % n);
// }


// // 5. 5/10     0.5


// {
//     var m = 5;
//     var n = 10;

//     console.log(m / n);
// }


// // 6. (4 == 4)     true


// {
//     var m = 4;
//     var n = 4;

//     console.log(m == n);
// }


// // 7. (4! = 5)     true


// {
//     var m = 4;
//     var n = 5;

//     console.log(m != n);
// }


// // 8. (7 <= 8)     true


// {
//     var m = 7;
//     var n = 8;

//     console.log(m <= n);
// }