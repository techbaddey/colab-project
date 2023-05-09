import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import mypicture from "../Assests/mypicture.jpeg";

export default function Home() {
  return (
    <>
    <div className="home-section">
        <Header />
      <div className="hero-section">
        <diV>
        I am <b>Oyinkansola Shoroye,</b> a proficient software developer
        based in Lagos, Nigeria. <br /> My specialty lies in core frontend
        technologies, and I am always keen to explore new developments in my
        field. My passion for technology extends across various aspects. With
        ease, I navigate the intersection between designing exceptional digital
        products, meeting user needs, and catering to business objectives. My
        skillset enables me to execute tasks with utmost proficiency and
        accuracy, whether remotely or on-site. Beyond my core expertise, I enjoy
        sharing my knowledge of technology through speaking and writing. I am
        also an active volunteer, always willing to contribute to solutions that
        solve people's problems. I find great fulfillment in collaborating with
        other tech talents worldwide and making meaningful contributions to tech
        projects. I pride myself on my proficiency in data structure and
        algorithms, as demonstrated by my prowess in solving{" "}
        <a href="https://leetcode.com/teqbaddie" target="_blank" rel="noreferrer">
          Leetcode 
        </a>
        problems. Additionally, I am an active contributor to{" "}
        <a
          href="https://stackoverflow.com/users/19193399/oyinkansola-shoroye"
          target="_blank" rel="noreferrer"
        >
          Stack Overflow,
        </a>{" "}
        where I help people solve coding problems. I am always eager to take on
        new challenges and make a difference in the tech industry.
      </diV> 
      <div className="img">
      <img className="mypicture" src={mypicture} alt={mypicture} />
      </div>
      </div>
      </div>
      <Footer />
      </>
  );
}
