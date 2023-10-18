
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/display/${formData.name}/${formData.email}`);
  };

  return (
    <div className='contact'>
      <div className='contactdiv'>
      <form onSubmit={handleSubmit}>
        <div className='labelName'>
          <label >Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value})}
          />
        </div>
        <div className='labelEmail'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value})}
          />
        </div>
        <div className='submit'><button type="submit">Submit</button></div>
        
      </form>
    </div>
    </div>
    
  );
};

export default Contact;

