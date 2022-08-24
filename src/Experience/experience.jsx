import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

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
          <img src="/image/Dev Icons/html.png" alt="HTML" />
          <img src="/image/Dev Icons/css.png" alt="CSS" />
          <img src="/image/Dev Icons/javascript.png" alt="JavaScript" />
          <img src="/image/Dev Icons/typescript.png" alt="TypeScript" />
          <img src="/image/Dev Icons/sass.png" alt="SASS" />
          <img src="/image/Dev Icons/bootstrap.png" alt="Bootstrap" />
          <img src="/image/Dev Icons/tailwind.png" alt="Tailwind" />
          <img src="/image/Dev Icons/react.png" alt="React" />
          <img src="/image/Dev Icons/material-ui.png" alt="Material" />
          <img src="/image/Dev Icons/express.png" alt="express" />
          <img src="/image/Dev Icons/vue.png" alt="Vue" />
          <img src="/image/Dev Icons/mongodb.png" alt="MongoDB" />
          <img src="/image/Dev Icons/node.png" alt="Node" />
        </div>

        <div class="dev-icons" aria-hidden="true">
          <img src="/image/Dev Icons/html.png" alt="HTML" />
          <img src="/image/Dev Icons/css.png" alt="CSS" />
          <img src="/image/Dev Icons/javascript.png" alt="JavaScript" />
          <img src="/image/Dev Icons/typescript.png" alt="TypeScript" />
          <img src="/image/Dev Icons/sass.png" alt="SASS" />
          <img src="/image/Dev Icons/bootstrap.png" alt="Bootstrap" />
          <img src="/image/Dev Icons/tailwind.png" alt="Tailwind" />
          <img src="/image/Dev Icons/react.png" alt="React" />
          <img src="/image/Dev Icons/material-ui.png" alt="Material" />
          <img src="/image/Dev Icons/express.png" alt="express" />
          <img src="/image/Dev Icons/vue.png" alt="Vue" />
          <img src="/image/Dev Icons/mongodb.png" alt="MongoDB" />
          <img src="/image/Dev Icons/node.png" alt="Node" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
