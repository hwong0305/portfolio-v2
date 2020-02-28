import React, { useState } from 'react';
import '../styles/modal.css';

const MyModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleEscape = e => {
    if (e.keyCode === 27 && modal) {
      setModal(!modal);
    }
  };

  return (
    <div onKeyDown={handleEscape}>
      <button type="button" onClick={toggle} className="nav__modal__button">
        Menu
      </button>
      {modal && (
        <div className="nav__modal">
          <div
            className="nav__modal__overlay"
            role="button"
            aria-hidden="true"
            onClick={toggle}
            onKeyDown={handleEscape}
          />
          <div role="dialog" aria-modal="true" className="modal__box">
            <button
              type="button"
              className="modal__close"
              id="closeModal"
              onClick={toggle}
            >
              &times;
            </button>
            <h2>Menu</h2>
            <div
              onKeyDown={handleEscape}
              onClick={toggle}
              role="menuitem"
              aria-hidden="true"
            >
              <ul className="links">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#one">
                  <li>Background</li>
                </a>
                <a href="#two">
                  <li>SKills</li>
                </a>
                <a href="#three">
                  <li>Projects</li>
                </a>
                <a href="#footer">
                  <li>Contact Me</li>
                </a>
                <a href="/hermanwong.pdf" target="_blank">
                  <li>Resume</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
