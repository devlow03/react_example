import { menuItem } from "../constants/menu";
import SearchBar from "./SearchBar";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 sticky top-0 z-10 ">
      <div className="container mx-auto flex justify-around  items-center">
        <div className="text-blue-700 font-bold  m-5 text-3xl">TMART</div>
        
        <div className="space-x-16">
          {menuItem.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-black hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-5">
        <SearchBar/>
        <MdFavoriteBorder className="size-7"/>
        <IoCartOutline className="size-7"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
