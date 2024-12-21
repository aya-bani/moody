import { useState } from "react";
import MoodSelectionSection from "../components/MoodSelectionSection.jsx";
import ReasonSelectionSection from "../components/ReasonSelectionSection.jsx";
import NoteSection from "../components/NoteSection.jsx";
import Header from "../components/Header.jsx";

const MoodJournal = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <div className="bg-[#F9F9F9] font-playfair">
      <Header />
      <MoodSelectionSection setSelectedMood={setSelectedMood} />
      <ReasonSelectionSection setSelectedReason={setSelectedReason} />
      <NoteSection selectedMood={selectedMood} selectedReason={selectedReason} />
    </div>
  );
};

export default MoodJournal;
