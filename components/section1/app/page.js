import React from "react";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import MissionImage from "./assets/Mission.svg";
import VisionImage from "./assets/Vision.svg";
import LoansImage from "./assets/project-bankless-loans.svg";
import LabsImage from "./assets/project-bankless-lab.svg";
import AcademyImage from "./assets/project-bankless-academy.svg";
import CardImage from "./assets/project-bankless-card.svg";
import Button from "./assets/see-all.svg";
import TalentOne from "./assets/talent-1.svg";
import TalentTwo from "./assets/talent-2.svg";
import TalentThree from "./assets/talent-3.svg";
import TalentFour from "./assets/talent-4.svg";


export default function Home() {
  const stacks = ["solidity", "front-end", "back-end"];

  return (
    <main>
      <div className="page-container">
        <Navigation />
        <div className="hero">
          <h1 className="main-heading">
            Expand Your{" "}
            <span>
              <br />
              Dev Journey
            </span>
          </h1>
          <p style={{ fontFamily: "sans-serif", letterSpacing: "1px" }}>
            <i>
              There are only 10 types of people in this
              <br /> world: those who know binary and <br />
              those who {`don't`}
            </i>
          </p>
          <h3 style={{ fontFamily: "D3 Euronism", letterSpacing: "8px" }}>
            Stacks
          </h3>
        </div>
        <Carousel items={stacks} />
      </div>
      <section className="mission-grp">
        <Image src={MissionImage} alt="Mission" />
        <Image src={VisionImage} alt="Vision" />
      </section>
      <section className="projects-grp">
        <p>Projects</p>
        <Image src={LabsImage} alt="project: bankless academy" />
        <Image src={CardImage} alt="project: bankless card" />
        <Image src={LoansImage} alt="project: bankless academy" />
        <Image src={AcademyImage} alt="project: bankless card" />
        <Image className="img-btn" src={Button} alt="see all" />
      </section>
      <section className="talent-grp">
        <p>Talent pool</p>
        <div>
          <div><Image src={TalentOne} alt="project: bankless academy" /> </div>
          <div><Image src={TalentTwo} alt="project: bankless academy" /> </div>
          <div><Image src={TalentThree} alt="project: bankless academy" /> </div>
          <div><Image src={TalentFour} alt="project: bankless academy" /> </div>
          
        </div>
        <Image className="img-btn" src={Button} alt="see all" />
      </section>
    </main>
  );
}
