import React from "react";

// My Components
import HeaderResultList from "./HeaderResultList";
import ResultList from "./ResultList";

// Types and Interface

const Results: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <HeaderResultList />
      <ResultList />
    </div>
  );
};

export default Results;
