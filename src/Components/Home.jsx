import React from "react";

const Home = () => {
  return (
    <div className="Container bg-slate-300 " style={{ height: "83.8vh" }}>
      <div className="headings flex flex-col font-bold opacity-80 text-slate-950">
        <div className="headingOne text-[5vw] uppercase font-['Founders_Grotesk_X'] mt-[5vw] ml-[5vw] leading-[5vw]">Manage</div>
        <div className="headingTwo text-[5vw] uppercase font-['Founders_Grotesk_X'] mt-[5vw] ml-[5vw] leading-[5vw]">All of your Tasks</div>
        <div className="headingThree text-[5vw] uppercase font-['Founders_Grotesk_X'] mt-[5vw] ml-[5vw] leading-[5vw]">Using WorkEasy Todo List</div>
      </div>
    </div>
  );
};

export default Home;
