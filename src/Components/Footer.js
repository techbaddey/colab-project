import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-one">
          <a href="/" id="name">
            Oyinkansola Shoroye
          </a>
          <p>
            © {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
        <div className="footer-two">
           <p id="name-two">Stay Connected</p>
           <p> <a href="https://github.com/teqbaddie" target="_blank" rel="noreferrer"> GitHub</a></p>
           <p> <a href="https://linkedin.com/in/oyinkansola-shoroye" target="_blank" rel="noreferrer"> LinkedIn</a></p>
           <p> <a href="https://twitter.com/teqbaddie" target="_blank" rel="noreferrer"> Twitter </a></p>
        </div>
      </div>
    </>
  );
}
