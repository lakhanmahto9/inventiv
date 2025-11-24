import React from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";


const Hosts = () => {
  const { id } = useParams();
  const hostId = Number(id);

  const content = [
    {
      id: 1,
      name: "IIT KHARAGPUR",
      logo: "/kgp03.jpg",
      heading: "ABOUT IIT KHARAGPUR",
      about: `The Indian Institute of Technology Kharagpur (IIT Kharagpur or IITKgp) is a public institute of technology, research university, and autonomous institute established by the Government of India in Kharagpur, West Bengal. Founded in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the Government of India.[4]
              The institute was initially established to train engineers after India attained independence in 1947. However, over the years, the institute's academic capabilities diversified with offerings in management, law, architecture, humanities, medicine, etc. The institute has an 8.7-square-kilometre (2,100-acre) campus and has about 22,000 residents.`,
      images: ["/imgi_19_IIT_Kharagpur_Logo.svg.png", "/kgp01.jpg", "/kgp02.jpg"],
    },
    {
      id: 2,
      name: "IIT(BHU) VARANASI",
      logo: "/bhu01.jpg",
      heading: "ABOUT IIT(BHU) VARANASI",
      about: `The Indian Institute of Technology (Banaras Hindu University) Varanasi (IIT-BHU) is a public technical university located in Varanasi, Uttar Pradesh, India. It is ranked amongst the most prestigious engineering institutions in the country. IIT (BHU) Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968. It was later designated an Indian Institute of Technology in 2012. IIT (BHU) Varanasi has 16 departments, 3 inter-disciplinary schools and a Humanities & Social Sciences Section. It is located inside the Banaras Hindu University Campus. It has overarching legacy with placements and considered amongst the tier elite engineering colleges in India alongside the other top 7 IITs.`,
      images: ["/bhu.png", "/bhu02.jpg", "/kgp02.jpg"],
    },

    {
      id: 3,
      name: "IIT(ISM) DHANBAD",
      logo: "/ism01.jpg",
      heading: "ABOUT IIT(ISM) DHANBAD",
      about: `The Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical university located in Dhanbad, India.
      Indian Institute of Technology Dhanbad is located in the mineral-rich region of India, in the city of Dhanbad. It is the third oldest institute (after IIT Roorkee, and IIT (BHU) Varanasi) which got converted into an IIT. It was established by British Indian Government on the lines of the Royal School of Mines - London, and was formally inaugurated on 9 December 1926 by Lord Irwin, the then Viceroy of India. It started as an institution to impart education in mining and mineral sciences, and today, has grown into a technical institution with various academic departments. IIT (ISM) Dhanbad admits its undergraduate students through Joint Entrance Examination (Advanced), previously IIT-JEE and postgraduate from Graduate Aptitude Test in Engineering (GATE) examination.
      On 25 May 2016, the Union Cabinet headed by Prime Minister Modi gave its approval to amend the Institutes of Technology Act, 1961 for conversion of ISM Dhanbad into an Indian Institute of Technology. The amendment was approved by Indian Parliament and upon Presidential assent, was notified in the Gazette of India on 10 August 2016.[10]`,
      images: ["/iitism-logo.png","/benner02.JPG", "/benner04.JPG", "/benner05.JPG"],
    },

    {
      id: 4,
      name: "IIT PATNA",
      logo: "/patna_benner.jpg",
      heading: "ABOUT IIT PATNA",
      about: `Indian Institute of Technology Patna (abbreviated IIT Patna or IITP) is one of the 23 IITs, located at Bihta near Patna, Bihar (India). It is recognized as an Institute of National Importance by the Government of India. It is one of the second generation IITs established by an Act of the Indian Parliament on 6 August 2008. The permanent campus of IIT Patna is located at Bihta which is approximately 30 km west of Patna and has been fully operational since 2015.`,
      images: ["/imgi_23_IIT-Patna.svg.png", "/iit_patna01.jpg", "/iit_patna2.jpg"],
    },
    {
      id: 5,
      name: "IIT BHUBANESWAR",
      logo: "/bhune_benner.jpg",
      heading: "ABOUT IIT BHUBANESWAR",
      about: `Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar or IITBbs) is a public technical university established by the government of India in 2008, located at Kansapada village, Khordha district, Odisha, India. It is located 24 km south of Bhubaneswar and 4 km from Jatni, but is named after Bhubaneswar.
              The institute admits students for bachelor's and master's programs via JEE Advanced and Graduate Aptitude Test in Engineering respectively. The permanent campus at Kansapada, Khordha District was inaugurated by prime minister Narendra Modi on 24 December 2018. The area of research are science, engineering and humanities.`,
      images: ["/public/imgi_6_iitb_bhubaneswar_logo .png", "/iit_bhune01.jpg", "/iit_bhune02.jpg"],
    },

  ];

  // find the matched item
  const host = content.find(item => item.id === hostId);

  return (
    <Layout>
      <div>
        {host ? (
          <div className='w-full'>
            <div
              className="relative w-full h-48 md:h-72 lg:h-80 overflow-hidden flex justify-center items-center"
              style={{
                backgroundImage: `url(${host.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay (optional) */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Centered Text */}
              <p className="absolute text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                {host.name}
              </p>
            </div>


            <div className='bg-[#E2F5FC] dark:bg-[#18254f]  px-8 lg:px-20 xl:px-60 py-10'>
              <p className='text-xl dark:text-white md:text-2xl font-bold'>{host.heading}</p>
              <div className='w-full flex gap-10 mt-4 flex-col lg:flex-row'>
                <div className='bg-[#E2F5FC] dark:bg-[#09153f] dark:border-gray-600 shadow-2xl p-4 border border-amber-50 rounded-2xl w-full lg:w-1/2'>
                  <p className='text-sm font-semibold dark:text-white'>{host.about}</p>
                </div>
                <div className='bg-[#E2F5FC] dark:bg-[#09153f] dark:border-gray-600 shadow-2xl w-full lg:w-1/2 flex flex-row gap-4 p-4
                rounded-2xl border border-amber-50 justify-center items-center overflow-hidden'>
                  {host.images.map((item, index) => (
                    <motion.img
                      key={index}
                      src={item}
                      alt=""
                      className="w-28 h-28 rounded-2xl dark:bg-white"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Host not found</p>
        )}
      </div>
    </Layout>
  );
};

export default Hosts;
