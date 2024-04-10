function loadData(){
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
            document.getElementById("demo").innerHTML = this.response;
        }
    }


    xHttp.open("GET" , './text.txt' , true);
    xHttp.send();

    console.log("End of Ajax!");
}



/* Javascript async and await keyword */

/* Syntax */

// async function Data(parameter1 , parameter2){

// }


async function f(){
    console.log("Async Action");
    return Promise.resolve(1);
}


/* Promise */

// let Promise =  new Promise(function(resolve, reject){
//     let Promises = new Promise(function(resolve , reject){
//         reject("Promise Resolve")
//         console.log(result);
//     })
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(error);
// })





/* Promise with Async And Await Method */

let Promise1 = new Promise(function(resolve, reject ){
    setTimeout(
        function(){
        resolve("Promise Resolve 1");
    }, 3000
    );    
});

let Promise2 = new Promise(function(resolve, reject ){
    setTimeout(
        function(){
        resolve("Promise Resolve 2");
    }, 5000
    );    
});




/* Async function */

async function asynfun(){
    let result1 = await Promise1;
    let result2 = await Promise2;
    console.log(result1);
    console.log(result2);
    console.log("Hello");
}

// calling function

asynfun()