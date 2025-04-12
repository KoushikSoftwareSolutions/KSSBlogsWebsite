import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import KSSCard from "../components/KSSCard";
const Details = () => {
  const [scrollOn, setScrollOn] = useState(false);

  return (
    <div>
    <ScrollTrigger
      onEnter={() => setScrollOn(true)}
      onExit={() => setScrollOn(false)}
    >
      <div className="bg-white w-screen pb-20 text-sky-950">
        <div className="flex w-screen justify-evenly items-center pt-30">
            <div className="flex flex-col items-center gap-2">
           <div className="flex font-semibold">
          {scrollOn && (
            <CountUp start={0} end={100} delay={0} className="text-6xl max-md:text-2xl" />
          )}
            <p className="text-6xl max-md:text-2xl">+</p>
        </div>  
        <h1 className="font-medium">Active Users</h1>
        </div>
        <div className="w-[2px] h-20 bg-sky-200"></div>
        <div className="flex flex-col items-center gap-2">
        <div className="flex font-semibold">
          {scrollOn && (
            <CountUp start={0} end={25} delay={0} className="text-6xl max-md:text-2xl" />
          )}
            <p className="text-6xl max-md:text-2xl">+</p>
        </div>
        <h1 className="font-medium">Posts</h1>
        </div>
        <div className="w-[2px] h-20 bg-sky-200 "></div>
        <div className="flex flex-col items-center gap-2">
        <div className="flex font-semibold">
          {scrollOn && (
            <CountUp start={0} end={5} delay={0} className="text-6xl max-md:text-2xl" />
          )}
            <p className="text-6xl max-md:text-2xl">+</p>
        </div>
        <h1 className="font-medium">Categories</h1>
        </div>
        </div>
      </div>
    </ScrollTrigger>
    <KSSCard />
    </div>
  );
};
export default Details;
