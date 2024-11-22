import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
