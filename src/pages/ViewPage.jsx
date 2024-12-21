import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ViewPage = () => {
  const { id } = useParams(); 
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const noteRef = doc(db, "notes", id);
      const noteSnapshot = await getDoc(noteRef);
      if (noteSnapshot.exists()) {
        setNote({
          id: noteSnapshot.id,
          ...noteSnapshot.data(),
        });
      } else {
        console.log("No such document!");
      }
    };
    fetchNote();
  }, [id]);

  if (!note) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="p-8 bg-gradient-to-r from-[#f7e7b2] via-[#f0c27b] to-[#f2a65a] min-h-screen flex items-center justify-center">
    <div className="p-6 bg-white rounded-xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5 shadow-2xl shadow-[#f7e7b2]/50">
      <div className="p-6 bg-white flex flex-col space-y-4 border-2 rounded-xl border-[#f7e7b2] h-full">
        <div className="text-right text-[#b3541e] italic font-semibold">
          {new Date(note.createdAt.seconds * 1000).toLocaleString()}
        </div>
        <div className="space-y-2 text-[#733a00]">
          <p className="text-xl font-bold">✨ Title: <span className="font-light">{note.title}</span></p>
          <p className="text-lg font-semibold">🌤 Mood: <span className="font-light">{note.mood}</span></p>
          <p className="text-lg font-semibold">🌹 Reason: <span className="font-light">{note.reason}</span></p>
          <p className="text-lg font-semibold">📝 Note: <span className="font-light">{note.note}</span></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewPage;
