import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductTab from "./ProductTab";
import Product from "./Product";

function App() {
  return (
    <div> 
      <h2>Blockbuster Deals | Shop now</h2>
      <ProductTab />
    </div>
  );
}

export default App;
