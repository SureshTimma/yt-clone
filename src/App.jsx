import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
