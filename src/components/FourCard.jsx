import React from "react";
import Header from "./card/Header";
import Card from "./card/Card";
import Icon1 from "../assets/images/icon-supervisor.svg";
import Icon2 from "../assets/images/icon-team-builder.svg";
import Icon3 from "../assets/images/icon-karma.svg";
import Icon4 from "../assets/images/icon-calculator.svg";

const FourCard = () => {
  return (
    <article className="font-primary text-center md:justify-center md:items-center flex flex-col">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex items-center">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project feedbacks"
            imageSrc={Icon1}
            imageAlt="Supervisor icon"
            className="bg-white border-t-[hsl(180,62%,50%)]"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <Card
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              imageSrc={Icon2}
              imageAlt="Supervisor icon"
              className="bg-white border-t-[hsl(0,78%,62%)]"
            />
          </div>
          <div className="flex">
            <Card
              title="Karma"
              description="Regularly evaluates our talent to ensure quality"
              imageSrc={Icon3}
              imageAlt="Supervisor icon"
              className="bg-white border-t-[hsl(34,97%,64%)]"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Card
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            imageSrc={Icon4}
            imageAlt="Supervisor icon"
            className="bg-white border-t-[hsl(212,86%,64%)%)]"
          />
        </div>
      </div>
    </article>
  );
};

export default FourCard;
