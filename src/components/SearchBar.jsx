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
      className="flex items-center bg-gray-100 rounded-md px-2 py-2 w-full max-w-sm"
      onSubmit={handleSubmit}
      method="GET"
    >
      <input
        value={searchTerm}
        onChange={handleChange}
        type="search"
        name="search"
        id="search"
        className="bg-gray-100 focus:outline-none w-full rounded-l-md py-2 px-2"
        placeholder="Tìm kiếm"
      />
      <button type="submit">
        <FaSearch className="text-gray-500 size-5" />
      </button>
    </form>
  );
};

export default SearchBar;
