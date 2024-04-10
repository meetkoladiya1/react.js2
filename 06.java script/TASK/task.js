// ---------->>>>>>>>>> 1 <<<<<<<<<<----------
{
    function aler() {
        alert ("This is an alert box");  
     }  
}

// ---------->>>>>>>>>> 2 <<<<<<<<<<----------
{
    function confirmation() {  
        var result;  
        var r = confirm("Select an Action!");  
        if (r == true) {  
            result = "You have selected Okay!";  
        } else {  
            result = "You have selected Cancelled!";  
        }  
        document.getElementById("confirm").innerHTML = result;  
    }  
}

// ---------->>>>>>>>>> 3 <<<<<<<<<<----------
{
    function promp() {  
        var name = prompt("Enter your name");  
        document.getElementById("prompt").innerHTML = name;  
    }
}

// ---------->>>>>>>>>> 5 <<<<<<<<<<----------
{
    function mouse(){
        alert("This is an alert box by keypress")
    }
}




// ---------->>>>>>>>>> 13 <<<<<<<<<<----------
{
        let date = new Date()
        console.log(date);
}

// ---------->>>>>>>>>> 14 <<<<<<<<<<----------
{
    let array = ["1", "2", "3", "4", "5"]
    document.getElementById("demo").innerHTML = array.reverse()
}

// ---------->>>>>>>>>> 15 <<<<<<<<<<----------
{
    let array = ["Assam", "Bihar", "Chhattisgarh", "Gujarat", "Haryana", "Jharkhand", "Kerala"];
    let array1 = [ "Maharastra", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim"];
    let array2 = ["Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal",];

    let array3 = array.concat(array1 , array2)
    console.log(array3);
}

// ---------->>>>>>>>>> 16 <<<<<<<<<<----------
{
    function reverse(str){ 
        const string = str.split("").reverse().join(""); 
        console.log(string); 
    }
    reverse("Hello JavaScript!");
}

// ---------->>>>>>>>>> 17 <<<<<<<<<<----------
{

}

// ---------->>>>>>>>>> 18 <<<<<<<<<<----------
{
    let age = 18;
    if(age >= 19){
        console.log("You Are Valid");
    }
    else{
        console.log("You Are Not Valid");
    }
}

// ---------->>>>>>>>>> 19 <<<<<<<<<<----------
{
    // let array = 
}

// ---------->>>>>>>>>> 20 <<<<<<<<<<----------
{

}

// ---------->>>>>>>>>> 21 <<<<<<<<<<----------
{
    const claas = document.getElementsByClassName('classname')
    console.log(claas);
}

// ---------->>>>>>>>>> 22 <<<<<<<<<<----------
{
    const tags = document.getElementsByTagName('p')
    console.log(tags);
}

// ---------->>>>>>>>>> 23 <<<<<<<<<<----------
{
    const button = document.createElement('button');
    button.innerHTML = "Back";
    document.body.appendChild(button);

    const forward = document.createElement('button');
    forward.innerHTML = "Forward";
    document.body.appendChild(forward);
}

// ---------->>>>>>>>>> 24 <<<<<<<<<<----------
{
    const button = document.createElement('button');
    button.innerHTML = "Back";
    document.body.appendChild(button);
}

// ---------->>>>>>>>>> 25 <<<<<<<<<<----------
{
    const forward = document.createElement('button');
    forward.innerHTML = "Forward";
    document.body.appendChild(forward);
}

// ---------->>>>>>>>>> 26 <<<<<<<<<<----------
{
    const forward = document.createElement('button');
    forward.innerHTML = "Forward";
    document.body.appendChild(forward)
}

// ---------->>>>>>>>>> 27 <<<<<<<<<<----------
{
    
}

// ---------->>>>>>>>>> 30 <<<<<<<<<<----------
{
    var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// ---------->>>>>>>>>> 31 <<<<<<<<<<----------
{
    const cb = document.querySelector('#accept');
        console.log(cb.checked); // false
}

// ---------->>>>>>>>>> 32 <<<<<<<<<<----------
{
    
}