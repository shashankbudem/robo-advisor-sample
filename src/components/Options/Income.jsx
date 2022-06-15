import React from "react";
import Options from "../Options/Options";
// import ActionProvider from "../../ActionProvider";
const Income= (props) => {
  const options = [
    {
      name: "<1000000",
      handler: props.actionProvider.financialGoals,
      id: 1,
    },
    {
      name: "1000000-2000000",
      handler: props.actionProvider.financialGoals,
      id: 2,
    },
    {
      name: ">2000000",
      handler: props.actionProvider.financialGoals,
      id: 3,
    },
   
  ];

  return <Options options={options} />;
};

export default Income;