import React from "react";
import Layout from "../layout/Layout";

const RnDShowcase = () => {
  return (
      <div
        className="h-96 bg-cover bg-center bg-no-repeat flex justify-center items-center bg-black/30 opacity-90"
        style={{
          backgroundImage: "url('/showcase.gif')",
        }}
      >
        <div className="bg-blue-600/40 px-10 sm:px-40 py-10 opacity-70 rounded-2xl">
          <p className="text-white text-2xl sm:text-5xl">R&D Showcase</p>
        </div>
        </div>
  );
};

export default RnDShowcase;
