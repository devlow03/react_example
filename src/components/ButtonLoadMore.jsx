/* eslint-disable react/prop-types */
const ButtonLoadMore = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 m-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300  ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonLoadMore;
