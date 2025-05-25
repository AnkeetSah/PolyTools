const Dropdown = ({ label, options, onChange }) => (
  <select
    onChange={onChange}
    className="w-full font-medium max-w-xs bg-purple-50 border outline-0 border-purple-300 text-purple-800 text-sm rounded-lg block p-3 pr-10 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:border-purple-400"
  >
    <option value="default" className="text-gray-400">
      {label}
    </option>
    {options.map((opt, index) => (
      <option key={index} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default Dropdown;
