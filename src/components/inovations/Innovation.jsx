// import { logos } from "../../utils/logo";
// import { motion } from "framer-motion";
// import React, { useMemo, useState } from "react";

// const Innovation = () => {
//  const [sortConfig, setSortConfig] = useState({
//   key: "total",         // ✅ default sorting column
//   direction: "desc",    // ✅ default order (high → low)
// });

//   const handleSort = (key) => {
//     setSortConfig((prev) => {
//       if (prev.key === key) {
//         return {
//           key,
//           direction: prev.direction === "asc" ? "desc" : "asc",
//         };
//       }
//       return { key, direction: "asc" };
//     });
//   };

//  const sortedData = useMemo(() => {
//   if (!sortConfig.key) return logos.tableData;

//   return [...logos.tableData].sort((a, b) => {
//     const valA = Number(a[sortConfig.key] || 0);
//     const valB = Number(b[sortConfig.key] || 0);

//     return sortConfig.direction === "asc" ? valA - valB : valB - valA;
//   });
// }, [logos.tableData, sortConfig]);

//   return (
//     <section id="innovation">
//       <div className="min-h-screen bg-[#1d1e5d]">
//         <div className="p-4 lg:p-16 bg-[#1d1e5d]">
//           <motion.p
//             className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Innovations
//           </motion.p>

//           {/* ✅ Gradient Border Wrapper */}
//           <div className="relative rounded-2xl p-[2px] overflow-hidden">
//             {/* ✅ Gradient border layer */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

//             {/* ✅ Inner content box */}
//             <div className="relative rounded-2xl bg-[#1d1e5d] p-4 lg:p-6">
//               {/* ✅ Responsive Layout */}
//               <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
//                 {/* ================= RIGHT SIDE ================= */}
//                 <div className="w-full text-white">
//                   <div className="rounded-lg overflow-hidden border border-white">
//                     <div className="max-h-[600px] lg:max-h-[660px] overflow-y-auto overflow-x-auto custom-scrollbar">
//                       <table className="w-full border-collapse bg-[#1d1e5d] text-white text-center">
//                         <thead className="sticky top-0 bg-[#1d1e5d] z-10 border-b border-white">
//                           <tr>
//                             <th
//                               colSpan="8"
//                               className="border border-white py-3 font-bold text-lg bg-[#1d1e5d]"
//                             >
//                               Innovation Submission Data till 228 Innovation
//                             </th>
//                           </tr>

//                           <tr>
//                             <th
//                               rowSpan="2"
//                               className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                             >
//                               Sl. No.
//                             </th>
//                             <th
//                               rowSpan="2"
//                               className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                             >
//                               Institute Name
//                             </th>
//                             <th
//                               colSpan="5"
//                               className="border border-white px-4 py-2 bg-[#1d1e5d]"
//                             >
//                               Thematic Areas
//                             </th>
//                             <th
//                               rowSpan="2"
//                               onClick={() => handleSort("total")}
//                               className="border border-white px-4 py-2 bg-[#1d1e5d] cursor-pointer select-none hover:bg-[#2a2b75]"
//                             >
//                               Total no. of innovations
//                               {sortConfig.key === "total" && (
//                                 <span className="ml-2">
//                                   {sortConfig.direction === "asc" ? "▲" : "▼"}
//                                 </span>
//                               )}
//                             </th>
//                           </tr>

//                           <tr>
//                             <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                               AI/ML
//                             </th>
//                             <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                               Semiconductor
//                             </th>
//                             <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                               Earth Science
//                             </th>
//                             <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                               Materials Science
//                             </th>
//                             <th className="border border-white px-4 py-2 bg-[#1d1e5d]">
//                               Health Care
//                             </th>
//                           </tr>
//                         </thead>

//                         <tbody>
//                           {sortedData.map((item,index) => (
//                             <tr key={index}>
//                               <td className="border border-white px-4 py-2">
//                                 {index+1}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.institute}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.aiml}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.semiconductor}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.earthScience}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.materialsScience}
//                               </td>
//                               <td className="border border-white px-4 py-2">
//                                 {item.healthCare}
//                               </td>
//                               <td className="border border-white px-4 py-2 font-semibold">
//                                 {item.total}
//                               </td>
//                             </tr>
//                           ))}

//                           {/* ✅ Total Row Bottom */}
//                           <tr className="font-bold bg-[#1d1e5d] sticky bottom-0">
//                             <td
//                               colSpan="2"
//                               className="border border-white px-4 py-2"
//                             >
//                               Total
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               47
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               21
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               27
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               47
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               86
//                             </td>
//                             <td className="border border-white px-4 py-2">
//                               228
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>

//                 {/* ================= END RIGHT SIDE ================= */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Innovation;

import { logos } from "../../utils/logo";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

const Innovation = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "total",
    direction: "desc",
  });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return logos.tableData;

    return [...logos.tableData].sort((a, b) => {
      const valA = Number(a[sortConfig.key] || 0);
      const valB = Number(b[sortConfig.key] || 0);

      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    });
  }, [logos.tableData, sortConfig]);

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
            Innovations
          </motion.p>

          {/* Gradient Border */}
          <div className="relative rounded-2xl p-[2px] overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            <div className="relative rounded-2xl bg-[#1d1e5d] p-4 lg:p-6">
              <div className="w-full">
                <div className="rounded-xl overflow-hidden border border-white">
                  <div className="max-h-[600px] lg:max-h-[660px] overflow-y-auto overflow-x-auto custom-scrollbar">
                    <table className="w-full border-separate border-spacing-0 bg-[#1d1e5d] text-white text-center text-sm lg:text-base">
                      <thead className="sticky top-0 bg-[#1d1e5d] z-20 shadow-md border-b border-white">
                        <tr>
                          <th
                            colSpan="8"
                            className="border border-white py-3 font-bold text-lg"
                          >
                            Innovation Submission Data till 228 Innovations
                          </th>
                        </tr>

                        <tr>
                          <th
                            rowSpan="2"
                            className="border border-white px-3 py-2 lg:px-4"
                          >
                            Sl. No.
                          </th>
                          <th
                            rowSpan="2"
                            className="border border-white px-3 py-2 lg:px-4"
                          >
                            Institute Name
                          </th>
                          <th
                            colSpan="5"
                            className="border border-white px-3 py-2 lg:px-4"
                          >
                            Thematic Areas
                          </th>
                          <th
                            rowSpan="2"
                            onClick={() => handleSort("total")}
                            className="border border-white px-3 py-2 lg:px-4 cursor-pointer select-none hover:bg-[#2a2b75]"
                          >
                            Total no. of innovations
                            {sortConfig.key === "total" && (
                              <span className="ml-2">
                                {sortConfig.direction === "asc" ? "▲" : "▼"}
                              </span>
                            )}
                          </th>
                        </tr>

                        <tr>
                          <th className="border border-white px-3 py-2 lg:px-4">
                            AI/ML
                          </th>
                          <th className="border border-white px-3 py-2 lg:px-4">
                            Semiconductor
                          </th>
                          <th className="border border-white px-3 py-2 lg:px-4">
                            Earth Science
                          </th>
                          <th className="border border-white px-3 py-2 lg:px-4">
                            Materials Science
                          </th>
                          <th className="border border-white px-3 py-2 lg:px-4">
                            Health Care
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {sortedData.map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-[#2a2b75] transition-colors even:bg-[#1f2068]"
                          >
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {index + 1}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.institute}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.aiml}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.semiconductor}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.earthScience}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.materialsScience}
                            </td>
                            <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                              {item.healthCare}
                            </td>
                            <td className="border border-white px-3 py-2 lg:px-4 font-semibold">
                              {item.total}
                            </td>
                          </tr>
                        ))}

                        {/* Sticky Total Row */}
                        <tr className="font-bold bg-[#23246e] sticky bottom-0 shadow-inner">
                          <td
                            colSpan="2"
                            className="border border-white px-3 py-2 lg:px-4"
                          >
                            Total
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            47
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            21
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            27
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            47
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            86
                          </td>
                          <td className="px-3 py-2 lg:px-4 border-b border-white/30">
                            228
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
