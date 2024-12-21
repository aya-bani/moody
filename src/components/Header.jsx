import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#F9F9F9] shadow-lg p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#572907]">Mood Journal</h1>
      <nav className="flex items-center space-x-6">
        <Link to="/notes-table">
          <button className="bg-[#de9014] text-white rounded-full py-3 px-6 text-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#da8810] focus:ring-opacity-50">
            Consult Your Notes
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
