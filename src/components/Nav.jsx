import { menuItem } from "../constants/menu";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">TMART</div>
        <div className="space-x-4">
          {menuItem.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-gray-300"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
