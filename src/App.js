import img from "./images/profile.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./profile.css";
import ContactPage from "./contact";
import { useState } from "react";
import Navbar from "./Navbar";
import AchievementCard from "./AchievementCard";

function App() {
  const [showContact, setShowContact] = useState(false);

  const openContactPage = () => {
    setShowContact(true);
  };
  const Achievments = [
    { id: 1, Price: "3rd place in state level kabbadi" },
    { id: 3, Price: "SSC:2nd in School" },
    { id: 2, Price: "9.6 pointers" },
  ];

  return (
    <Router>
      <Navbar />
      <div className="container">
        <h1 style={{ color: "#00203FFF" }}>Anket Kadam</h1>
        <h2 style={{ color: "#00203FFF" }}>Backend Devloper</h2>
        <div className="image">
          <img src={img} />
        </div>
        <p>
          I'm Anket Kadam, a third-year B.E student majoring in Information
          Technology. Proficient in Java, C, Python, and object-oriented
          programming. Skilled in JavaScript, Node.js, MongoDB, Express, React,
          and currently exploring Next.js. Passionate about Data Science. Eager
          to contribute to innovative tech projects. Let's connect and create!
        </p>
        <Routes>
          <Route path="/contact" component={ContactPage} />
        </Routes>
        <Link to="/contact" className="btn" onClick={openContactPage}>
          Get in touch!
        </Link>
        {showContact && (
          <>
            <ContactPage college="VESIT" vesId="2021.anket.kadam@ves.ac.in" />
            <div className="contact-list">
              {Achievments.map((Achievment) => (
                <AchievementCard key={Achievment.id} Price={Achievment.Price} />
              ))}
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
