import React from 'react';
import './mainPage.css';

export default function MainPage(): JSX.Element {
  document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
      `,
    });
  });
  return (
    <div className="MainContent">
      <div className="mainP">MAIN PAGE</div>

      <section className="layers">
        <div className="layers__container">
          <div className="layers__item layer-1" />
          <div className="layers__item layer-2" />
          <div className="layers__item layer-3">
            <div className="hero-content">
              <div className="hero-content__p">
                ... made for my home work presentation
              </div>
            </div>
          </div>
          <div className="layers__item layer-4" />
          <div className="layers__item layer-5" />
          <div className="layers__item layer-6" />
        </div>
      </section>
    </div>
  );
}
