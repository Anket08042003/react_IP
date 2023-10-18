import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayComponent = () => {
  let { inputValue, inputValue2 } = useParams();
  let inputData = {
    name: inputValue,
    email: inputValue2
  };

  return (
    <div className='displayOut'>
      <div className='display'>
      <h2>Display Component</h2>
      <p>name: {inputData.name}</p>
      <p>email: {inputData.email}</p>
    </div>
    </div>
    
  );
};

export default DisplayComponent;