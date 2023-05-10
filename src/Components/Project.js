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
    <div>
    <img className="image" src={Mydomot} alt={" "} />
    <img className="image" src={metabnb} alt={" "} />
    <img className="image" src={puzzle} alt={" "} />
    <img className="image" src={portfolio} alt={" "} />
        Project
    </div>
    <Footer />
    </>
  )
}
