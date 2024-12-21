import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListOfJournals from "./pages/ListOfJournals.jsx";
import MoodJournal from "./pages/MoodJournal.jsx";
import ViewPage from "./pages/ViewPage.jsx";
const MoodJournalApp = () => {
  return (
    <Router>
      <div className="bg-[#F9F9F9] font-playfair">
        
        <Routes>
          <Route path="/" element={<MoodJournal />} />
          <Route path="/notes-table" element={<ListOfJournals />} />
          <Route path='/view/:id' element = {<ViewPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default MoodJournalApp;
