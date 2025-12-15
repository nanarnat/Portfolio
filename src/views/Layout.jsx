import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <div className="bg-indigo-400">
      <Navbar />
      <section className= "flex justify-center">
        <Outlet />
      </section>
    </div>
  );
}
