import './App.css'
import List_Rendering from './Conditional/List_Rendering'
// const Quotes = [
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, totam.",
// ]


const Product = [
  {
    id: 1,
    name: "iphone",
    price:80000,
    disc:"Best IOS Device",
    discount:"10%",
    color:"red",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 2,
    name: "iphone14",
    price:65000,
    disc:"Best IOS Device",
    discount:"14%",
    color:"blue",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 3,
    name: "iphone15",
    price:85000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"gray",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    name: "iphone15pro",
    price:90000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"black",
    catagories:"mobile",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt2dFhELYfIV1n2xiQygXdH5K8wbUnzE0lOgjmRygA-PQYKXwQCTN1_iyqqxwlfEuDHk&usqp=CAU"
  },
  {
    id: 5,
    name: "mi Smart Watch",
    price:999,
    disc:"Best IOS Device",
    discount:"5%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 6,
    name: "boat lunar orb",
    price:1899,
    disc:"Best IOS Device",
    discount:"5%",
    color:"silver",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61zlQHkE2ML._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 7,
    name: "Sens Edyson",
    price:1398,
    disc:"Best IOS Device",
    discount:"12%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    name: "noise",
    price:5000,
    disc:"Best Watch",
    discount:"5%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/71ZNB1qCdXL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 9,
    name: "Sport",
    price:363,
    disc:"Best Shoes",
    color:"white",
    catagories:"Shoes",
    img:"https://rukminim1.flixcart.com/image/300/300/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg"
  },
  {
    id: 10,
    name: "Fashion",
    price:555,
    disc:"Best Shoes",
    color:"black",
    catagories:"Shoes",
    img:"https://5.imimg.com/data5/MT/MB/EO/SELLER-14290347/men-555-black-fashion-lace-up-shoes-500x500.jpg"
  },
  {
    id: 11,
    name: "Fashion",
    price:7725,
    disc:"Best Shoes",
    color:"gray",
    catagories:"Shoes",
    img:"https://m.media-amazon.com/images/I/81plV+BngxL._AC_UY1000_.jpg"
  },
  {
    id: 12,
    name: "Nike",
    price:14195,
    disc:"Best Shoes",
    color:"black&blue",
    catagories:"Shoes",
    img:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png"
  },
]



function App() {
  const FilterData = Product.filter((data) => data.catagories === "watch");

  console.log(FilterData);
  const Render_List = FilterData.map(
    (item) => 
    <div className='row'>
      <div className="col-4">
      <div className="border shadow-xl shadow-black  border-solid border-black p-3 m-3 bg-orange-600">
        <div className="h-56 w-48">
        <img className='object-cover' src={item.img} alt="" />
        </div>
        <br /><hr /><br />
        <div className='text-xl font-bold text-center bg-orange-900'>
          <h1>{item.name}</h1>
          <span>{item.price}</span><br />
          <button className='bg-orange-400 mb-2 h-12 w-36 rounded-3xl'>More Details</button>
        </div>
      </div>
      </div>
    </div>
  )
  return (
    <>
      <ul className='flex'>
        {Render_List}
      </ul>
    </>
  )
}

export default App

// function App() {
//   const FilterData = Product.filter((data) => data.catagories === "mobile");

//   console.log(FilterData);

//   const Render_List = FilterData.map(
//     (item) => 
//     <div className='p-8 mt-28 ms-2 shadow-black shadow-2xl rounded-3xl'>
//       <div className="flex-wrap h-[470px] w-[340px] text-center font-bold text-2xl">
//         <div className="h-64 w-64 d-flex align-items-center">
//         <img className='ms-14 object-cover' src={item.img} alt="" />
//         </div>
//         <div className='mt-20'>
//           <hr className='border-black' />
//           <h1>{item.name}</h1>
//           <span>{item.price}</span><br/>
//           <button className='bg-cyan-400 h-16 w-48 rounded-3xl'>More Details</button>
//         </div>
//       </div>
//     </div>
//   )
//   return (
//     <>
//       <ul className='flex'>
//         {Render_List}
//       </ul>
//     </>
//   )
// }

// export default App
