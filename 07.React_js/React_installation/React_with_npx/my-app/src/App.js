import * as React from 'react'
import Navbar from './component/Navbar'
import Article from './component/Article'
import Table  from './component/Table'
import Card from './component/Card'
import './App.css'


export default function AccordionUsage() {
  return (
    <>
     <Navbar/>
      <Article/>
      <Table/>
      <Card/>
      {/* <Footer/> */}
      </>
  );
}