import React, { useEffect } from "react";
import "./Error.scss";
import Footer from "../../COMPONENTS/FOOTER/Footer";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Error">
        <div className="Info">
            <h1>404</h1>
            <p>Not Found</p>
        </div>
        <div className="backHome"><a href="/">Back to Home</a></div>
        <div style={{ display: "flex" }}>
            <Footer />
        </div>
    </div>

);
};

export default Error;
