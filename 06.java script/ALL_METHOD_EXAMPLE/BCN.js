/* Break , Continue and Nested Statements */

/* Break */
// {
//     for(let counter = 0; counter <= 12; counter++) {
//          if (counter == 8) {
//               break;
//          }
//          document.write(counter);
//          document.write("<br>");
//     }
// }
// {
//     for(let j=12; j >= 0; j--) {
//         if(j == 5) {
//         break;
//         }
//          document.write(j);
//          document.write("<br>");
//     }
// }
// {
//     for(let k="65"; k <= "90"; k++) {
//         if(k == "80") {
//         break;
//         }
//          document.write(k);
//          document.write("<br>");
//     }
// }

/* Continue */
// {
//     for(let counter = 0; counter <= 12; counter++) {
//          if (counter == 8) {
//               continue;
//          }
//          document.write(counter);
//          document.write("<br>");
//     }
// }
// {
//     for(let m = 50; m >= 30; m--){
//         if(m == 35){
//             continue;
//         }
//         document.write(m);
//         document.write("<br>");
//     }
// }
// {
//     for(let n = 65; n <= 90; n++){
//         if(n == 88){
//             continue;
//         }
//         document.write(n);
//         document.write("<br>");
//     }
// }

/* Nested */
// {
//      link: for(let n = 1; n <= 10 ; n++){

//      document.write(n);
//      document.write("<br>");

//      for(let o = 1; o < 4; o++){

//           if(n == 3){
//           break link;
//           }
//           document.write("Hello");
//           document.write("<br>");
//      }
//      }
// }
// {
//      name: for(let a = 1; a <= 5 ; a++){
//         document.write(a);
//         document.write("<br>");

//         for(let b = 1; b < 5 ; b++){
//             if(a == 3){
//             continue name;
//             }
//             document.write("Hello");
//             document.write("<br>");
    
//         }
//     }
// }
// {
//     name: for(let a = 1; a <= 5 ; a++){
//        document.write(a);
//        document.write("<br>");

//        for(let b = 1; b < 5 ; b++){
//            if(a == 3){
//            break name;
//            }
//            document.write("Hello");
//            document.write("<br>");
   
//        }
//    }
// }