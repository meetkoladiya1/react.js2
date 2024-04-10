import './App.css'
import Card from './componant/Card'
import CardImg1 from './assets/Dwarka1.webp'
import CardImg2 from './assets/Dwarka2.jpg'
import CardImg3 from './assets/Dwarka-3.jpg'
import CardImg4 from './assets/Dwarka4.jpg'


function App() {
 

  return (
    <>
    <div className='flex justify-center items-center'>
      <Card name={"Dwarka History"} img={CardImg1}/>
      <Card name={"History of Dwarka"} img={CardImg2}/>
      <Card name={"View History"} img={CardImg3}/>
      <Card name={"Dwarka Of History"} img={CardImg4}/>
    </div>
    </>
  )
}

export default App
