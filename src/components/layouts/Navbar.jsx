import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
        <nav className={`app ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <a href="">Web Profile</a>
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>Skill</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  );
}

export default Navbar;
