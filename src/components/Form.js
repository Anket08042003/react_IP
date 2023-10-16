import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=''>
      <h2>Form Component</h2>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <input
        type="text"
        name="email"
        value={inputValue.email}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <Link to={`/display/${inputValue.name}/${inputValue.email}`}>Submit</Link>
    </div>
  );
};

export default Form;