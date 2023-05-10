import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import mypicture from "../Assests/mypicture.jpeg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-section">
        <h2 className="hero-text">
              Hello! I am Oyinkansola Shoroye, a frontend developer in Lagos,
              Nigeria
            </h2>
        <div className="hero-section">
          
          <div className="img">
            <img className="mypicture" src={mypicture} alt={mypicture} />
          </div>
          <div className="hero-one">
            I am a highly skilled frontend
            developer with a deep passion for exploring and staying up-to-date
            with the latest advancements in my field. Whether working remotely
            or on-site, I consistently deliver tasks with exceptional
            proficiency and accuracy. <br/> I actively engage in sharing my
            technological knowledge through public speaking and writing. I find
            great joy in contributing to solutions that solve real-world
            problems, and as an enthusiastic volunteer, I am always ready to
            lend a hand. Collaborating with talented professionals worldwide and
            making meaningful contributions to technology projects brings me a
            profound sense of fulfillment. <br/>I am proud to have completed a
            Software Engineering diploma course at <b>AltSchool Africa</b>, where I
            gained valuable insights and honed my programming skills.
            Furthermore, I had the opportunity to intern at <b>BuildLab Africa</b> for
            four months, which provided me with practical industry experience
            and enhanced my understanding of software development processes. <br/>My
            proficiency in data structures and algorithms is a testament to my
            dedication, as evidenced by my successful problem-solving on
            platforms like{" "}
            <a
              href="https://leetcode.com/teqbaddie"
              target="_blank"
              rel="noreferrer"
            >
              <b>Leetcode</b>
            </a>
            . Additionally, I actively contribute to{" "}
            <a
              href="https://stackoverflow.com/users/19193399/oyinkansola-shoroye"
              target="_blank"
              rel="noreferrer"
            >
              <b>Stack Overflow</b>,
            </a>{" "}
            assisting individuals in resolving coding challenges. <br/>I am
            perpetually eager to embrace new challenges and create a positive
            impact within the dynamic tech industry.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
