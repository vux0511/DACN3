import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../scss/Admin.scss";

function App() {
    return (
        <div className="main-container">
            <Header />
            <Sidebar />
            <Home />
        </div>
    );
}

export default App;
