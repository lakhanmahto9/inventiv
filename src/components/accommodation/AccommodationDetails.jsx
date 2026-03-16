import React from "react";

const hotelData = [
  {
    sl: 1,
    hotel: "Hotel The Venue",
    contact: "Mr. Anish (9153989053/54)",
    base: "Executive (Available: 3)",
    basePrice: "2362",
    medium: "CLUB (Available: 6)",
    mediumPrice: "3307",
    premium: "SILVER (Available: 2)",
    premiumPrice: "4252",
    luxury: "NA",
    luxuryPrice: "NA",
    extraBed: "400 per bed",
    extraPerson: "500",
    transport: "Chargeable",
    distance: "ISM: 1 KM | Rly. Stn. 1.5 KM",
    breakfast: "Yes",
    checkin: "05:00",
    checkout: "11:30",
    remarks: "Booking confirmation 3 days in advance with 50% payment",
  },
  {
    sl: 2,
    hotel: "Hotel Coal Capital",
    contact: "Mr. Ravit Gangwar",
    base: "Club",
    basePrice: "2500 (Single)/2800 (Double)",
    medium: "Business",
    mediumPrice: "2800 (Single)/3200 (Double)",
    premium: "NA",
    premiumPrice: "NA",
    luxury: "NA",
    luxuryPrice: "NA",
    extraBed: "-",
    extraPerson: "-",
    transport: "No Pickup/Drop",
    distance: "-",
    breakfast: "Yes",
    checkin: "-",
    checkout: "-",
    remarks: "15% Discount on food & Laundry",
  },
  {
    sl: 3,
    hotel: "Hotel Lexus Inn, Dhanbad",
    contact: "Mr. Basant Kumar (8877922226/3/5)",
    base: "Delux",
    basePrice: "2889 (Single)/ 3144 (Double) Excluding GST",
    medium: "Premium",
    mediumPrice: "3144 (Single)/ 3484 (Double) Excluding GST",
    premium: "Premium Delux",
    premiumPrice: "3484 (Single)/ 3765 (Double) Excluding GST",
    luxury: "Suite",
    luxuryPrice: "5949",
    extraBed: "-",
    extraPerson: "-",
    transport: "Chargeable",
    distance: "-",
    breakfast: "Yes",
    checkin: "-",
    checkout: "-",
    remarks: "-",
  },
  {
    sl: 4,
    hotel: "Clarks Inn Suites, Dhanbad",
    contact: "Mr. Indranil Roy (9296798350)",
    base: "Premium (Total Rooms: 72) ",
    basePrice: "3800 (Single)/ 4200 (Double) Excluding GST",
    medium: "CLUB (Total Rooms: 15",
    mediumPrice: "4000 (Single)/ 4400 (Double) Excluding GST",
    premium: "NA",
    premiumPrice: "NA",
    luxury: "Suite (Total Rooms: 04)",
    luxuryPrice: "7000    Excluding GST",
    extraBed: "800",
    extraPerson: "NA",
    transport:
      "NAFor Pick Up and Drop to IIT (ISM) DHANBAD from the hotel and back, We can organize a vehicle on Shuttle basis (min 03 persons) at an additional charge of Rs.1000.00 + GST per person.",
    distance: "ISM: 1 KM:      Rly. Stn. 6 KM",
    breakfast: "Yes",
    checkin: "12:00 PM",
    checkout: "10:00 AM",
    remarks: "-",
  },
  {
    sl: 5,
    hotel: "Cocoon Luxury Business Hotel Dhanbad",
    contact:
      "Rakesh Kumar Mahato (9931852333 /9771494505/ 9771494504/9973747333)",
    base: "Imperial Room ",
    basePrice: "3900 (Single)/ 4800 (Double) Excluding GST",
    medium: "Knight Room ",
    mediumPrice: "4350 (Single)/ 5250 (Double) Excluding GST",
    premium: "NA",
    premiumPrice: "NA",
    luxury: "NA",
    luxuryPrice: "NA",
    extraBed: "-",
    extraPerson: "-",
    transport: "Complimentary Morning Drop and Evening Pickup",
    distance: "-",
    breakfast: "Yes",
    checkin: "12:00 PM",
    checkout: "12:00 PM",
    remarks: "Early booking recommended",
  },
  {
    sl: 6,
    hotel: "The Grand Mirage, Dhanbad (Radisson Individuals)",
    contact: "Alok Choubey (+91 7281000333)",
    base: "Deluxe Room",
    basePrice:
      "4000 AI (Single Breakfast) / 5000 AI (Double Breakfast) / 4500 AI (Single Breakfast + 1 Meal) / 6000 AI (Double Breakfast + 1 Meal)",
    medium: "Executive Suite Room",
    mediumPrice:
      "6000 AI (Single Breakfast) / 7000 AI (Double Breakfast) / 6500 AI (Single Breakfast + 1 Meal) / 8000 AI (Double Breakfast + 1 Meal)",
    premium: "Premium Suite Room",
    premiumPrice:
      "7000 AI (Single Breakfast) / 8000 AI (Double Breakfast) / 9500 AI (Single Breakfast + 1 Meal) / 11000 AI (Double Breakfast + 1 Meal)",
    luxury: "NA",
    luxuryPrice: "NA",
    extraBed: "-",
    extraPerson: "-",
    transport: "Chargeable",
    distance: "-",
    breakfast: "Yes",
    checkin: "-",
    checkout: "-",
    remarks:
      "We regret to inform that complimentary pickup and drop facility is not available.",
  },
];

export default function AccommodationDetails() {
  return (
    <div className="bg-[#1c1f5c] min-h-screen p-4 md:p-16 text-white">
      <h1 className="text-2xl md:text-5xl font-bold text-orange-400 mb-6">
        Accommodation Details
      </h1>

      {/* Gradient Border */}
      <div className="bg-gradient-to-r from-blue-500 via-[#ffa343] to-red-500 p-[2px] rounded-xl">
        {/* Inner Container */}
        <div className="bg-[#1c1f5c] rounded-xl p-4">
          <div className="border border-gray-300 rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#262a6d]">
                <tr>
                  <th className="border p-3">Sl No</th>
                  <th className="border p-3">Hotel</th>
                  <th className="border p-3">Contact</th>
                  <th className="border p-3">Base</th>
                  <th className="border p-3">Base Price</th>
                  <th className="border p-3">Medium</th>
                  <th className="border p-3">Medium Price</th>
                  <th className="border p-3">Premium</th>
                  <th className="border p-3">Premium Price</th>
                  <th className="border p-3">Luxury</th>
                  <th className="border p-3">Luxury Price</th>
                  <th className="border p-3">Extra Bed</th>
                  <th className="border p-3">Extra Person</th>
                  <th className="border p-3">Transport</th>
                  <th className="border p-3">Distance</th>
                  <th className="border p-3">Breakfast</th>
                  <th className="border p-3">Check-In</th>
                  <th className="border p-3">Check-Out</th>
                  <th className="border p-3">Remarks</th>
                </tr>
              </thead>

              <tbody>
                {hotelData.map((row) => (
                  <tr key={row.sl} className="hover:bg-[#2b2f7a]">
                    <td className="border p-2 text-center">{row.sl}</td>
                    <td className="border p-2">{row.hotel}</td>
                    <td className="border p-2">{row.contact}</td>
                    <td className="border p-2">{row.base}</td>
                    <td className="border p-2">{row.basePrice}</td>
                    <td className="border p-2">{row.medium}</td>
                    <td className="border p-2">{row.mediumPrice}</td>
                    <td className="border p-2">{row.premium}</td>
                    <td className="border p-2">{row.premiumPrice}</td>
                    <td className="border p-2">{row.luxury}</td>
                    <td className="border p-2">{row.luxuryPrice}</td>
                    <td className="border p-2">{row.extraBed}</td>
                    <td className="border p-2">{row.extraPerson}</td>
                    <td className="border p-2">{row.transport}</td>
                    <td className="border p-2">{row.distance}</td>
                    <td className="border p-2">{row.breakfast}</td>
                    <td className="border p-2">{row.checkin}</td>
                    <td className="border p-2">{row.checkout}</td>
                    <td className="border p-2">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
