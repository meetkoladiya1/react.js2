import React from 'react';

const Chipse = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Chips Recipe</h1>
      <p>Here is a simple recipe for making delicious chips:</p>
      <ul>
        <li>Ingredients:</li>
        <li>Potatoes</li>
        <li>Salt</li>
        <li>Oil for frying</li>
      </ul>
      <p>Instructions:</p>
      <ol>
        <li>Peel the potatoes and slice them thinly.</li>
        <li>Heat the oil in a frying pan.</li>
        <li>Fry the potato slices until they are golden brown.</li>
        <li>Remove from the oil and place on paper towels to drain excess oil.</li>
        <li>Sprinkle with salt to taste.</li>
        <li>Your delicious chips are ready to serve!</li>
      </ol>
    </div>
  );
};

export default Chipse;