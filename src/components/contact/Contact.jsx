import React from "react";
import Layout from "../layout/Layout";
import {
  EmailIcon,
  Facebook,
  HomeIcon,
  InstaIcon,
  LinkedIn,
  PhoneIcon,
  Twitter,
} from "../../icons/Icons";

const Contact = () => {
  return (
    <section id="contact">
      <div
        className="min-h-auto bg-cover bg-center bg-no-repeat flex justify-center items-center bg-black/30 opacity-90"
        style={{
          backgroundImage: "url('/contactus.gif')",
        }}
      >
        <div className="w-full py-20">
          <div className="w-full flex justify-center items-center">
            <p className="text-5xl text-white font-bold">Contact Us</p>
          </div>
          <div className="px-4 2xl:px-96 text-white  w-full mt-8 sm:mt-20">
            <div className="w-full flex flex-col lg:flex-row p-4 justify-around gap-8">
              <div className="w-full lg:w-1/2 border border-blue-600 flex items-center justify-center rounded-4xl p-4">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div>
                    <div className="flex flex-row gap-2">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                        <HomeIcon color={"#000000"} width={20} height={20} />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#00BCD5]">
                          Venue
                        </p>
                        <p className="lg:text-base text-sm">
                          IIT(ISM) Dhanbad, February 21-22, 2026
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                          <PhoneIcon color={"#000000"} width={20} height={20} />
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-[#00BCD5]">
                          Contact
                        </p>
                      </div>
                      <div className="ml-12">
                        <p className="lg:text-base text-sm">
                          Prof. Parthasarathi Das (Dean R &D), Convenor,
                          IInvenTiv 2026
                        </p>
                        <p className="lg:text-base text-sm">
                          Prof. Ejaz Ahmad (PIC SRIC) Organizing Secretary,
                          IInvenTiv 2026
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                        <EmailIcon color={"#000000"} width={20} height={20} />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-3xl font-bold text-[#00BCD5]">
                          Email
                        </p>
                        <p className="lg:text-base text-sm">
                          iinventiv2026@iitism.ac.in
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 sm:px-20 py-4 border border-blue-500 rounded-2xl bg-blue-800/40 flex gap-8">
                    <a
                      href="https://x.com/iinventiv2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-50 rounded-full p-2 cursor-pointer hover:scale-110 transition"
                    >
                      <Twitter color={"#000000"} width={20} height={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/people/IInvenTiv-2026/61586354344750/?sk=about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-50 rounded-full p-2 cursor-pointer hover:scale-110 transition"
                    >
                      <Facebook color={"#1A73E8"} width={20} height={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/iinventiv-2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-50 rounded-full p-2 cursor-pointer hover:scale-110 transition"
                    >
                      <LinkedIn color={"#1A73E8"} width={20} height={20} />
                    </a>
             <a
  href="https://www.instagram.com/iinventiv2026/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-white
    rounded-full
    flex items-center justify-center
    cursor-pointer
    transition-transform
    hover:scale-110
  "
>
  <InstaIcon width={36} height={24} />
</a>



                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 border border-blue-600 rounded-4xl opacity-90">
                <img src="/contactus_card.gif" alt="" className="rounded-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
