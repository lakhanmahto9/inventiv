// import React from "react";
// import { logos } from "../../utils/logo";
// import { motion, useInView } from "framer-motion";
// const Innovation = () => {
//   return (
//     <section id="innovation">
//       <div className="h-screen bg-[#1d1e5d]">
//         <div className="p-4 lg:p-16 bg-[#1d1e5d]">
//           <motion.p
//             className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Innovation
//           </motion.p>
//           <div className="relative rounded-2xl p-px overflow-hidden">
//             <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>
//             <div className="w-full h-full flex gap-8">
//               {/* LEFT SIDE */}
//               <div className="w-1/3 text-white">
//                 <div className="w-full overflow-auto">
//                   {/* ✅ Rounded Border Wrapper */}
//                   <div className="rounded-lg overflow-hidden border border-white">
//                     <table className="w-full border-collapse text-center">
//                       <thead className="bg-[#1d1e5d]">
//                         <tr>
//                           <th
//                             colSpan={4}
//                             className="border-b border-white py-3 font-bold text-lg"
//                           >
//                             Thematic Areas
//                           </th>
//                         </tr>

//                         <tr className="font-semibold">
//                           <th className="border border-white px-4 py-2 w-[10%]">
//                             Sl. No.
//                           </th>
//                           <th className="border border-white px-4 py-2 w-[30%]">
//                             Institute Name
//                           </th>
//                           <th className="border border-white px-4 py-2 w-[40%]">
//                             Name of Innovation
//                           </th>
//                           <th className="border border-white px-4 py-2 w-[20%]">
//                             Video Link
//                           </th>
//                         </tr>
//                       </thead>

//                       <tbody>
//                         {logos.institutesData.map((inst) =>
//                           inst.innovations.map((inv, index) => (
//                             <tr key={`${inst.sl}-${index}`}>
//                               {index === 0 && (
//                                 <td
//                                   rowSpan={inst.innovations.length}
//                                   className="border border-white px-4 py-2 font-bold align-top"
//                                 >
//                                   {inst.sl}
//                                 </td>
//                               )}

//                               {index === 0 && (
//                                 <td
//                                   rowSpan={inst.innovations.length}
//                                   className="border border-white px-4 py-2 font-bold align-top"
//                                 >
//                                   {inst.institute}
//                                 </td>
//                               )}

//                               <td className="border border-white px-4 py-2 text-left">
//                                 {inv.name}
//                               </td>

//                               <td className="border border-white px-4 py-2">
//                                 <a
//                                   href={inv.link}
//                                   target="_blank"
//                                   rel="noreferrer"
//                                   className="text-blue-400 underline font-medium"
//                                 >
//                                   Link
//                                 </a>
//                               </td>
//                             </tr>
//                           )),
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT SIDE TABLE */}
//               <div className="w-2/3 border border-white rounded-lg overflow-hidden">
//                 {/* ✅ Table scroll wrapper */}
//                 <div className="h-full overflow-y-auto overflow-x-auto custom-scrollbar">
//                   <table className="w-full border border-white bg-[#1d1e5d] text-white text-center">
//                     <thead className="sticky top-0 bg-[#1d1e5d] z-10 border-b border-white">
//                       <tr>
//                         <th
//                           colSpan="8"
//                           className="border border-white py-3 font-bold text-lg bg-[#1d1e5d]"
//                         >
//                           Innovation Submission Data till 228 Innovation
//                         </th>
//                       </tr>

//                       <tr>
//                         <th
//                           rowSpan="2"
//                           className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                         >
//                           Sl. No.
//                         </th>
//                         <th
//                           rowSpan="2"
//                           className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                         >
//                           Institute Name
//                         </th>
//                         <th
//                           colSpan="5"
//                           className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                         >
//                           Thematic Areas
//                         </th>
//                         <th
//                           rowSpan="2"
//                           className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                         >
//                           Total No. of Innovation Submitted
//                         </th>
//                       </tr>

//                       <tr>
//                         <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                           AI/ML
//                         </th>
//                         <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                           Semiconductor
//                         </th>
//                         <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                           Earth Science
//                         </th>
//                         <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                           Materials Science
//                         </th>
//                         <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                           Health Care
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {logos.tableData.map((item) => (
//                         <tr key={item.sl}>
//                           <td className="border border-white px-4 py-2">
//                             {item.sl}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.institute}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.aiml}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.semiconductor}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.earthScience}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.materialsScience}
//                           </td>
//                           <td className="border border-white px-4 py-2">
//                             {item.healthCare}
//                           </td>
//                           <td className="border border-white px-4 py-2 font-semibold">
//                             {item.total}
//                           </td>
//                         </tr>
//                       ))}

//                       {/* ✅ Total row sticky bottom (optional) */}
//                       <tr className="font-bold bg-[#1d1e5d] sticky bottom-0">
//                         <td
//                           colSpan="2"
//                           className="border border-white px-4 py-2"
//                         >
//                           Total
//                         </td>
//                         <td className="border border-white px-4 py-2">47</td>
//                         <td className="border border-white px-4 py-2">21</td>
//                         <td className="border border-white px-4 py-2">27</td>
//                         <td className="border border-white px-4 py-2">47</td>
//                         <td className="border border-white px-4 py-2">86</td>
//                         <td className="border border-white px-4 py-2">228</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Innovation;

import React from "react";
import { logos } from "../../utils/logo";
import { motion } from "framer-motion";

const Innovation = () => {
  return (
    <section id="innovation">
      <div className="min-h-screen bg-[#1d1e5d]">
        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Innovation
          </motion.p>

          {/* ✅ Gradient Border Wrapper */}
          <div className="relative rounded-2xl p-[2px] overflow-hidden">
            {/* ✅ Gradient border layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            {/* ✅ Inner content box */}
            <div className="relative rounded-2xl bg-[#1d1e5d] p-4 lg:p-6">
              {/* ✅ Responsive Layout */}
              <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">

                {/* ================= LEFT SIDE ================= */}
                <div className="w-full lg:w-1/3 text-white">
                  <div className="w-full max-h-[400px] lg:max-h-[550px] overflow-auto custom-scrollbar">
                    <div className="rounded-lg overflow-hidden border border-white">
                      <table className="w-full border-collapse text-center bg-[#1d1e5d]">
                        <thead className="bg-[#1d1e5d] sticky top-0 z-10">
                          <tr>
                            <th
                              colSpan={4}
                              className="border border-white py-3 font-bold text-lg"
                            >
                              Thematic Areas
                            </th>
                          </tr>

                          <tr className="font-semibold">
                            <th className="border border-white px-4 py-2 w-[10%]">
                              Sl. No.
                            </th>
                            <th className="border border-white px-4 py-2 w-[30%]">
                              Institute Name
                            </th>
                            <th className="border border-white px-4 py-2 w-[40%]">
                              Name of Innovation
                            </th>
                            <th className="border border-white px-4 py-2 w-[20%]">
                              Video Link
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {logos.institutesData.map((inst) =>
                            inst.innovations.map((inv, index) => (
                              <tr key={`${inst.sl}-${index}`}>
                                {index === 0 && (
                                  <td
                                    rowSpan={inst.innovations.length}
                                    className="border border-white px-4 py-2 font-bold align-top"
                                  >
                                    {inst.sl}
                                  </td>
                                )}

                                {index === 0 && (
                                  <td
                                    rowSpan={inst.innovations.length}
                                    className="border border-white px-4 py-2 font-bold align-top"
                                  >
                                    {inst.institute}
                                  </td>
                                )}

                                <td className="border border-white px-4 py-2 text-left">
                                  {inv.name}
                                </td>

                                <td className="border border-white px-4 py-2">
                                  <a
                                    href={inv.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-400 underline font-medium"
                                  >
                                    Link
                                  </a>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="w-full lg:w-2/3 text-white">
                  <div className="rounded-lg overflow-hidden border border-white">
                    <div className="max-h-[400px] lg:max-h-[550px] overflow-y-auto overflow-x-auto custom-scrollbar">
                      <table className="w-full border-collapse bg-[#1d1e5d] text-white text-center">
                        <thead className="sticky top-0 bg-[#1d1e5d] z-10 border-b border-white">
                          <tr>
                            <th
                              colSpan="8"
                              className="border border-white py-3 font-bold text-lg bg-[#1d1e5d]"
                            >
                              Innovation Submission Data till 228 Innovation
                            </th>
                          </tr>

                          <tr>
                            <th
                              rowSpan="2"
                              className="border border-white px-4 py-2 bg-[#1d1e5d]"
                            >
                              Sl. No.
                            </th>
                            <th
                              rowSpan="2"
                              className="border border-white px-4 py-2 bg-[#1d1e5d]"
                            >
                              Institute Name
                            </th>
                            <th
                              colSpan="5"
                              className="border border-white px-4 py-2 bg-[#1d1e5d]"
                            >
                              Thematic Areas
                            </th>
                            <th
                              rowSpan="2"
                              className="border border-white px-4 py-2 bg-[#1d1e5d]"
                            >
                              Total No. of Innovation Submitted
                            </th>
                          </tr>

                          <tr>
                            <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
                              AI/ML
                            </th>
                            <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
                              Semiconductor
                            </th>
                            <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
                              Earth Science
                            </th>
                            <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
                              Materials Science
                            </th>
                            <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
                              Health Care
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {logos.tableData.map((item) => (
                            <tr key={item.sl}>
                              <td className="border border-white px-4 py-2">
                                {item.sl}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.institute}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.aiml}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.semiconductor}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.earthScience}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.materialsScience}
                              </td>
                              <td className="border border-white px-4 py-2">
                                {item.healthCare}
                              </td>
                              <td className="border border-white px-4 py-2 font-semibold">
                                {item.total}
                              </td>
                            </tr>
                          ))}

                          {/* ✅ Total Row Bottom */}
                          <tr className="font-bold bg-[#1d1e5d] sticky bottom-0">
                            <td
                              colSpan="2"
                              className="border border-white px-4 py-2"
                            >
                              Total
                            </td>
                            <td className="border border-white px-4 py-2">47</td>
                            <td className="border border-white px-4 py-2">21</td>
                            <td className="border border-white px-4 py-2">27</td>
                            <td className="border border-white px-4 py-2">47</td>
                            <td className="border border-white px-4 py-2">86</td>
                            <td className="border border-white px-4 py-2">
                              228
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ================= END RIGHT SIDE ================= */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;

