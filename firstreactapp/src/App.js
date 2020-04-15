import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Sidebar";
import CardBootstrap from "./CardBootstrap";
import CarouselBootstrap from "./CarouselBootstrap";

//starting new component
function App() {
  return (
    <div className="app">
      <h1>This is my first react App motherfuckers!</h1>
      <Header />
      <Sidebar />
      <CardBootstrap />
      <CardBootstrap />
      <CarouselBootstrap />
    </div>
  );
}

export default App;
