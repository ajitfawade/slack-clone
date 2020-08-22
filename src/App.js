import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming conventions
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React Router -> Chat Screen */}
      </div>
    </div>
  );
}

export default App;
