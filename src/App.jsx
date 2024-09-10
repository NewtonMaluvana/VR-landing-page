import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";
import { Features } from "./components/Features";
import { Booking } from "./components/Booking";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Banner />
      <Features />
      <Booking />
    </div>
  );
}

export default App;
