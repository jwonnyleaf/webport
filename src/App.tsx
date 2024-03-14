import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-color-canvas">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
