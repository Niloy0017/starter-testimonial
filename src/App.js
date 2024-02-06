import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (

    <div className="w-[100vw] h-[100vh] bg-gray-200 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 "></div>
      <Testimonial reviews={reviews}></Testimonial> 
      {/* testimonial component */}
    </div>
  )
};

export default App;
