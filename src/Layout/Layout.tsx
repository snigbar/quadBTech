import { Link } from "react-router-dom";
import { TChildren } from "../interfaces/interfaces";

export default function Layout({ children }: TChildren) {
  return (
    <>
      <div className="py-4 px-6 flex justify-between items-center bg-indigo-500">
        <p className="text-2xl text-white font-semibold">My Shows</p>
        <Link to="/my-bookings">
          <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            My Bookings
          </button>
        </Link>
      </div>
      <div className="contianer mx-auto flex justify-center items-center p-2 min-h-screen my-6">
        {children}
      </div>
    </>
  );
}
