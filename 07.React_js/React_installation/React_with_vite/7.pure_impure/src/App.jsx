import './App.css'
// import Pure_Components from './Pure_Components'
// import Cup_Tea from './Cup_Tea'
import Chipse from './Pure_Components/Chipse'
import Penda from './Pure_Components/penda'
import KajuKari from './Pure_Components/Kaju_Kari'

import React from 'react'

const App = () => {
  return (
    <div>
      {/* <Pure_Components/>
      <Cup_Tea/> */}
      <Chipse/>
      <Penda/>
      <KajuKari/>
    </div>
  )
}

export default App



// function Recipe({ drinkers }) {
//   return (
//     <ol>    
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For Four</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }
