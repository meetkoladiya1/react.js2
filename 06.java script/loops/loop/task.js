/* 
 ----- ❖ while / do-while / for Program ❖ -----
*/




/* ---------- 1 ---------- */
{
    // let countdown = 10;

    // while(countdown > 0){
    //     document.write(countdown + "<br>");
    //     countdown --;
    // }
    // document.write("<br>");
}

{
    // let countdown = 10;

    // do{
    //     document.write(countdown + "<br>");
    //     countdown --;
    // }while(countdown > 0)
    // document.write("<br>");
}

{
    // let countdown = 10;

    // for(countdown; countdown > 0; countdown--){
    //     document.write(countdown + "<br>");
    // }
    // document.write("<br>");
}

/* ---------- 2 ---------- */
{
    // let a = 1;
    // let sum = 0;

    // while(a <= 10){
    //     sum += a; // sum = sum + a;
    //     a++;
    // }
    // document.write(sum + "<br>");
    // document.write("<br>");
}

{
    // let a = 1;
    // let sum = 0;

    // do{
    //     sum += a; // sum = sum + a;
    //     a++;
    // }while(a <= 10)
    // document.write(sum + "<br>");
    // document.write("<br>");
}

{
    // let a = 1;
    // let sum = 0;

    // for(a; a <= 10; a++){
    //     sum += a; // sum = sum +a;
    // }
    // document.write(sum + "<br>");
    // document.write("<br>");
}

/* ---------- 3 ----------*/

{
    // let a = 3;
    // i = 1;

    // while(i <= 10){
    //     document.write(a*i + "<br>");
    //     i++;
    // }
    // document.write("<br>");
}

{
    // let a = 3;
    // let i = 1;

    // do{
    //     document.write(a*i + "<br>");
    //     i++;
    // }while(i <= 10)
    // document.write("<br>");
}

{
    // let a = 3;

    // for(i=1; i <= 10; i++){
    //     document.write(a*i + "<br>");
    // }
    // document.write("<br>");
}

/* ---------- 4 ----------*/

{
    let Num = 89;
    let guessCount = 0;
    let guess = 5;

    while (guessCount < guess) {
        let user = prompt("Enter a number between 1 and 100");
        guessCount++;

        if (user == Num) {
          alert(
            "Congratulations! You guess the number"
          );
          break;
        }
        if (user > Num) {
          alert("guess is too high. Try again.");
        } else if (user < Num) {
          alert("guess is too low. Try again.");
        }
        if (guessCount == guess) {
          alert(
            "Sorry, your guess limit over.");
        }
    }
}

{
//     let Num = 50;
//   let guessCount = 0;
//   let guess = 5;

//     do{
//     let user = prompt("Enter a number between 1 and 100");
//     guessCount++;

//     if (user == Num) {
//       alert(
//         "Congratulations! You guess the number"
//       );
//       break;
//     }
//     if (user > Num) {
//       alert("guess is too high. Try again.");
//     } else if (user < Num) {
//       alert("guess is too low. Try again.");
//     }
//     if (guessCount == guess) {
//       alert(
//         "Sorry, your guess limit over.");
//     }
//   }while (guessCount < guess)
}


/* ---------- 5 ----------*/

{
    // let a = 0 , b = 1 , i = 1 , next;
    // let n = prompt("Fibonacci");

    // while(i <= n){
    //     document.write(a + "," + "\t");
    //     i++;

    //     next = a + b;
    //     a = b;
    //     b = next;
    // }
    // document.write("<br>");
}

{
    // let a = 0 , b = 1 , i = 1 , next;
    // let n = prompt("Fibonacci");


    // do{
    //     document.write(a + "," + "<br>");
    //     i++;

    //     next = a + b;
    //     a = b;
    //     b = next;
    // }while(i <= n)
    // document.write("<br>");
}

{
    // let a = 0 , b = 1 , next;
    // let n = prompt("Fibonacci");


    // for (i = 1; i <= n; i++) {
    //   document.write(a + ", " + "<br>");

    //   next = a + b;
    //   a = b;
    //   b = next;
    // }
    // document.write("<br>");
}

/* ---------- 6 ----------*/

{   
    // let number = 5;
    // let i=1;
    // let factorial=1;

    // while(i<=number){
    //     factorial=factorial*i;
    //     i++;
    // }
    // document.write(factorial + "<br>");  
    // document.write("<br>");
 } 

{   
    // let number = 5 ;
    // let i=1;
    // let factorial=1;
    
    // do{
    //     factorial=factorial*i;
    //     i++;
    // }while(i<=number)
    // document.write(factorial + "<br>");  
    // document.write("<br>");
 } 

 {   
    // let number = 5 ;
    // let factorial=1;
    
    // for(i=1; i <= number; i++){
    //     factorial=factorial*i;
    // }
    // document.write(factorial + "<br>");  
    // document.write("<br>");
 } 

 /* ---------- 7 ----------*/



 /* ---------- 8 ----------*/

{
    // let a = prompt();
    // power = prompt();

    // b = 1;
    // c = 0;

    // while(c < power){
    //     b = b *a;
    //     c++;
    // }
    // document.write(b);
    // document.write("<br>");
}

{
    // let a = prompt();
    // power = prompt();

    // b = 1;
    // c = 0;

    // do{
    //     b = b *a;
    //     c++;
    // }while(c < power)
    // document.write(b);
    // document.write("<br>");
}

{
    // let a = prompt();
    // power = prompt();

    // b = 1;

    // for(c=0; c < power; c++){
    //     b = b *a;
    // }
    // document.write(b);
    // document.write("<br>");
}

 /* ---------- 9 ----------*/

 {
    // let a = prompt();
    // let i = 1;

    // while(i <= a){
    //     let n = 1;
    //     while(n <= i){
    //         document.write("* ");
    //         n++;
    //     }
    //     document.write("<br>");
    //     i++;
    // }
    // document.write("<br>");
 }

 {
    // let a = prompt();
    // let i = 1;

    // do{
    //     let n = 1;
    //     do{
    //         document.write("* ");
    //         n++;
    //     }while(n <= i)
    //     document.write("<br>");
    //     i++;
    // }while(i <= a)
    // document.write("<br>");
}

{
    // let a = prompt();

    // for(i=1; i <= a; i++){
    //     let n = 1;
    //     for(n; n <= i; n++){
    //         document.write("* ");
    //     }
    //     document.write("<br>");
    // }
    // document.write("<br>");
 }








/* 
 ----- ❖ break statement ❖ -----
*/






 /* ---------- 10 ----------*/

 {
    // for(i = 0; i <= 100; i++){
    //     if(i == 23){
    //         break;
    //     }
    //     document.write(i + "<br>");
    // }
    // document.write("<br>");
 }

 /* ---------- 11 ----------*/

 {
    // for(i = 0; i <= 30; i++){
    //     if(i %2 == 0){
    //         document.write(i + "<br>");
    //     }
    //     else  if(i >= 23){
    //         break;
    //     }
    // }
    // document.write("<br>");
 }

 /* ---------- 12 ----------*/

 {
    // let m = 10;

    // for(i = 2; i < m; i++){
    //     if(m % i === 0){
    //         document.write(m + "\t" + "This is Not Prime Number");
    //         break;
    //     }
    // }

    // if(i === m){
    //     document.write(m + "\t" + "This is a Prime Number");
    // }
    // document.write("<br>");
 }

 /* ---------- 13 ----------*/

 {
    // let sum = 0, i;

    // while(true){
    //     i = parseInt(prompt("Enter number :"));

    //     if(i < 0){
    //         break;
    //     }
    //     sum += i;
    // }
    // document.write(`Total Number ${sum}.`);
    // document.write("<br>");
 }





/* 
 ----- ❖ continue statement ❖ -----
*/






 /* ---------- 14 ----------*/

 {
    // let n = 30;

    // for(i=1; i <= n; i++){
    //     if(i % 2== 0){
    //         continue;
    //     }
    //     document.write(i + "<br>");
    // }
    // document.write("<br>");
 }

 /* ---------- 15 ----------*/

 {
    // let i = 1;
    // while(i <= 30) {
    //     if(i%3 === 0) {
    //         i++;
    //         continue;
    //     }
    //     document.write(i + "\t");
    //     i++;
    // }
    // document.write("<br>");
}

 /* ---------- 16 ----------*/

 {
    // let m = prompt();
    // let n = prompt();
    
    // for(i = m; i <= n; i++)
    // {
    //     if(i % 2 !== 0)
    //     {
    //         continue;
    //     }
    //     document.write(i + "\t")
    // }
    // document.write("<br>");
 }

 /* ---------- 17 ----------*/

 {
    // let i = 1;
    // while(i <= 30) {
    //     if(i %5 === 0) {
    //         i++;
    //         continue;
    //     }
    //     document.write(i + "\t");
    //     i++;
    // }
    // document.write("<br>");
}