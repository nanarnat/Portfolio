import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between px-10 items-center w-full h-14  bg-transparent  gap-x-10 text-2xl text-white ">
        <div className="flex justify-start px-10 items-center  h-14 gap-x-10">
        <li>
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-yellow-500">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-yellow-500">
            About Us
          </Link>
        </li>
        </div>
        <li >
          <Link to="/" className="hover:text-yellow-500">
            Play Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}
