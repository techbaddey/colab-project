import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Mydomot from '../Assests/MyDomot.png'
import metabnb from '../Assests/MetaBnb.png'
import portfolio from '../Assests/portfolio.png'
import puzzle from '../Assests/puzzle.png'


export default function Project() {
  return (
    <>
    <Header />
    <div className='project-container'>
      <h3>My Recent Projects</h3>

<div className='project-sub'>
      <div className='sub-project'>
    <img className="image" src={Mydomot} alt={" "} />
    <p>React JS</p> <p>CSS</p> <p>Vercel</p>
    <button> <a href=''>Live Demo</a></button>  <button><a href=''>Source Code</a></button>
    </div>
    <div className='sub-project'>
    <img className="image" src={metabnb} alt={" "} />
    <p>React JS</p> <p>Sass</p> <p>Vercel</p>
    <button><a href=''>Live Demo</a></button>  <button><a href=''>Source Code</a></button>
    </div>
    </div>


<div className='project-sub'>
    <div className='sub-project'>
    <img className="image" src={puzzle} alt={" "} />
    <p>React JS</p> <p>CSS</p> <p>Vercel</p>
    <button><a href=''>Live Demo</a></button>  <button><a href=''>Source Code</a></button>
    </div>
    <div className='sub-project'>
    <img className="image" src={portfolio} alt={" "} />
    <p>Vanilla JS</p> <p>Netlify</p> 
    <button><a href=''>Live Demo</a></button>  <button><a href=''>Source Code</a></button>
      </div>
      </div>


        <button> <a href='https://github.com/teqbaddie'> More in Github </a></button>
    </div>
    <Footer />
    </>
  )
}
