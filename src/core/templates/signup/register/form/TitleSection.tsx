import React from "react";

// Types and Interfaces
interface TitleSection {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSection> = ({ title, subtitle }) => (
  <div className="mb-5">
    <h2 className="text-xl font-medium">{title}</h2>
    <p className="text-sm text-sec-text">{subtitle}</p>
  </div>
);

export default TitleSection;
