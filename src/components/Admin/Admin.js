import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoginAdmin from "./LoginAdmin";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

import "boxicons";
import "../../scss/Admin.scss";

function App() {
    const cookies = new Cookies();
    const [idAdmin, setIdAdmin] = useState("");

    useEffect(() => {
        if (cookies.get("idAdmin")) {
            setIdAdmin(cookies.get("idAdmin").idAdmin);
        }
    });

    return (
        <>
            {idAdmin === "" ? (
                <div className="main-container">
                    <LoginAdmin />
                </div>
            ) : (
                <div className="main-container">
                    <Sidebar />
                    <Home />
                </div>
            )}
        </>
    );
}

export default App;
