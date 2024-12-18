import React, { useState } from "react";
import "../styles/howItWorks.scss";

import nutritionImg from "../Assets/image9.png";
import physicalActivityImg from "../Assets/image10.png";
import restorativeSleepImg from "../Assets/image11.png";
import stressManagementImg from "../Assets/image12.png";
import socialConnectionImg from "../Assets/image13.png";
import substanceAbuseImg from "../Assets/image14.png";
import heartIcon1 from "../Assets/badge1.png";
import heartIcon2 from "../Assets/badge2.png";
import moonIcon from "../Assets/badge3.png";
import heartIcon3 from "../Assets/badge4.png";
import timeIcon from "../Assets/badge5.png";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("All");

  const cards = [
    {
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat, and reverse chronic illness.",
      image: nutritionImg,
      badgeIcon: heartIcon1,
      badgeText: "121/80 mmHg",
    },
    {
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
      image: physicalActivityImg,
      badgeIcon: heartIcon2,
      badgeText: "32 minutes",
    },
    {
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep enhances brain function and physical recovery.",
      image: restorativeSleepImg,
      badgeIcon: moonIcon,
      badgeText: "8 hours",
    },
    {
      title: "Stress management",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      image: stressManagementImg,
      badgeIcon: heartIcon3,
      badgeText: "60 bpm",
    },
    {
      title: "Social connection",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      image: socialConnectionImg,
      badgeIcon: heartIcon2,
      badgeText: "Feeling better",
    },
    {
      title: "Substance abuse",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      image: substanceAbuseImg,
      badgeIcon: timeIcon,
      badgeText: "62 days",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="section-header">
        <h2>HOW IT WORKS</h2>
        <h3>
          <span className="subtitle">Lifestyle as medicine:</span> The six
          pillars
        </h3>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "All" ? "active" : ""}`}
          onClick={() => setActiveTab("All")}
          aria-label="Show All"
        >
          All
        </button>
        {cards.map((card) => (
          <button
            key={card.title}
            className={`tab ${activeTab === card.title ? "active" : ""}`}
            onClick={() => setActiveTab(card.title)}
            aria-label={`Select ${card.title}`}
          >
            {card.title}
          </button>
        ))}
      </div>

      {activeTab === "All" ? (
        <div className="carousel">
          <div className="carousel-track">
            {cards.map((card) => (
              <div className="card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-overlay">
                  <span className="badge">
                    <img src={card.badgeIcon} alt="Badge Icon" />
                    {card.badgeText}
                  </span>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cards">
          {cards
            .filter((card) => card.title === activeTab)
            .map((card) => (
              <div className="card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="card-overlay">
                  <span className="badge">
                    <img src={card.badgeIcon} alt="Badge Icon" />
                    {card.badgeText}
                  </span>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
