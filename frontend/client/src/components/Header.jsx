import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="hero-section">
      <div className="masthead__graphic">
        <svg aria-hidden="true" focusable="false">
            <use href="logo.jpeg"></use>
        </svg>
      </div>
        <h1>Welcome to My React App MAIN PAGE</h1>
        <p>This is the main page of our application.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="main-content">
        <h2>Why Choose Us?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi sed urna tempor mattis.</p>
      </div>
      <section>
        <p>this is section before footer</p>
      </section>
    </header>
  );
}

export default Header;
