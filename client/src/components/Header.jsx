import { RiSearchLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center sm:w-64">
          <RiSearchLine className="text-slate-600 mr-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24"
          />
        </form>

        <nav>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>

            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full w-7 h-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="text-slate-700 hover:underline">Sign in</li>
              )}
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
