// document object model in javascript

// what is document object model(dom)
// the document object model(dom) is application programing interface (apl) for manipulating html documents.

// the do represent an html document as a tree of nodes. the dom provides functions that allow you to add,  remove, and modify parts of the document  effectively.

// note that dom is cross-plateform and languagre-indepentent  way of manipilating html and xml document.

// a documrnt as a hirearchy of nodes.

// the dom represent an html documnets as a hierarchy of nodes. consider the following html documnet:

{/* <Html>
    <head>
        <title> javascript dom</title>
    </head>
    <body>
        <p> hello dom!</p>
    </body>
</Html> */}

// in this dom TreeWalker, the documnet is the root node. the root node has one child node which is the <html> element. the<html> element is called the documnet element.

// each documnet can have only one documnet elemnet. in an html documnet the documnet element is the <html> elemnet. each markup can be represented by a node in hte tree.

//  slecting elemnets

//  getelementbyid()- select an elemnet by id.
// getelementsbytagename()- select element by a tag name.
//  getelementsby classname()-select elemnet by one or more calss name.
// qweryselector()-select element by css selector.

{
    // document.getElementById('pera1').innerHTML="hello dom!"
    // // document.getElementById('box-1').innerHTML="this is div tag"
    // // const model=document.getElementsByClassName('box')
    // // console.log(model);
    // const element=document.getElementsByTagName('h1');
    // function addtext(){
    //     for(let i=0; i < element.length; i++){
    //         element[i].innerHTML="hello world!"
    //         element[i].style.color="Yellow"
    //         element[i].style.background="green"
    //         element[i].style.backgroundColor="red"
    //     }
    // }
    // addtext();
}

{
//    const NewElement = document.createElement("marquee");
//    NewElement.textContent = "This is Marquee Tag"
//    document.body.appendChild(NewElement)
}

// query selector
{
    // document.querySelector('.box').style.color="red";
    // document.querySelector('.box').style.color="blue";
    
}

//queryselectorall

{
    // const elemnets = document.querySelectorAll("#sun p");
    // console.log(elemnets);

    // function changeColorss(){
    //     for(let i =0;  i < elemnets.length; i++){
    //         elemnets[i].style.color = "red";
    //     }
    // }
}



// {
//    const NewElement = document.createElement("div");
//    NewElement.textContent = "Hello World";
//    NewElement.classList = "Hello JavaScript!";
//    document.body.appendChild(NewElement)
// }


// {
//     const NewElement = document.createElement("div");
//     NewElement.textContent = "Hello World";
//     NewElement.classList = "Hello JavaScript!";
//     NewElement.classList.add("MEET")
//     document.body.appendChild(NewElement)
// }


//     const NewElement = document.createElement("marquee");
//     NewElement.textContent = "Hello Guys, What Are You Doing ?";
//     document.body.appendChild(NewElement)














    
//javascript has attribute

{
    // const element = document.querySelector("p");
    // function check() {
    //   if (element.hasAttribute("id")) {
    //     alert("Yes 'id' attribute exist!");
    //   }
    //   else {
    //     alert("No 'id' attribute doesn't exist!");
    //   }
    // }
}


//javascript get attribute

{    
    // const Newelement  = document.querySelector('input')
    // function check(){
    //     const AttriName = Newelement.getAttribute('value')
    //     console.log(AttriName);
    // }
}

// javascript set attribute

{
    // const element = document.getElementById("demo");

    // function checkAttr() {
    //   alert(element.hasAttribute("name"));
    // }
    // function addAttr() {
    //   element.setAttribute("type" , "text");
    // }
}

// javascript remove attribute

// {
//     const element = document.getElementById("demo");
//     function checkAttr(){
//        alert(element.hasAttribute('class'))
//     }
//     function remove() {
//       element.removeAttribute("class");
//       element.removeAttribute("name");
//       element.removeAttribute("id");
//     }
//     function addAttr(){
//        console.log(element.getAttribute("class"))
//     } 
// }


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // document.onload

    function Function1(){
        const NewElement = document.createElement('marquee');
        NewElement.textContent="This Is Marquee Tag";
        document.body.appendChild(NewElement);

        document.querySelector('body').style.background = "orange";
    }
}

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
//     document.getElementById('demo').innerHTML = document.anchors.length
// }
// {
//     document.getElementById("demo2").innerHTML =
// "Number of anchors are: " + document.anchors.length;


/*

Description
The anchors property is deprecated. Do NOT use it.

The anchors property only returns those <a> elements with a name attribute.

The name attribute of the <a> element is not supported in HTML5.

*/

}

{
    // document.getElementById("demo").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.head;
}

{
    // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}

{
    window.onload = () => {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
}

{
    window.onload = () => {
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Meet");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
    };
}