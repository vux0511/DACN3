import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImgNotFound from "../../assets/not-found.jpg";

function NotFound() {
    return (
        <>
            <Header />
            <div className="not-found">
                <img src={ImgNotFound} alt="not-found" />
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
