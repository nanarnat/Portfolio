import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <div className="bg-[url('../public/images/Forest.jpg')] bg-no-repeat bg-cover">
      <Navbar />
      <section className= "flex justify-center">
        <Outlet />
      </section>
    </div>
  );
}
