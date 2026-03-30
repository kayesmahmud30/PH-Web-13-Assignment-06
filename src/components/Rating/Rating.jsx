import React from "react";

const Rating = () => {
  return (
    <section className="bg-linear-to-r to-[#9514FA] from-[#4F39F6] flex justify-around items-center text-white py-15">
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold">50K+</h1>
        <p className="text-2xl">Active Users</p>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold">200+</h1>
        <p className="text-2xl">Premium Tools</p>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold">4.9</h1>
        <p className="text-2xl">Rating</p>
      </div>
    </section>
  );
};

export default Rating;
