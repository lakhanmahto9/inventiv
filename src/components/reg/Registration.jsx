import React from "react";

const Registration = ({
  formLink = "https://forms.gle/VFQgbdieU8H4FXYv5",
  title = "Industry Registration Link",
  description = "Click the button below to register your industry participation for the event.",
}) => {
  return (
    <section id="registration">
     <div className="p-4 md:p-16 bg-[#1d1e5d]">
         <div className="p-[2px] bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500 min-h-[600px] rounded-2xl">
        {/* Inner Section */}
        <div className="bg-[#1d1e5d] py-12 px-4 md:px-16 text-center min-h-[600px] flex justify-center items-center rounded-2xl">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#262a6d] to-[#2f3385] p-8 rounded-2xl shadow-lg">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-6">{description}</p>

            {/* Button */}
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-orange-500/40 transition duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Registration;
