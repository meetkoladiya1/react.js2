// /* ---------- 1 ----------*/
// {
//     var a = 1 + 2 * 3

//     console.log(a);
// }

// {
//     var b = 1 + "2" *3

//     console.log(b);
// }

// {
//     var c = "1" + "2" *3

//     console.log(c);
// }

// /* ---------- 2 ----------*/

// {
//     var d = 1 + 2 ** 3 / 2 - 1
//     console.log(d);
// }

// {
//     var e = 9 / 2 * 3
//     console.log(e);
// }


// {
//     var f = 9 / (2 * 3)
//     console.log(f);
// }


// /* ---------- 3 ----------*/

 
// {
//     var a = 1; a++;
//     alert(`${a}`)

// }
// {
//     var b =1
//     alert(`${++b}`)
// }
// {
//     var c = 1
//     alert (`${c++}`)
//     console.log(c)
//     console.log(typeof(c))
// }


// /* ---------- 4 ----------*/


// {
//     let g = 1 == `01`
//     console.log(g)
// }
// {
//     let h = 1 === `01`
//     console.log(h)
// }
// {
//     let i = "1" == `01`
//     console.log(i)
// }
// {
//     let j = "1" == "01"
//     console.log(j)
// }
// {
//     let k = "1" == 0 + 1
//     console.log(k)
// }
// {
//     let l = "1" == 0 + "1"
//     console.log(l)
// }
// {
//     let m = "1" == 0 * 1
//     console.log(m)
// }
// {
//     let n = "1" == 0 * "1"
//     console.log(n)
// }


// /* ---------- 5 ----------*/

// {
//     var o = true && false
//     console.log(o)
// }

// {
//     var p = true && false || true
//     console.log(p)
// }

// {
//     var q = true && false || !true
//     console.log(q)
// }

// {
//     var r = !(true && false)
//     console.log(r)
// }


// /* ---------- 6 ----------*/


// {
//     var string1 = "123";
//     var intvalue = 123;
//     alert( string1 + intvalue );
//     alert(`${string1} + ${intvalue}`);
// }


/* ---------- 7 ----------*/


{
    let mark = 37;
    let marks = (mark < 35) ? "Fail" : "Pass";
    document.write(marks);
}


/* ---------- 8 ----------*/


{
    var v = 5
    var newelement = document.createElement("p");
    newelement.textContent = (v === "5");
    document.body.appendChild(newelement);
}


/* ---------- 9 ----------*/


function height()
{
var height = 123.56;
var type = (height>=190) ? "tall" : "short";
return type;
}

var w= height();
document.write(w)


/* ---------- 10 ----------*/


{
    let x = "1";
    let y =5;
    console.log(typeof(x));
    console.log(typeof(y));
}