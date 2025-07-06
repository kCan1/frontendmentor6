import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FourCard from "./components/FourCard";

function App() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <section id="fourcard">
          <FourCard />
        </section>
      </main>
    </>
  );
}

export default App;
