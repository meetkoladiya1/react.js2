// ----->>>>> alert() prompt() confirm() <<<<<------
// alert()

{
    alert("Hello JavaScript");
    window.alert("This is JavaScript");
}
{
    alert("Hello User");
}
{
    window.alert("This is alert box");
}

// prompt()
{
    const Message = prompt("Enter Your Name");
    document.getElementById("prompt").innerHTML = Message;
}
{
    let message = prompt("Enter Your Age");
    document.getElementsByClassName("demo-1").innerHTML = message; 
}
{
    const mEssage = prompt("Enter Your Birthday Date");
    document.getElementsByTagName("div").innerHTML = mEssage; 
}

// confirm()
{
    let Confirm = confirm("This is Javascript?");
    document.write(Confirm);
}
{
    const cOnfirm = confirm("You are Male.");
    document.getElementById("confirm").innerHTML = cOnfirm;
}
{
    const confirM = confirm("This is Confirmation Code");
    document.getElementsByClassName("demo-2").innerHTML = confirM;
}


// ----->>>>> map() <<<<<------
// nem Map()
{
    const map = new Map([
        ["option-1", 28],
        ["option-2", 98],
    ])
    console.log(map);
    console.log(map.size);
}
{
    const mAp = new Map([
        ["age", 18],
        ["age", 19],
        ["age", 20],
        ["age", 21],
    ])
    console.log(mAp);
}
{
    let maP = new Map([
        ["name", "rohit"],
        ["age", 20],
        ["city", "Surat"],
        ["job", "Web Developer"],
    ])
    console.log(maP);
    console.log(maP.size);
}

// set()
{
    const Set = new Map();
    Set.set("option-1" , "ice cream");
    Set.set("option-2" , "candle");
    Set.set("option-3" , "candy")

    console.log(Set);
}
{
    const sEt = new Map();
    sEt.set("Human")
    sEt.set("Birds")
    sEt.set("Animals")
    sEt.set("Insects")

    console.log(sEt);
}
{
    const set = new Map();
    set.set("name", "Mohit");
    set.set("age", 23);
    set.set("city", "Mumbai");
    set.set("country", "India");
    set.set("job", "Software Engineer");
    set.set("phone", "9876543210");
    set.set("email", "<EMAIL>");
    console.log(set);
}

// get()
{
    const get = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    console.log(get);
    console.log(get.get("item-1"));
}
{
    const Get = new Map([
        ["item-1" , "Sparrow"],
        ["item-2" , "Parrot"],
        ["item-3" , "Peacock"]
    ]);
    Get.set("item-1" , "Parrot");

    console.log(Get);
    console.log(Get.get("item-1"));
}
{
    const GeT = new Map([
        ["item-1" , "Fz-x"],
        ["item-2" , "Fz-s"],
        ["item-3" , "Suzuki"]
    ]);

    console.log(GeT);
    console.log(GeT.get("item-2"));
}

// delete()
{
    const newmap = new Map([
    ["item-1" , "car"],
    ["item-2" , "bus"],
    ["item-3" , "truck"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-1"));
   console.log(newmap);
}
{
        const newmap = new Map([
            ["item-1" , "Sparrow"],
            ["item-2" , "Parrot"],
            ["item-3" , "Peacock"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-3"));
   console.log(newmap);
}
{
        const newmap = new Map([
            ["item-1" , "Fz-x"],
            ["item-2" , "Fz-s"],
            ["item-3" , "Suzuki"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-2"));
   console.log(newmap);
}

// has()
{
    const Has = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "bike"],
        ["item-4" , "truck"]
    ])
    
    console.log(Has.has("item-3"));
}

{
    const HAS = new Map([
        ["item-1" , "cow"],
        ["item-2" , "buffalo"],
        ["item-3" , "goat"],
        ["item-4" , "ship"]
    ])
    
    HAS.delete("item-2");
    console.log(HAS);

    const hasss = HAS.has("item-3");
    console.log(hasss);

    console.log(HAS.size);
}
{
    let HaS = new Map([
        ["item-1" , "cat"],
        ["item-2" , "dog"],
        ["item-3" , "monkey"],
        ["item-4" , "fish"]
    ])
    HaS.delete("item-1");
    console.log(HaS);

    let hAs = HaS.has("item-1");
    console.log(hAs);
}

// entries()
{
    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    let max = "";

    for(const x of newmap.entries()){
        max += x + "<br>" ;
    }

    document.getElementById("element").innerHTML = max;
}




// ----->>>>> set() <<<<<------
// new Set()
{
    const a = new Set([35 ,56 ,766 , 85]);
    console.log(a);
    console.log(a.size);
}
{
    let M = new Set([
        [24],
        [54],
        [65],
        [55],
        [94]
    ]);
    console.log(M);
    console.log(M.size);
}
{
    const L = new Set(["apple" , "banana" , "orange" , "mango" , "lichi" , "pineapple" , "guava"]);
    console.log(L);
    console.log(L.size);
}

// add()
{
    let Birds = new Set();

    Birds.add("Sparrow");
    Birds.add("Crow");
    Birds.add("Peacock");

    console.log(Birds);
}
{
    const Fruits = new Set();

    let a = "apple";
    let b = "banana";
    let c = "orange";
    let d = "mango";
    let e = "lichi";
    let f = "pineapple";
    let g = "guava";

    Fruits.add(a);
    Fruits.add(b);
    Fruits.add(c);
    Fruits.add(d);
    Fruits.add(e);
    Fruits.add(f);
    Fruits.add(g);

    console.log(Fruits);
    console.log(Fruits.size);
}
{
    const Animal = new Set(["Lion" , "Tiger"]);
    console.log(Animal);

    Animal.add("Elephant");
    Animal.add("Deer");
    Animal.add("Zebra");

    console.log(Animal);
}

// delete()
{
    const Car = new Set(["BMW" , "KIA" , "SWIFT"]);
    Car.delete("SWIFT");

    console.log(Car);
}
{
    const Vagetable = new Set(["Potato" , "Tomato" , "Ladyfinger" , "Carret"]);
    Vagetable.delete("Carret");
    console.log(Vagetable);
}
{
    const Animal = new Set(["Zerraf" , "Zebra" , "Lion" , "Tiger"]);
    Animal.delete("Zebra");
    console.log(Animal);
}

// has()
{
    const HAS = new Set(["Vagetable" , "Animal" , "Car" , "Fruits"]);
    let confirmation = HAS.has("Animal");
    console.log(confirmation);
}
{
    const Animal = new Set(["Zerraf", "Zebra", "Lion", "Tiger"]);
    let confirm = Animal.has("Panda");
    console.log(confirm);
}
{
    const Fruits = new Set(["apple" , "banana" , "orange" , "mango" , "lichi" , "pineapple" , "guava"]);
    let Fruit = Fruits.has("Coconut");
    console.log(Fruit);
    let F = Fruits.has("pineapple");
    console.log(F);
}

// Values()
{
     const Coldeinks = new Set(["Maza" , "Mango" , "Coca Cola"]);

    console.log(Coldeinks.values());
}
{
    const Alphabets = new Set(["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"]);
    let A = Alphabets.values();
  
    console.log(A);
}
{
    const Variables = new Set(["var" , "let" , "const"]);
    console.log(Variables.values());
    let Var = Variables.values();

    console.log(Var);
}