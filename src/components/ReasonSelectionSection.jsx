import { reasons } from "C:/Users/Aya Bani/projets/moody/data.jsx"; 
import { useState } from "react";
import { ReasonsCard } from "./ReasonsCard";

const ReasonSelectionSection = ({ setSelectedReason }) => {
  const [localReasonIndex, setLocalReasonIndex] = useState(null);

  const handleCardClick = (index, reason) => {
    setLocalReasonIndex(index);
    setSelectedReason(reason);
  };

  return (
    <div className="w-full bg-[#F9F9F9] p-4 mb-10">
      <p className="text-3xl font-semibold mb-6 text-[#de9014] text-center" style={{ color: "#572907" }}>
        What’s affecting your mood?
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
        {reasons.map((reason, index) => (
          <ReasonsCard 
            key={index} 
            reason={reason} 
            isActive={localReasonIndex === index}
            onClick={() => handleCardClick(index, reason)}
          />
        ))}
      </div>
    </div>
  );
};
export default ReasonSelectionSection;
