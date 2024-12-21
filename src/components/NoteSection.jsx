import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

export const NoteSection = ({ selectedMood, selectedReason }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const addNote = async () => {
    if (!title || !note) {
      alert("Please fill in both the title and note.");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "notes"), {
        title,
        note,
        mood: selectedMood,
        reason: selectedReason,
        createdAt: new Date(),
      });
      setTitle("");
      setNote("");
      alert("Note added successfully!");
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add the note.");
    }
    setLoading(false);
  };

  return (
    <section className="p-6 bg-white shadow-md rounded-3xl mx-4 md:mx-auto max-w-2xl transition-transform duration-200 hover:scale-105">
      <h2 className="text-3xl font-semibold mb-6 text-[#de9014] text-center">Capture Your Feelings ✍️
      </h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 border border-[#de9014] rounded-full text-[#572907] placeholder-[#de9014] focus:ring-2 focus:ring-[#de9014] transition-shadow"
      />
      <textarea
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-3 mb-4 border border-[#de9014] rounded-2xl text-[#572907] placeholder-[#de9014] focus:ring-2 focus:ring-[#de9014] transition-shadow resize-none"
        rows="5"
      />
      <button
        onClick={addNote}
        disabled={loading}
        className={`w-full py-3 rounded-full text-lg font-semibold text-white ${
          loading ? "bg-gray-400" : "bg-[#de9014] hover:bg-[#c87c0b] shadow-lg"
        } transition-all duration-200`}
      >
        {loading ? "Saving..." : "Save Note"}
      </button>
    </section>
  );
};

export default NoteSection;
