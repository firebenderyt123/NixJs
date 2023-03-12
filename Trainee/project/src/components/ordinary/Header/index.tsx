import React from "react";
import { Navigation } from "@components/simple";

const Header = () => {
    return (
        <div className="header_section position-sticky top-0">
            <div className="container-fluid p-0">
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
