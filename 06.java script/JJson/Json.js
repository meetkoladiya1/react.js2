// let json = [
//     {"Id": 1  , "Bikes_Name": "OLA S1 X"                  , "Price": 80000   , "Model": 2024},
//     {"Id": 2  , "Bikes_Name": "Ampere NXG"                , "Price": 130000  , "Model": 2024},
//     {"Id": 3  , "Bikes_Name": "Royal Enfield Bullet"      , "Price": 173000  , "Model": 2024},
//     {"Id": 4  , "Bikes_Name": "Hero Xtreme 125R"          , "Price": 96000   , "Model": 2024},
//     {"Id": 5  , "Bikes_Name": "Revolt RV400 BRZ"          , "Price": 137000  , "Model": 2024},
//     {"Id": 6  , "Bikes_Name": "Honda NX500"               , "Price": 590000  , "Model": 2024},
//     {"Id": 7  , "Bikes_Name": "Husqvarna Svartpilen 401"  , "Price": 292000  , "Model": 2024},
//     {"Id": 8  , "Bikes_Name": "Royal Enfield Shotgun 650" , "Price": 359000  , "Model": 2024},
//     {"Id": 9  , "Bikes_Name": "Jawa 350"                  , "Price": 215000  , "Model": 2024},
//     {"Id": 10 , "Bikes_Name": "SVITCH CSR 762"            , "Price": 190000  , "Model": 2024},
//     {"Id": 11 , "Bikes_Name": "Hero Splendor Plus"        , "Price": 76000   , "Model": 2024},
//     {"Id": 12 , "Bikes_Name": "Yamaha R15 V4"             , "Price": 195000  , "Model": 2024}
// ]
// console.log(json);


// let Json1 = [
//     {"Id": 1  , "Tour": "Manali"    , "Cost": 40000},
//     {"Id": 2  , "Tour": "Shimla"    , "Cost": 45000},
//     {"Id": 3  , "Tour": "Abu"       , "Cost": 35000},
//     {"Id": 4  , "Tour": "Kashmir"   , "Cost": 50000},
//     {"Id": 5  , "Tour": "Ujjain"    , "Cost": 47000},
//     {"Id": 6  , "Tour": "Kedarnath" , "Cost": 52000},
//     {"Id": 7  , "Tour": "Kashi"     , "Cost": 38000},
//     {"Id": 8  , "Tour": "Porbandar" , "Cost": 20000},
//     {"Id": 9  , "Tour": "Somnath"   , "Cost": 25000},
//     {"Id": 10 , "Tour": "Dwarka"    , "Cost": 18000},
//     {"Id": 11 , "Tour": "Ayodhya"   , "Cost": 20000},
//     {"Id": 12 , "Tour": "Palitana"  , "Cost": 25000},
// ]
// console.log(Json1);




fetch('http://localhost:3000/comments')
.then(response => response.json())
.then(json => console.log(json));