import React from "react";
import Options from "../Options/Options";

const Investingduration= (props) => {
  const options = [
    {
      name: "Atleast 10 years",
      handler: props.actionProvider.replytoQstn,
      id: 1,
    },
    {
      name: "Between 3-10 years",
      handler: props.actionProvider.replytoQstn,
      id: 2,
    },
    {
      name: "Less than 3 years",
      handler: props.actionProvider.replytoQstn,
      id: 3,
    },
   
  ];

  return <Options options={options} />;
};

export default Investingduration;
