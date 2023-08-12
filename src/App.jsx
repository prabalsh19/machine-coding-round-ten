import { Outlet } from "react-router-dom";
import "./App.css";
import { Nav } from "./Component/Nav/Nav";

function App() {
  return (
    <main className="main">
      <Nav />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
