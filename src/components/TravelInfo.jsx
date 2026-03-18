import React from "react";

const TravelInfo = () => {
  return (
    <section id="travelinfo">
      <div className="bg-[#1d1e5d] p-6 md:p-12 text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-orange-400 mb-10 text-center">
          Travel Information
        </h2>

        <div className="max-w-6xl mx-auto space-y-10">
          {/* ================= Travel Agents ================= */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500">
            <div className="bg-[#262a6d] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">
                Travel Agents
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1f2160] p-4 rounded-lg border border-white/10">
                  <p className="text-orange-300 font-semibold">
                    M/s Nawal Travels
                  </p>
                  <p>
                    Mr. Rakesh -{" "}
                    <span className="text-green-400">7870737892</span>
                  </p>
                  <p>
                    Mr. Karan -{" "}
                    <span className="text-green-400">6202840235</span>
                  </p>
                </div>

                <div className="bg-[#1f2160] p-4 rounded-lg border border-white/10">
                  <p className="text-orange-300 font-semibold">
                    M/s Satyendra Singh Travels
                  </p>
                  <p>
                    Mr. Madhu -{" "}
                    <span className="text-green-400">8210295307</span>
                  </p>
                  <p>
                    Mr. Pawan -{" "}
                    <span className="text-green-400">9470546166</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Nearest Airports ================= */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500">
            <div className="bg-[#262a6d] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">
                Nearest Airports from Dhanbad
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1f2160] p-4 rounded-lg">
                  <p className="font-semibold text-white">
                    Durgapur Airport (RDP)
                  </p>
                  <p className="text-gray-400 text-sm">~85 km from Dhanbad</p>
                </div>

                <div className="bg-[#1f2160] p-4 rounded-lg">
                  <p className="font-semibold text-white">
                    Deoghar Airport (DGH)
                  </p>
                  <p className="text-gray-400 text-sm">~77 km from Dhanbad</p>
                </div>

                <div className="bg-[#1f2160] p-4 rounded-lg">
                  <p className="font-semibold text-white">
                    Ranchi Airport (IXR)
                  </p>
                  <p className="text-gray-400 text-sm">~140 km from Dhanbad</p>
                </div>

                <div className="bg-[#1f2160] p-4 rounded-lg">
                  <p className="font-semibold text-white">
                    Kolkata Airport (CCU)
                  </p>
                  <p className="text-gray-400 text-sm">~269 km from Dhanbad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
