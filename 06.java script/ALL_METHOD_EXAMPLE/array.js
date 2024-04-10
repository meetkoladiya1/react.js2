/* Array length properties */
{
    let c = [true , 3 , "demo" , "demo-1" , "option" , "option-1"]
    console.log(c);
    console.log(c[0]);
    console.log(c[5]);
    
    c.push("option-2")
    console.log(c);
    
    c.pop()
    c.pop()
    c.pop()
    c.pop()
    console.log(c);
    
    c[2] = "demo-2";
    console.log(c);
}
{
    let len = [1 ,2 ,3 ,4 ,5];
    console.log(len);
    console.log(len.length);

    len.push("option");
    console.log(len);
    console.log(len.length);
}
{
    let leng = ["car" , "bike" , "car" , "bike" , "car" , "bike"];
    console.log(leng.length);
}


/* Array join() Method */
{
    let d = [true , 3 , "demo" , "demo-1" , "option" , "option-1"]
    let e = d.join("-+-*-+-")
    console.log(e);
    console.log(typeof(e));
}
{
    let joined = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
    let joined2 = joined.join("+-+-+-+-+");
    console.log(joined2);
    console.log(typeof(joined2));
}
{
    let joy = ["HTML", "CSS", "BOOSTRAP", "TAILWIND", "SASS", "JAVASCIPT"];
    let joy2 = joy.join("/**/**/**/**/");
    console.log(joy2);
    console.log(typeof(joy2));
}


/* Array pop() Method */
{
    const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    document.getElementById("demo").innerHTML = f;

    document.getElementById("demo-1").innerHTML = f.pop();
    console.log(f);

    console.log(f.length);
}


/* Array pop() Method */
{
    const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    document.getElementById("demo").innerHTML = f;

    document.getElementById("demo-1").innerHTML = f.pop();
    document.getElementById("demo-2").innerHTML = f.pop();
    document.getElementById("demo-3").innerHTML = f.pop();

    console.log(f);
}

/* Array push() */
{
    const fruits = ["Animation", "Element", "Introduction", "Operator"];

    document.getElementById("demo").innerHTML = fruits.push("Kiwi");
    document.getElementById("demo-1").innerHTML = fruits.length;
    console.log(fruits);
}
{
    const js = ["Animation", "Element", "Introduction", "Operator"];

    document.getElementById("demo").innerHTML = js.push("Undifined");
    document.getElementById("demo-1").innerHTML = js.length;
    console.log(js);
}


/* Array shift() remove the first element*/
{
    let arry = ["option-1" , "option-2" , true , 0 , "option-3" , "option-4"];
    let arry2 = arry.shift();
    let arry3 = arry.shift();
    let arry4 = arry.shift();
    console.log(arry2);
    console.log(arry3);
    console.log(arry4);
    console.log(arry);
}


/* Array shift() return the value */
{
    const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    console.log(city);
    document.getElementById("demo-2").innerHTML = city.shift();
    document.getElementById("demo-3").innerHTML = city;
}

/* Array unshift add a new element */
{
    const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    city.unshift("Rajkot");
    console.log(city);
}

/* Array unshift return the new element */
{
    const city = ["Surat", "Ahemdabad", "Vadodara", "Amreli"];
    document.getElementById("demo-2").innerHTML = city.unshift("Jamnagar");
    document.getElementById("demo-2").innerHTML = city.unshift("Mahesana");
    document.getElementById("demo-3").innerHTML = city;
}

/* Changing Element */
{
    const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    console.log(f);
    f[7] = "Guava";
    console.log(f);
    f[10] = "Heirloom Tomato";
    console.log(f);
}

/* Array add Element */
{
    const f = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    document.getElementById("demo-2").innerHTML = f;
    f[f.length] = "Guava";
    f[f.length] = "Heirloom Tomato";
    document.getElementById("demo-3").innerHTML = f;
}

/* Array delete Element (Use pop() or shift()) */
{
    const array = ["Apple" , "Banana" , "Coconut" , "Dragonfruit" , "Enterprise Apple" , "Finger Lime"]
    console.log(array);
    console.log(array.length);
    delete array[3]
    console.log(array);
    console.log(array.length);
    
    array.length = 24;
    console.log(array);
    
    array[8] = "Guava"
    console.log(array);
    array[15] = "Heirloom Tomato"
    console.log(array);
}

/* Array Merging (Concatenating) */
{
    let a = ["Assam", "Bihar", "Chhattisgarh", "Gujarat", "Haryana", "Jharkhand", "Kerala"];
    let ar = [ "Maharastra", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim"];
    let arr = ["Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal",];

    let arry = a.concat(ar , arr)
    console.log(arry);
}


/* Array splice() */
{
    let k = ["Ambulance" , "Bus" , "Car" , "Dumper" , "Ecco" , "Fire Briged"];
    console.log(k);
    let l = k.splice(2 , 3, "Glanza" , "Hyundai");
    console.log(l);
    console.log(k);
}

/* Array slice() */
{
    let m = [23 , 35 , 46 , 98 , 123 , 179];
    console.log(m);
    let n = m.slice(1 , 4);
    console.log(n);
    console.log(m);
 }


 /*  Array.isArray */
 {
    let o = [28 , 39 , 29 , 49 , 60]
    console.log(Array.isArray(28));
 }

/*  javascript Sorting Array */
{
   let p = ["Dancer" , "Gun" , "Eagle" , "Fish" , "Cow" , "Apple" , "Banana"];
   console.log(p);
   let q = p.sort();
   console.log(q);
}

 /* Array Reversing */
{
   let r = ["Dancer" , "Gun" , "Apple" , "Fish" , "Cow" , "Eagle" , "Banana"];
   console.log(r);
   let s = r.reverse();
   console.log(s);
}

/*Array Number sort() */
{
    let t = [29 , 53 , 40 , 68 , 82 , 698 , 379 , 398 , 76 , 0 , 98];
    console.log(t);
    let u = t.sort((a , b) => a - b)
    console.log(u);
}

/* Array map()*/
{
     let maparry = [20 , 56, 2 , 101 , 50];
     let maparry2 = maparry.map((item) => item*2);
     console.log(maparry);
     console.log(maparry2);
}

/* Array flatMap() */
 
{
    let flatmap = [1 , 2 , 3 , 4];
    let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)
    console.log(flatmap1);
}

/* Javascript Array flat() */
{
   let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
   let flatmap2  = flatarray.flat(3)
   console.log(flatmap2);
}

/* javascript array filter() */
 
{
    let filterarry = ["tennis" , "baseball" , "cricket"  , "khokho" , "vollyball" , "chess"]
    let filterarry2  = filterarry.filter((word)  => word.length < 10)
    console.log(filterarry2);

    let filterarry3 = filterarry2.sort()
    console.log(filterarry3);
}
 

/*  javascript array fill method */

{
    let fillarray  = [46 , 89 , 101 , 122 , 45]
    console.log(fillarray);
    let fillarray2 = fillarray.fill("Okay" , 2)
    console.log(fillarray2);
}

/* Array copywithin() */
{
    const copywithin = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j"];
                    //   0     1     2     3     4     5      6    7     8     9
    console.log(copywithin);
    const newcopy = copywithin.copyWithin(2 , 5);
    console.log(newcopy); // [a  b  f  g  h  i  j  h  i  j];

    const newcopy1 = copywithin.copyWithin(4 , 1 ,2);
    console.log(copywithin); // [a  b  c  d  b  c  g  h  i  j]
}

/* javascript valueof() method */
 
{
    let arry = [1,2,3,4,5,6,7,8,9]
    console.log(arry.valueOf());
}

 /*  JavaScript Multidimensional Array */
{
    // multidimensional array
    const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
    console.log(data);
}

/* Access Elements of an Array */
 
{
    const data = [[1, 2, 3], [1, 6, 4], [4, 5, 6]];
    let data1 = data[1][1];
    console.log(data1);
}

/*  Adding Element to the Outer Array */
 
{
    let studentsData = [['Jack', 24], ['Sara', 23]];
    studentsData.push(['Peter', 24]);

    let data = studentsData[1][1]

    console.log(studentsData);
    console.log(data);
}

/* Adding Element to the Inner Array */
{
    let studentsData = [['Jack', 24], ['Sara', 23],];
    studentsData[1][2] = 'hello';

    console.log(studentsData);
}