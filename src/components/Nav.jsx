import { menuItem } from "../constants/menu";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="text-blue-700 font-bold text-xl m-5">TMART</div>
        
        <div className="space-x-4">
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
        <SearchBar/>
      </div>
    </nav>
  );
};

export default NavBar;
