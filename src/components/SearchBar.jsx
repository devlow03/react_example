import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate("/search", { state: { searchTerm: searchTerm } }); // Truyền data
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleChange = (event) => {
  //   console.log(event.target.value)
  //   setSearchTerm(event.target.value); // Cập nhật state khi giá trị input thay đổi
  // };
  return (
    <form
      className="flex items-center border border-gray-300 bg-white rounded-lg px-5 py-1  max-w-sm"
      onSubmit={handleSubmit}
      method="GET"
    >
      <input
        value={searchTerm}
        onChange={handleChange}
        type="search"
        name="search"
        id="search"
        className="bg-white focus:outline-none  border-1 rounded-xl py-1 px-1 border-black"
        placeholder="Tìm kiếm"
      />
      <button type="submit">
        <FaSearch className="text-gray-500 size-4" />
      </button>
    </form>
  );
};

export default SearchBar;
