import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
