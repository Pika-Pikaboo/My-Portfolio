import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { html } from "../assets/Dev Icons/html.png";
import { css } from "../assets/Dev Icons/css.png";
import { sass } from "../assets/Dev Icons/sass.png";
import { bootstrap } from "../assets/Dev Icons/bootstrap.png";
import { tailwind } from "../assets/Dev Icons/tailwind.png";
import { javascript } from "../assets/Dev Icons/javascript.png";
import { typescript } from "../assets/Dev Icons/typescript.png";
import { react } from "../assets/Dev Icons/react.png";
import { material } from "../assets/Dev Icons/material-ui.png";
import { express } from "../assets/Dev Icons/express.png";
import { vue } from "../assets/Dev Icons/vue.png";
import { mongodb } from "../assets/Dev Icons/mongodb.png";
import { node } from "../assets/Dev Icons/node.png";
import { flutter } from "../assets/Dev Icons/flutter.png";

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
        </div>
      </div>
    </section>
  );
}

export default Experience;
