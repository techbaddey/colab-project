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

      <div>
    <img className="image" src={Mydomot} alt={" "} />
    </div>
    <div>
    <img className="image" src={metabnb} alt={" "} />
    </div>

    <div>
    <img className="image" src={puzzle} alt={" "} />
    </div>
    <div>
    <img className="image" src={portfolio} alt={" "} />
      </div>

        <button> <a href='https://github.com/teqbaddie'> More in Github </a></button>
    </div>
    <Footer />
    </>
  )
}
