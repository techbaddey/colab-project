import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mydomot from "../Assests/MyDomot.png";
import metabnb from "../Assests/MetaBnb.png";
import portfolio from "../Assests/portfolio.png";
import puzzle from "../Assests/puzzle.png";

export default function Project() {
  return (
    <>
      <Header />
      <div className="project-container">
        <h3>My Recent Projects</h3>

        <div className="project-sub">
          <div className="sub-project">
            <img className="image" src={Mydomot} alt={" "} />
            <p className="title">My Domot</p>
            <div className="flex">
              <p>React JS</p> <p>CSS</p> <p>Vercel</p>
            </div>
            <div className="flex">
              <button>
                {" "}
                <a href="https://mydomot.vercel.app">Live Demo</a>
              </button>{" "}
              <button>
                <a href="https://github.com/teqbaddie/MyDomot">Source Code</a>
              </button>
            </div>
          </div>
          <div className="sub-project">
            <img className="image" src={metabnb} alt={" "} />
            <p className="title">MetaBnb</p>
            <div className="flex">
              <p>React JS</p> <p>Sass</p> <p>Vercel</p>
            </div>
            <div className="flex">
              <button>
                <a href="https://hng-metabnb-mu.vercel.app/">Live Demo</a>
              </button>{" "}
              <button>
                <a href="https://github.com/teqbaddie/hng-metabnb">Source Code</a>
              </button>
            </div>
          </div>
        </div>

        <div className="project-sub">
          <div className="sub-project">
            <img className="image" src={puzzle} alt={" "} />
            <p className="title">Puzzle Game</p>
            <div className="flex">
              <p>React JS</p> <p>CSS</p> <p>Vercel</p>
            </div>
            <div className="flex">
              <button>
                <a href="https://reelmakers-picto-detective.vercel.app/">Live Demo</a>
              </button>{" "}
              <button>
                <a href="https://github.com/teqbaddie/picto-detective">Source Code</a>
              </button>
            </div>
          </div>
          <div className="sub-project">
            <img className="image" src={portfolio} alt={" "} />
            <p className="title">Portfolio Website</p>
            <div className="flex">
              <p>Vanilla JS</p> <p>Netlify</p>
            </div>
            <div className="flex">
              <button>
                <a href="https://oyinkansolashoroye.netlify.app">Live Demo</a>
              </button>{" "}
              <button>
                <a href="">Source Code</a>
              </button>
            </div>
          </div>
        </div>

        <button className="github-btn">
          {" "}
          <a href="https://github.com/teqbaddie"> More in Github </a>
        </button>
      </div>
      <Footer />
    </>
  );
}
