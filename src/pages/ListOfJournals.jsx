import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ListOfJournals = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    });
    return () => unsubscribe();
  }, []);

  const handleView = (noteId) => {
    navigate(`/view/${noteId}`);
  };

  const handleDelete = async (noteId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "notes", noteId));
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
        alert("Note deleted successfully!");
      } catch (error) {
        console.error("Error deleting note:", error);
        alert("Failed to delete the note. Please try again.");
      }
    }
  };

  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6 text-[#de9014] text-center">
        Your Notes List
      </h2>
      <table className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-[#de9014] text-white">
          <tr>
            <th className="p-4 text-left font-medium">Title</th>
            <th className="p-4 text-left font-medium">Mood</th>
            <th className="p-4 text-left font-medium">Reason</th>
            <th className="p-4 text-left font-medium">Date</th>
            <th className="p-4 text-center font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr
              key={note.id}
              className={`hover:bg-[#f9f5eb] transition-colors duration-300 ${
                index % 2 === 0 ? "bg-white" : "bg-[#f7f0df]"
              }`}
            >
              <td className="p-4 text-gray-700 border-b">{note.title}</td>
              <td className="p-4 text-gray-700 border-b">{note.mood}</td>
              <td className="p-4 text-gray-700 border-b">{note.reason}</td>
              <td className="p-4 text-gray-700 border-b">
                {new Date(note.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="p-4 text-center border-b">
                <button
                  className="mx-1 px-4 py-2 rounded-md bg-[#572907] text-white hover:bg-[#784421] transition-colors"
                  onClick={() => handleView(note.id)}
                >
                  View
                </button>
                <button
                  className="mx-1 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfJournals;
