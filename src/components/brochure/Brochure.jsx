import React from "react";
import Layout from "../layout/Layout";
import { CalenderIcon, LocationIcon } from "../../icons/Icons";
import { logos } from "../../utils/logo";

const Brochure = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center bg-gray-100">
        <div
          className="bg-white shadow-xl flex"
          style={{
            width: "420mm",
            height: "297mm",
          }}
        >
          <div
            className="p-4 border-gray-300 flex flex-col bg-blue-900"
            style={{ width: "140mm" }}
          >
            <h1 className="text-3xl font-bold text-white text-center">
              Potential Participating Institutes
            </h1>
            <div className="border border-white my-2"></div>
            <div className="w-full flex flex-row gap-4">
              <div className="w-1/3">
                <div className="w-full flex-col">
                  <div className="bg-red-900 mb-1 p-1 text-center rounded-2xl">
                    <p className="text-white font-semibold">IISc + IITs</p>
                  </div>
                  <div className="w-full flex flex-wrap justify-center items-center gap-2">
                    {logos.iit.map((item, index) => (
                      <div className="w-13 h-13 rounded-sm bg-white gap-1 flex justify-center items-center p-2 ">
                        <img src={item.logo} alt="" className="w-8" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full flex-col">
                  <div className="bg-red-900 my-1 p-1 text-center rounded-2xl">
                    <p className="text-white font-semibold">IISERs</p>
                  </div>
                  <div className="w-full flex flex-wrap justify-center items-center gap-2">
                    {logos.iiser.map((item, index) => (
                      <div className="w-13 h-13 rounded-sm bg-white gap-1 flex justify-center items-center p-2 ">
                        <img src={item.logo} alt="" className="w-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <div className="w-full flex-col">
                  <div className="bg-red-900 mb-1 p-1 text-center rounded-2xl">
                    <p className="text-white font-semibold">IIEST + NITs</p>
                  </div>
                  <div className="w-full flex flex-wrap justify-center items-center gap-2">
                    {logos.nit.map((item, index) => (
                      <div className="w-12 h-12 rounded-sm bg-white gap-1 flex justify-center items-center p-2 ">
                        <img src={item.logo} alt="" className="w-8" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex-col mt-13">
                  <div className="bg-red-900 my-1 p-1 text-center rounded-2xl">
                    <p className="text-white font-semibold">
                      TOP 100 NIRF-Ranked Institutes
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap justify-center items-center gap-2">
                    {logos.top.map((item, index) => (
                      <div className="w-11 h-11 rounded-sm bg-white gap-1 flex justify-center items-center p-2 ">
                        <img src={item.logo} alt="" className="w-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-full overflow-hidden bg-[#F0DDAB]"
            style={{ width: "140mm" }}
          >
            <div className="relative w-full text-center py-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-40">
                <svg
                  viewBox="0 0 1440 300"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
                      M0,0
                      L1440,0
                      L1440,200
                      C1100,140 350,140 0,200
                      Z
                    "
                    fill="#1e3a8a"
                  />
                </svg>
              </div>
              <h2 className="relative z-10  text-3xl font-bold text-white text-center">
                Organizing Institutes
              </h2>
            </div>

            <div className="w-full p-8">
              <div className="bg-red-900 rounded-2xl p-6 grid grid-cols-2 gap-8 place-items-center">
                {/* Row 1 */}
                <div>
                  <div className="bg-white p-4 w-48 h-48 rounded-2xl">
                    <img
                      src="/imgi_19_IIT_Kharagpur_Logo.svg.png"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm font-semibold text-center">
                    IIT KHARAGPUR
                  </p>
                </div>

                <div>
                  <div className="bg-white p-4 w-48 h-48 rounded-2xl">
                    <img
                      src="/bhu.png"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm font-semibold text-center">
                    IIT (BHU) VARANASI
                  </p>
                </div>

                {/* Row 2 – Center item (span full row) */}
                <div className="col-span-2 flex justify-center">
                  <div>
                    <div className="bg-white p-4 w-48 h-48 rounded-2xl">
                      <img
                        src="/iitism-logo.png"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-white text-sm font-semibold text-center">
                      IIT (ISM) DHANBAD
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <div className="bg-white p-4 w-48 h-48 rounded-2xl">
                    <img
                      src="/imgi_23_IIT-Patna.svg.png"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm font-semibold text-center">
                    IIT PATNA
                  </p>
                </div>

                <div>
                  <div className="bg-white p-4 w-48 h-48 rounded-2xl">
                    <img
                      src="/imgi_6_iitb_bhubaneswar_logo .png"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm font-semibold text-center">
                    IIT BHUBANESWAR
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[250px] p-8">
              <div className="relative w-full h-full">
                <img
                  src="/i2h.jpg"
                  alt=""
                  className="w-full h-full object-fill rounded-xl"
                />

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-5xl font-bold tracking-widest drop-shadow-lg">
                    I2H
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-8 bg-[#F0DDAB] flex justify-center items-center"
            style={{ width: "140mm" }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 flex justify-center">
                <img src="/logo.png" alt="logo" className="w-80" />
              </div>
              {/* <div class="flex justify-between bg-white p-4 rounded-2xl">
                <div className="w-max-w-[80%]">
                  <p class="text-sm font-bold text-red-900 leading-tight text-justify">
                    "When science is scaled, innovation become inclusive and
                    technology drives transformation, it lays the foundation for
                    major achievements."
                  </p>
                  <div className="text-end mt-2">
                    {" "}
                    <p className="text-sm font-semibold">Shri Narendra Modi</p>
                    <p className="text-xs font-semibold">
                      (Hon’ble Prime Minister of India)
                    </p>
                  </div>
                </div>
                <img src="/pm.png" alt="PM" class="h-28 object-contain" />
              </div> */}

              <div className="bg-white text-center w-full rounded-2xl p-4">
                <p className="font-bold">About IInvenTiv</p>
                <p className="font-semibold text-sm italic">
                  Annual National R&amp;D Fair for Innovation &amp;
                  Self-Reliance
                </p>
                <p className="text-xs text-justify">
                  IInvenTiv is a flagship annual R&D fair organized by the
                  Ministry of Education, Government of India, to showcase
                  indigenous innovations and strengthen the
                  research-to-technology ecosystem. Launched in 2022 at IIT
                  Delhi as part of Azadi ka Amrit Mahotsav, it initially brought
                  together all IITs and later expanded to include NITs, IISc,
                  and leading universities. The platform bridges academia and
                  industry by promoting technology transfer, commercialization,
                  and collaborative innovation across priority sectors such as
                  healthcare, energy, manufacturing, digital technologies,
                  mobility, and infrastructure. IInvenTiv supports national
                  initiatives like Make in India and Atmanirbhar Bharat,
                  advancing India’s vision of self-reliance and innovation-led
                  growth.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 w-full flex flex-col items-center justify-center">
                <div className="flex gap-2 items-center">
                  <LocationIcon color="#9E0024" width="18" height="18" />
                  <p className="text-[#9E0024] text-xl font-semibold">Venue</p>
                </div>
                <p className="ml-6 text-xl font-semibold text-blue-900">
                  IIT(ISM) Dhanbad
                </p>
                <div className="flex gap-2 items-center">
                  <CalenderIcon color="#9E0024" width="18" height="18" />
                  <p className="text-[#9E0024] text-xl font-semibold">
                    February 21-22, 2026
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/imgi_5_iitism_banner_new.gif"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative bg-[#F0DDAB] shadow-xl flex"
          style={{
            width: "420mm",
            height: "297mm",
          }}
        >
          <div
            className="absolute bg-blue-900 print-circle"
            style={{
              width: "270mm",
              height: "270mm",
              borderRadius: "50%",
              inset: 0,
              margin: "auto",
            }}
          />

          <div
            className="relative p-4 flex flex-col overflow-hidden"
            style={{ width: "140mm", height: "100%" }}
          >
            <div className="">
              <div className="w-full text-center">
                <p className="text-blue-900 text-4xl font-bold">About Us</p>
              </div>

              <p className="font-bold text-lg text-blue-900 py-2">
                Message from five organising Directors
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 bg-white p-4 rounded-2xl">
                  <img
                    src="/director_iitdhanbad.jpg"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <p className="font-bold">Prof. Sukumar Mishra</p>
                    <p className="text-[10px] font-semibold text-[#9B0225] text-justify">
                      Earth Sciences play a vital role in resource
                      sustainability, climate resilience, and energy security.
                      As the host institute, IIT (ISM) Dhanbad is honoured to
                      lead the Earth Sciences theme at IInvenTiv 2026. We aim to
                      highlight innovations in geosciences, mining, and
                      environmental engineering that support responsible
                      development and national priorities.
                    </p>
                    <p className="font-semibold text-end">
                      Director, IIT (ISM) Dhanbad
                    </p>
                    <small className="text-[10px] font-semibold text-end flex justify-end">
                      (Theme: Earth Science)
                    </small>
                  </div>
                </div>
                <div className="flex flex-row gap-4 bg-white p-4 rounded-2xl">
                  <div>
                    <p className="font-bold">Prof. Suman Chakraborty</p>
                    <p className="text-[10px] font-semibold text-[#9B0225] text-justify">
                      Healthcare innovation is no longer optional, but rather
                      imperative for human dignity, resilience, and equity. At
                      IIT Kharagpur, we view healthcare as a grand convergence
                      of engineering, medicine, data, and societal need. By
                      anchoring the Healthcare theme at IInvenTiv 2026, we
                      reaffirm our commitment to translational innovation that
                      moves decisively from laboratory insight to bedside
                      impact. We invite partners across academia, industry, and
                      policy to co-create affordable, scalable, and globally
                      relevant healthcare solutions that can redefine access,
                      outcomes, and quality of life for billions.
                    </p>
                    <p className="font-semibold text-end">
                      Director, IIT Kharagpur
                    </p>
                    <small className="text-[10px] font-semibold text-end flex justify-end">
                      (Theme: Healthcare)
                    </small>
                  </div>
                  <img
                    src="/director_iitkharagpur.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="flex flex-row gap-4 bg-white p-4 rounded-2xl">
                  <img
                    src="/director_iitbhu.jpeg"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <p className="font-bold">Prof. Amit Patra</p>
                    <p className="text-[10px] font-semibold text-[#9B0225] text-justify">
                      Advanced materials form the backbone of modern technology
                      and sustainable development. IIT (BHU) Varanasi is proud
                      to lead the Materials Science theme at IInvenTiv 2026,
                      showcasing innovations spanning energy, infrastructure,
                      manufacturing, and advanced functional materials. We
                      anticipate strong collaboration between academia and
                      industry to translate fundamental research into impactful
                      real-world applications.
                    </p>
                    <p className="font-semibold text-end">
                      Director, IIT (BHU) Varanasi
                    </p>
                    <small className="text-[10px] font-semibold text-end flex justify-end">
                      (Theme: Materials Science)
                    </small>
                  </div>
                </div>

                <div className="flex flex-row gap-4 bg-white p-4 rounded-2xl">
                  <div>
                    <p className="font-bold">Prof. Trilok Nath Singh</p>
                    <p className="text-[10px] font-semibold text-[#9B0225] text-justify">
                      Artificial Intelligence is transforming industries,
                      governance, and society at large. IIT Patna is delighted
                      to anchor the Artificial Intelligence theme at IInvenTiv
                      2026, promoting responsible, scalable, and impactful AI
                      solutions. We look forward to engaging with industry and
                      global partners to demonstrate how AI-driven innovation
                      can address complex societal and industrial challenges.
                    </p>
                    <p className="font-semibold text-end">
                      Director, IIT Patna
                    </p>
                    <small className="text-[10px] font-semibold text-end flex justify-end">
                      (Theme: Artificial Intelligence)
                    </small>
                  </div>
                  <img
                    src="iit-patna-director.jpg"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="flex flex-row gap-4 bg-white p-4 rounded-2xl">
                  <img
                    src="/director_iitbhuneswar.jpg"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <p className="font-bold">Prof. Shreepad Karmalkar</p>
                    <p className="text-[10px] font-semibold text-[#9B0225] text-justify">
                      Semiconductor technology is foundational to digital
                      sovereignty and technological leadership. IIT Bhubaneswar
                      is proud to lead the Semiconductor Technology and Chip
                      Design theme at IInvenTiv 2026, aligned with India’s
                      Semiconductor Mission. We seek to foster innovation across
                      design, fabrication, packaging and systems, strengthening
                      India’s position in the global semiconductor ecosystem.
                    </p>
                    <p className="font-semibold text-end">
                      Director, IIT Bhubaneswar
                    </p>
                    <small className="text-[10px] font-semibold text-end flex justify-end">
                      (Theme: Semiconductor Technology & Chip Design)
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-50" style={{ width: "140mm" }}>
            <div className="relative w-full text-center py-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24">
                <svg
                  viewBox="0 0 1440 300"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                  M0,0
                  L1440,0
                  L1440,200
                  C1100,140 350,140 0,200
                  Z
                "
                    fill="#1e3a8a"
                  />
                </svg>
              </div>

              <h2 className="relative z-10 text-2xl font-bold text-white">
                Thematic Areas
              </h2>
            </div>

            <div className="w-full mt-16 p-4">
              <div className="bg-[#F0DDAB] rounded-2xl p-4 gap-8">
                <div className="flex justify-between gap-2">
                  <div className="w-full flex flex-col items-center relative">
                    <p className="absolute top-2 text-white text-xs font-bold">
                      Health Care
                    </p>
                    <img
                      src="/health.jpeg"
                      className="h-full rounded-tr-4xl rounded-bl-4xl object-cover"
                    />
                    <p className="text-blue-900 font-bold mt-2">
                      IIT KHARAGPUR
                    </p>
                  </div>

                  <div className="w-full flex flex-col items-center relative">
                    <p className="absolute top-2 text-white text-xs font-bold">
                      Materials Science
                    </p>
                    <img
                      src="/material.jpeg"
                      className="h-full rounded-tr-4xl rounded-bl-4xl object-cover"
                    />
                    <p className="text-blue-900 font-bold mt-2">
                      IIT(BHU) VARANASI
                    </p>
                  </div>
                </div>

                <div className="w-full h-56 flex flex-col items-center relative my-8">
                  <p className="absolute top-0 text-white text-xs font-bold">
                    Earth Sciences
                  </p>
                  <img
                    src="/earth.jpeg"
                    className="h-full rounded-tr-4xl rounded-bl-4xl object-cover"
                  />
                  <p className="text-blue-900 font-bold mt-2">
                    IIT(ISM) DHANBAD
                  </p>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="w-full flex flex-col items-center relative">
                    <p className="absolute top-2 text-white text-xs font-bold">
                      Artificial Intelligence
                    </p>
                    <img
                      src="/artificial.jpeg"
                      className="h-full rounded-tr-4xl rounded-bl-4xl object-cover"
                    />
                    <p className="text-blue-900 font-bold mt-2">IIT PATNA</p>
                  </div>

                  <div className="w-full flex flex-col items-center relative">
                    <p className="absolute top-2 text-white text-xs font-bold text-center w-[120px]">
                      Semiconductor Technology & Chip Design
                    </p>
                    <img
                      src="/semiconductor.jpeg"
                      className="h-full rounded-tr-4xl rounded-bl-4xl object-cover"
                    />
                    <p className="text-blue-900 font-bold mt-2">
                      IIT BHUBANESWAR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative p-4 flex flex-col overflow-hidden"
            style={{ width: "140mm", height: "100%" }}
          >
            <div className="relative z-20">
              <div className="w-full text-center">
                <p className="text-blue-900 text-4xl font-bold">Sponsor Tier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Brochure;
