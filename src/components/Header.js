import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        return;
      });
    };
  }, []);

  return (
    <div className={`header ${show ? 'header-dark' : ''}`}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxb8A7Ra_XhFcf845bg1ksefJliQSTlVsmA&usqp=CAU'
        alt='Netflix Logo'
      />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='profile'
      />
    </div>
  );
}

export default Header;
