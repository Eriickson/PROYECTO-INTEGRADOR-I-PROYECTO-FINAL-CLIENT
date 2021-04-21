import React from "react";

// My Components
import { Card } from "@/components";
import EditDataForm from "./EditDataForm";

const EditData: React.FC = () => {
  return (
    <Card notBorderTop>
      <EditDataForm />
    </Card>
  );
};

export default EditData;
