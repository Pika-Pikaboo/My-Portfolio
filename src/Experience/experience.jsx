import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import material from "../assets/material-ui.png";
import express from "../assets/express.png";
import vue from "../assets/vue.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import flutter from "../assets/flutter.png";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>&lt; My Experience /&gt;</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="dev-icons">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={javascript} alt="JavaScript" />
          <img src={typescript} alt="TypeScript" />
          <img src={sass} alt="SASS" />
          <img src={bootstrap} alt="Bootstrap" />
          <img src={tailwind} alt="Tailwind" />
          <img src={react} alt="React" />
          <img src={material} alt="Material" />
          <img src={express} alt="express" />
          <img src={vue} alt="Vue" />
          <img src={mongodb} alt="MongoDB" />
          <img src={node} alt="Node" />
          <img src={flutter} alt="Flutter" />
        </div>

        <div class="dev-icons" aria-hidden="true">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={javascript} alt="JavaScript" />
          <img src={typescript} alt="TypeScript" />
          <img src={sass} alt="SASS" />
          <img src={bootstrap} alt="Bootstrap" />
          <img src={tailwind} alt="Tailwind" />
          <img src={react} alt="React" />
          <img src={material} alt="Material" />
          <img src={express} alt="express" />
          <img src={vue} alt="Vue" />
          <img src={mongodb} alt="MongoDB" />
          <img src={node} alt="Node" />
          <img src={flutter} alt="Flutter" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
