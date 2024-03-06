// <<<<<<<<<<<<<<< 1 >>>>>>>>>>>>>>>
{
    console.log("Program ---------1");
    function square(){
        let i , square=0;
        for(i=1 ; i<=20 ; i++){
            square = i * i
            console.log(square);
        }
    }
    square("the square is: ");
}

// <<<<<<<<<<<<<<< 2 >>>>>>>>>>>>>>>
{
    console.log("Program ---------2");
    function fahrenheit(){
        let celcius =16;
        let fahrenheit = ((celcius*9)/5)+32;
        console.log(fahrenheit);
    }
    fahrenheit();
}

// <<<<<<<<<<<<<<< 3 >>>>>>>>>>>>>>>
{
    console.log("Program ---------3");
    function area(){
        let width=7 , height=10;
        let area =width * height;
        console.log(area);
    }
    area();
}

// <<<<<<<<<<<<<<< 4 >>>>>>>>>>>>>>>
{
    console.log("Program ---------4");
    function reverse(){
        let m = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
        let n = m.reverse();
        console.log(n);
    }
    reverse();
}

// <<<<<<<<<<<<<<< 5 >>>>>>>>>>>>>>>
{
    console.log("Program ---------5");
    {
        function num(string){
            let Vowels = 'aAeEiIoOuU';
            let count = 0;
    
            for(let i = 0; i < string.length; i++){
                if (Vowels.indexOf(string[i]) !== -1){
                    count += 1;
                }
            }
            return count;
        }
        console.log("The Total Number Of Vowels is", num("Koladiya Meet"));
    }
}

// <<<<<<<<<<<<<<< 6 >>>>>>>>>>>>>>>
{
    console.log("Program ---------6");
    function interest(){
        let p = 213 , r=5 , t=5 , simple;
    
        simple = (p * r * t)/100;
        return simple;
    }
    console.log("The Simpe Interest is", interest());
}

// <<<<<<<<<<<<<<< 7 >>>>>>>>>>>>>>>
{
    console.log("Program ---------7");
    function random(){
        
        let random = Math.random() *  (70 - 2) + 1;
        let random1 = Math.random() * (70 - 2) + 1;
        let random2 = Math.random() * (70 - 2) + 1;

        console.log("The Random Number is", random);
        console.log("The Random Number is", random1);
        console.log("The Random Number is", random2);

    }
    random();
}

// <<<<<<<<<<<<<<< 8 >>>>>>>>>>>>>>>
{
    console.log("Program ---------8");
    function date(){
    let now = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    console.log("Today is", day , "and the time is", hours,":",minutes,":",second);
    }
    date();
}

// <<<<<<<<<<<<<<< 9 >>>>>>>>>>>>>>>
{
    console.log("Program ---------9");
    function order(alphabet){

        return alphabet.split('').sort().join('');
    }
    console.log("JIHGFEDCBA         ", order("JIHGFEDCBA"));
}

// <<<<<<<<<<<<<<< 10 >>>>>>>>>>>>>>>
{
    console.log("Program ---------10");

    // let a=10 , b=20 , c=30;
    
    // (a<=b && b<=c && a<=c);{
    //     alert("This is Sign +");
    // }
}