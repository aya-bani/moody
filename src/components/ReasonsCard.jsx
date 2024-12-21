export const ReasonsCard = ({ reason, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 
        ${isActive ? 'bg-[#de9014] text-white border-2 border-white shadow-lg' : 'bg-white text-[#de9014] border border-[#de9014] shadow-md'}`}
      style={{
        borderRadius:"60px",
        minWidth: '120px',
        boxShadow: isActive
          ? '0px 8px 20px rgba(222, 144, 20, 0.4)'
          : '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span className="font-bold text-lg">{reason}</span>
    </button>
  );
};
