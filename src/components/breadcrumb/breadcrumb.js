import React from "react";

const BreadCrumb = () => {
    return (
        <nav aria-label="breadcrumb py-2">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                </ol>
            </div>
        </nav>
    );
};

export default BreadCrumb;