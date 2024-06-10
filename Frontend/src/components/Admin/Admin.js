import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoginAdmin from "./LoginAdmin";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

import "boxicons";

function App() {
    const cookies = new Cookies();
    const [admin, setAdmin] = useState("");

    useEffect(() => {
        if (cookies.get("admin")) {
            setAdmin(cookies.get("admin").idAdmin);
        }
    });

    return (
        <>
            {admin === "" ? (
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
