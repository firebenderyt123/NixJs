import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5">
            <div className="spinner-border text-purple" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
