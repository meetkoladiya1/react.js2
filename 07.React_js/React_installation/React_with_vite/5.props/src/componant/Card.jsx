import React from 'react'

const Card = (props) => {
  return (
    <div className='flex justify-center items-center h-screen rounded-full'>
      <div className='max-w-[350px] h-fit-conetent mx-4 shadow-xl shadow-gray-600'>
        <div>
            <img className='w-[350px] h-[250px] object-cover' src={props.img} alt="" />
        </div>
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-2'>JAY DWARKADHISH</h1>
            <p>Dwarka has also been referred to throughout its history as “Mokshapuri”, “Dwarkamati”, and “Dwarkavati”. It is mentioned in the ancient prehistoric epic period of the Mahabharata. According to legend, Krishna settled here after he defeated and killed his uncle Kansa at Mathura.  This mythological account of Krishna’s migration to Dwarka from Mathura is closely associated with the culture of Gujarat.Krishna is also said to have reclaimed 12 yojanas or 96 square kilometres (37 sq mi) of land from the sea to create Dwarka.</p>

            <a className='btn inline-block mt-4'>
                {props.name}
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card
