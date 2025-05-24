
const SelectButton = ({ text, onClick, disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={false}
        className={`
          btn 
          px-4 py-2 rounded-md
          ${disabled 
            ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
            : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white cursor-pointer'
          }
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default SelectButton;
