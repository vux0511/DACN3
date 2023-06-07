import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "boxicons";
import "../../scss/Admin.scss";

function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <Home />
        </div>
    );
}

export default App;
