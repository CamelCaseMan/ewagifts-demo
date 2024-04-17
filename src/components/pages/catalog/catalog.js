import React from "react";
import BreadCrumb from "../../breadcrumb";
import ProductList from "../../product-list";
import { Link } from "react-router-dom";


const Catalog = () => {
    return (
        <div className="catalog-page">
            <nav aria-label="breadcrumb py-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h1 className="mb-3">Catalog</h1>
                        No filters available
                    </div>
                    <div className="col-9">
                        <div className="sort-buttons d-flex justify-content-end mb-4">

                            <select class="form-select w-auto" aria-label="Large select example">
                                <option selected>Sortuj</option>
                                <option value="1">Od ceny najniższej</option>
                                <option value="2">Od ceny najwyższej</option>
                                <option value="2">Od najnowszych</option>
                            </select>
                        </div>
                        <ProductList />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Catalog;