{
    var box = "LiveScript"
    console.log(box)

    var Names = "food"
    var names = "Javascript"
    console.log(Names)

    var number1 = 15
    var number2 = 2
    console.log(number1 ** number2)

    var box1 = "toys"
    var box2 = "cloths"
    var box3 = 45

    console.log(box1)
    console.log(box2)
    console.log(box3)
}

/*New Html Element Add In Though Javascript *********/
{
    var newelement = document.createElement("h1")
    newelement.textContent = "hello world"
    document.body.appendChild(newelement)

    var newelement = document.createElement("marquee", Option)
    newelement.textContent = "Aniruddh Godhani"
    document.body.appendChild(newelement)

    var newelement = document.createElement("pre")
    newelement.textContent = `how are you!
     hi./kzndcb`
    document.body.appendChild(newelement)
}

// JavaScript is case-sensitive. So y and Y are different variables
{
    let y = "hi"
    let Y = 5

    console.log(y)
    console.log(Y)
}

{
    let A = "Anni"
    let a = 22

    console.log(A)
    console.log(a)
}

{
    let K = "Kartik"
    let k = 24

    console.log(K)
    console.log(k)
}

/* Declaration let() */

/* Block-Scope Variables */
{
    let box1 = "Truck"
    box1 = "Bus"
    console.log(box1)
}

{
    let number5 = 30
    console.log(number5)
}

{
    let number4 = 40
    console.log(number4)
}

{
    let number3 = 60
    console.log(number3)
}

/* Declaration const() */
{
    const emma1 = "this"
    console.log(emma1)
}

{
    const emma2 = "that"
    console.log(emma2)
}

/* string with quotes */
{
    let x = "wor'ld"
    let y = 'wor"ld'
    let z = "wor\"ld"
    let zz = 'wor\'ld'
    let zzz = 'hello \n world'
    let zzzz = "he\tllo"
    console.log(zzzz)
    document.write(x + "<br>" + y + "<br>" + z)
    console.log(y + "<br>")
}