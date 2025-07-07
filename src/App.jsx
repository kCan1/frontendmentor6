import "./App.css";
import FourCard from "./components/FourCard";
import Header from "./components/card/Header";

function App() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <section
          id="fourcard"
          className="font-primary text-center md:justify-center md:items-center flex flex-col my-20"
        >
          <Header />
          <FourCard />
        </section>
      </main>
    </>
  );
}

export default App;
