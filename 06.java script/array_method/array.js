/* Javascript Array */  

// let newarry = [1,false,"string"]
// console.log(newarry);
// console.log(newarry.length);
// let newarry2 = ["apple" , "banana" , "watermelon" ,  , "lichi"]
// console.log(newarry2);
// console.log(newarry2[4]);
// console.log(Object.keys(newarry2));
// console.log(newarry2.length);
// newarry2.length = 10;
// console.log(newarry2);
// console.log(Object.keys(newarry2));
// newarry2[0] = "Graps"
// console.log(newarry2);
// let newstring  = newarry2.toString();
// console.log(newstring);
// console.log(typeof(newstring));




// let a = [1, false ,"mit"]
// console.log(a);
// console.log(a.length);

// let b = ["mango" , "banana" , "pineapple" ,  , "kivi" ,  , "lichi"];
// console.log(b);
// console.log(b[4]);
// console.log(Object.keys(b));
// console.log(b.length);

// b.length = 12;
// console.log(b);
// console.log(Object.keys(b));
// b[2] = "Graps";
// console.log(b);

// let newstrings = b.toString();
// console.log(newstrings);
// console.log(typeof(newstrings));




// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*

Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...

*/



/* Array length properties */

// let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
// console.log(arry);
// console.log(arry[0]);
// console.log(arry[5]);
// arry.push("frontend");  
// console.log(arry);
// arry.pop()
// arry.pop()
// arry.pop()
// console.log(arry);

// arry[0] = "one"

// console.log(arry);




// let c = [true , 3 , "demo" , "demo-1" , "option" , "option-1"]
// console.log(c);
// console.log(c[0]);
// console.log(c[5]);

// c.push("option-2")
// console.log(c);

// c.pop()
// c.pop()
// c.pop()
// c.pop()
// console.log(c);

// c[2] = "demo-2";
// console.log(c);


/* The length property provides an easy way to append new elements to an array without using the push() method. */



/* The join() method also joins all array elements into a string. */

{
    // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    // let arry2 = arry.join("+")
    // console.log(arry2);
    // console.log(typeof(arry2));
}
{
    // let d = [true , 3 , "demo" , "demo-1" , "option" , "option-1"]
    // let e = d.join("-+-*-+-")
    // console.log(e);
    // console.log(typeof(e));
}

/* Popping in javascript Array */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    
    // document.getElementById("demo-1").innerHTML =  fruits.pop();
    
    // console.log(fruits);
    
    // console.log(fruits.length);
}
{
    // const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    // document.getElementById("demo").innerHTML = f;

    // document.getElementById("demo-1").innerHTML = f.pop();
    // console.log(f);

    // console.log(f.length);
}

/* The pop() method returns the value that was "popped out" */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits;
    
    // document.getElementById("demo-1").innerHTML = fruits.pop();
    // document.getElementById("demo-2").innerHTML = fruits.pop();
    // document.getElementById("demo-3").innerHTML = fruits.pop();

    // console.log(fruits);
}
{
    // const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    // document.getElementById("demo").innerHTML = f;

    // document.getElementById("demo-1").innerHTML = f.pop();
    // document.getElementById("demo-2").innerHTML = f.pop();
    // document.getElementById("demo-3").innerHTML = f.pop();

    // console.log(f);
}


/* Pushing in javascript Array */

/* The push() method adds a new element to an array (at the end) */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits;
    // fruits.push("Kiwi");

    // document.getElementById("demo-1").innerHTML = fruits;
    // console.log(fruits);
}
{
    // const js = ["Animation", "Element", "Introduction", "Operator"];

    // document.getElementById("demo").innerHTML = js;
    // fruits.push("Undifined");

    // document.getElementById("demo-1").innerHTML = js;
    // console.log(js);
}


{
    // const fruits = ["Animation", "Element", "Introduction", "Operator"];

    // document.getElementById("demo").innerHTML = fruits.push("Kiwi");
    // document.getElementById("demo-1").innerHTML = fruits.length;
    // console.log(fruits);
}
{
    // const js = ["Animation", "Element", "Introduction", "Operator"];

    // document.getElementById("demo").innerHTML = js.push("Undifined");
    // document.getElementById("demo-1").innerHTML = js.length;
    // console.log(js);
}

/* Shifting Elements */

/* JavaScript Array shift() */

/* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    //  let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    //  let arry2 = arry.shift();
    //  let arry3 = arry.shift();
    //  console.log(arry2);
    //  console.log(arry3);
    //  console.log(arry);
}
{
    // let arry = ["option-1" , "option-2" , true , 0 , "option-3" , "option-4"];
    // let arry2 = arry.shift();
    // let arry3 = arry.shift();
    // let arry4 = arry.shift();
    // console.log(arry2);
    // console.log(arry3);
    // console.log(arry4);
    // console.log(arry);
}

/*  The shift() method returns the value that was "shifted out" */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // document.getElementById("demo").innerHTML = fruits.shift();
    // document.getElementById("demo-1").innerHTML = fruits;
}
{
    // const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    // console.log(city);
    // document.getElementById("demo-2").innerHTML = city.shift();
    // document.getElementById("demo-3").innerHTML = city;
}

/*  JavaScript Array unshift() */
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    //  let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
    //  arry.unshift("OneAuthor");
    //  console.log(arry);
}
{
    // const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    // city.unshift("Rajkot");
    // console.log(city);
}

/* The unshift() method returns the new array length */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.unshift("Lemon");
    // document.getElementById("demo-1").innerHTML = fruits;
}
{
    // const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    // document.getElementById("demo-2").innerHTML = city.unshift("Jamnagar");
    // document.getElementById("demo-2").innerHTML = city.unshift("Mahesana");
    // document.getElementById("demo-3").innerHTML = city;
}
/*  Changing Elements */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits[10] = "Kiwi";
    // console.log(fruits);
}
{
    // const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    // console.log(f);
    // f[7] = "Guava";
    // console.log(f);
    // f[10] = "Heirloom Tomato";
    // console.log(f);
}

/* JavaScript Array add element */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits[fruits.length] = "Kiwi";
    // document.getElementById("demo-1").innerHTML = fruits;
}
{
    // const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    // document.getElementById("demo-2").innerHTML = f;
    // f[f.length] = "Guava";
    // f[f.length] = "Heirloom Tomato";
    // document.getElementById("demo-3").innerHTML = f;
}

/* JavaScript Array delete() */

/* Array elements can be deleted using the JavaScript operator delete. */

/* Using delete leaves undefined holes in the array. */

/* Use pop() or shift() instead. */

{
        // let arry = ["option-1" , "gamit" , false , 1 , "skill" , "development"];
        // console.log(arry);
        // console.log(arry.length);
        // delete arry[4]
        // console.log(arry);
        // console.log(arry.length);
        
        // arry.length = 20;
        // console.log(arry);
        
        // arry[16] = "skillQode"
        // console.log(arry);
 }
 {
    // const array = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    // console.log(array);
    // console.log(array.length);
    // delete array[3]
    // console.log(array);
    // console.log(array.length);
    
    // array.length = 24;
    // console.log(array);
    
    // array[8] = "Guava"
    // console.log(array);
    // array[15] = "Heirloom Tomato"
    // console.log(array);
}
 
 /* Merging (Concatenating) Arrays */
 
{
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // let arry2 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"];
    // let arry3 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"];

    // let arry4 = arry1.concat(arry3 , arry2)
    // console.log(arry4);
}
{
    // let a = ["Assam", "Bihar", "Chhattisgarh", "Gujarat", "Haryana", "Jharkhand", "Kerala"];
    // let ar = [ "Maharastra", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim"];
    // let arr = ["Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal",];

    // let arry = a.concat(ar , arr)
    // console.log(arry);
}
 
 /* The concat() method does not change the existing arrays. It always returns a new array. */
 
 /* Splicing and Slicing Arrays */
 
 /* JavaScript Array splice() */


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
 
{
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.splice(3  , 3 , "reactjs" , "nextjs")
    // console.log(arry2);
    // console.log(arry1);
}
{
    // let k = ["Ambulance" , "Bus" , "Car" , "Dumper" , "Ecco" , "Fire Briged"];
    // console.log(k);
    // let l = k.splice(2 , 3, "Glanza" , "Hyundai");
    // console.log(l);
    // console.log(k);
}
 

 
 /* JavaScript Array slice() */

// slice()
// slice(start)
// slice(start, end)
 
 {
    // let arry1 = [45 , 89 , 21 , 2 , 57 , 23]
    // console.log(arry1);
    // let arry2 = arry1.slice(0 , 3)
    // console.log(arry2);
    // console.log(arry1);
 }
 {
    // let m = [23 , 35 , 46 , 98 , 123 , 179];
    // console.log(m);
    // let n = m.slice(1 , 4);
    // console.log(n);
    // console.log(m);
 }
 
 /*  Array.isArray */
 
 {
    // console.log(Array.isArray(17));
 }
 {
    // let o = [28 , 39 , 29 , 49 , 60]
    // console.log(Array.isArray(28));
 }
 
 /*  javascript Sorting Array */
 
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.sort()
    // console.log(arry2);
 }
 {
    // let p = ["Dancer" , "Gun" , "Eagle" , "Fish" , "Cow" , "Apple" , "Banana"];
    // console.log(p);
    // let q = p.sort();
    // console.log(q);
 }
 
 /*  Reversing array */
 
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.reverse();
    // console.log(arry2);
 }
 {
    // let r = ["Dancer" , "Gun" , "Apple" , "Fish" , "Cow" , "Eagle" , "Banana"];
    // console.log(r);
    // let s = r.reverse();
    // console.log(s);
 }
 
 /*  Number Sort */
 
 {
    // let arry1 = [189 , 45 , 56 , 128  , 10 , 150 ]
    // console.log(arry1);
    // let numbersorted = arry1.sort((a  , b) => a - b)
    // console.log(numbersorted);
 }
 {
    // let t = [29 , 53 , 40 , 68 , 82 , 698 , 379 , 398 , 76 , 0 , 98];
    // console.log(t);
    // let u = t.sort((a , b) => a - b)
    // console.log(u);
}

/*  javascript array map() */

{
    // const number1 = [56 , 798 , 345  ,35];
    // console.log(number1);
    // const number2 = number1.map(myFunction);
    
    // const number3  = number2.sort((a, b) => a - b)
    
    // console.log(number2);
    // console.log(number3);
    
    // function myFunction(value){
    //     return value * 2;
    // }
}
/* Array Map */

{
    //  let maparry = [20 , 56, 2 , 101 , 50];
    //  let maparry2 = maparry.map((item) => item*2);
    //  console.log(maparry);
    //  console.log(maparry2);
}


 /*  javascript Array flatMap() */
 
 {
    // let flatmap = [1 , 2 , 3 , 4];
    // let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)

    // console.log(flatmap1);
 }

 /* Javascript Array flat() */

 {
    // let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
    // let flatmap2  = flatarray.flat(3)
    // console.log(flatmap2);
 }
 
 /* javascript array filter() */
 
 {

    // let filterarry = ["tennis" , "baseball" , "cricket"  , "khokho" , "vollyball" , "chess"]
    // let filterarry2  = filterarry.filter((word)  => word.length < 10)
    // console.log(filterarry2);

    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3);
    
}
 

/*  javascript array fill method */

{
    // let fillarray  = [46 , 89 , 101 , 122 , 45]
    // console.log(fillarray);
    // let fillarray2 = fillarray.fill("Okay" , 2)
    // console.log(fillarray2);
}
    
/* javascript array copywithin() method */

// copyWithin(target, start)
// copyWithin(target, start, end)
 
 {
    //  const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
    //  console.log(fruits);
    //  const newcopy = fruits.copyWithin(1 , 3);
    //  console.log(newcopy);

    //  console.log([1, 2, 3, 4, 5 , 6].copyWithin(0, 3));

    // console.log([1, 2, 3, 4, 5 , 6  , 7].copyWithin(2, 4 , 5));

    // console.log([7,6,5,4,3,2,1].copyWithin(2, 3));
    // [1, 2, 3, 3, 4]
}
{
    // const copywithin = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j"];
    //                 //   0     1     2     3     4     5      6    7     8     9
    // console.log(copywithin);
    // const newcopy = copywithin.copyWithin(2 , 5);
    // console.log(newcopy); // [a  b  f  g  h  i  j  h  i  j];

    // const newcopy1 = copywithin.copyWithin(4 , 1 ,2);
    // console.log(copywithin); // [a  b  c  d  b  c  g  h  i  j]
}
 
 /* javascript valueof() method */
 
 {
    // let arry = [1,2,3,4,5,6,7,8,9]
    // console.log(arry.valueOf());
 }
 
 /*  JavaScript Multidimensional Array */
 
 /* A multidimensional array is an array that contains another array. */
 
 {
     // multidimensional array
    //  const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
    //  console.log(data);
 }
 
 /* Access Elements of an Array */
 
 {
    // const data = [[1, 2, 3], [1, 6, 4], [4, 5, 6]];
    // let data1 = data[1][1];
    // console.log(data1);
 }
 
 
 
 
 /* Add an Element to a Multidimensional Array */
 
 {
     // Adding Element to the Outer Array
 
    //  let studentsData = [['Jack', 24], ['Sara', 23]];
    //  studentsData.push(['Peter', 24]);

    //  let data = studentsData[1][1]
 
    //  console.log(studentsData);
    //  console.log(data);
 }
 
 {
     // Adding Element to the Inner Array
     {
         // using index notation
         let studentsData = [['Jack', 24], ['Sara', 23],];
         studentsData[1][2] = 'hello';
     
         console.log(studentsData);
     }
     {
         // using push()
         let studentsData = [['Jack', 24], ['Sara', 23],];
         studentsData[1].push('hello');
 
         console.log(studentsData);
     }
     {
         // the Array's splice() method to add an element at a specified index.
 
         let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // adding element at 1 index
         studentsData.splice(1 , ["peter"  , 58]);
 
         console.log(studentsData);
     }
 
     /*  Remove an Element from a Multidimensional Array */
 
     {
         // remove the array element from outer array
         let studentsData = [['Jack', 24], ['Sara', 23],];
         studentsData.pop();
 
         console.log(studentsData);
     }
     {
        //  // remove the element from the inner array
         let studentsData = [['Jack', 24], ['Sara', 23]];
         studentsData[1].pop();
 
         console.log(studentsData); // [["Jack", 24], ["Sara"]]
     }
     {
         // the splice() method to remove an element at a specified index.
         let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // removing 1 index array item
         studentsData.splice(0,1);
         console.log(studentsData);
     }
 }