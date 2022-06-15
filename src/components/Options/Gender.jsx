import React from "react";
import Options from "../Options/Options";
// import ActionProvider from "../../ActionProvider";

const Gender= (props) => {
  const options = [
    {
      name: "Female",
      handler: props.actionProvider.incomeHandler,
      id: 12,
    },
    {
      name: "Male",
      handler: props.actionProvider.incomeHandler,
      id: 22,
    },
   
   
  ];

  return <Options options={options} />;
};

export default Gender;