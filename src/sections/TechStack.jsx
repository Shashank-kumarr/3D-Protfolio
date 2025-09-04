import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons, techStackImgs } from "../constants";

const TechStack = () => {
  // ✅ Toggle here (true = 3D models, false = normal logos)
  const use3D = false;

  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title=" My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {use3D
            ? // ✅ 3D MODE (.glb models)
            techStackIcons.map((techStackIcon) => (
              <div
                key={techStackIcon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <TechIconCardExperience model={techStackIcon} />
                  </div>
                  <div className="padding-x w-full">
                    <p>{techStackIcon.name}</p>
                  </div>
                </div>
              </div>
            ))
            : // ✅ IMAGE MODE (normal logos)
            techStackImgs.map((techStackIcon, index) => (
              <div
                key={index}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <img
                      src={techStackIcon.imgPath}
                      alt={techStackIcon.name}
                      className="w-50 h-100 object-contain"
                    />
                  </div>
                  <div className="padding-x w-full">
                    <p>{techStackIcon.name}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
