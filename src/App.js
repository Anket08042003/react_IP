import img from './images/profile.jpg'
import "./profile.css";

function App() {
  return (
    <div className="container">
      <h1 style={{color:'#00203FFF'}}>Anket Kadam</h1>
      <h2 style={{color:'#00203FFF'}}>Backend Devloper</h2>
      <div className='image'>
        <img src={img}/>
      </div>
      <p>
      I'm Anket Kadam, a third-year B.E student majoring in Information
            Technology. Proficient in Java, C, Python, and object-oriented
            programming. Skilled in JavaScript, Node.js, MongoDB, Express,
            React, and currently exploring Next.js. Passionate about Data
            Science. Eager to contribute to innovative tech projects. Let's
            connect and create!
      </p>
      <a className='btn'>
        get in touch!
      </a>
    </div>
  );
}

export default App;
