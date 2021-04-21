import React, { useState } from "react";

const GetCoverAgency: React.FC = () => {
  const [imageSelected] = useState("https://www.yescar.ae/wp-content/uploads/2015/11/luxury-rent-economy-dubai.png");

  return (
    <>
      <div>
        <img src={imageSelected} alt="" />
        <button className="btn">Seleccionar portada</button>
      </div>
      <div className="p-5 border-2 border-dashed bg-gray-50">
        <div className="flex justify-center"></div>
      </div>
    </>
  );
};

export default GetCoverAgency;
