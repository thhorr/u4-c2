import React from "react"
import "./App.css"
import Inventory from "./components/InventoryApp"
 
function App() {
  return (
    <div className = "App">
      <span className="title">Inventory List</span><br />
      <Inventory/>
    </div>
  )
}

export default App;