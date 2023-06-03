import React from "react";
import "./NotFound.scss";
import ImgNotFound from "../../assets/not-found.jpg";

function NotFound() {
    return (
        <div className="not-found">
            <img src={ImgNotFound} alt="not-found" />
        </div>
    );
}

export default NotFound;
