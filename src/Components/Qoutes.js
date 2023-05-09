import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MyQuote = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <Header />
      <div className="quote-container">
       
          <div className="quote">
            <p id="text">{quotes.text}</p>
            <p id="author">-{quotes.author}</p>
            <div className="btncontainer">
              <button type="button" onClick={getQuote}>
                NEW QUOTES
              </button>
              <p className="ps">Quotes generated from an API</p>
            </div>
          </div>
        </div>
     
      <Footer />
    </>
  );
};

export default MyQuote;
