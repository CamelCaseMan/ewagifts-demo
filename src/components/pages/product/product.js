import React, { useEffect, useState } from "react";
import BreadCrumb from "../../breadcrumb";
import { Link, useParams } from "react-router-dom";
import WooRestApi from "../../../services/woo-rest-api";

const Product = () => {

    const { id } = useParams();

    const wooRestApi = new WooRestApi();

    const [isLoading, setLoading] = useState( true );
    const [isError, setError] = useState( false );
    const [productData, updateProductData] = useState( [] );

    useEffect( () => {
        wooRestApi.get( `products/${ id }` )
            .then( response => {
                console.log( response );
                setLoading( false );
                updateProductData( response );
            } )
            .catch( ( error ) => {
                setLoading( false );
                setError( true );
            } );
    }, [] );

    if ( isLoading ) {
        return (
            <p>Loading...</p>
        );
    }

    if ( isError ) {
        return (
            <p>Error!</p>
        );
    }


    return (
        <div className="product-page">
            <nav aria-label="breadcrumb py-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{ productData.name }</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col">
                        <img className="w-100" src={ productData.images[0].src } alt="..." />

                    </div>
                    <div className="col">
                        <div className="product-page__information">
                            <div className="product-page__price price mb-1" dangerouslySetInnerHTML={ { __html: productData.price_html } }>

                            </div>
                            <h1 className="product-page__title fs-2">{ productData.name }</h1>
                            <p className="product-page__sku text-secondary">{ productData.sku }</p>
                            <p className="product-page__stock product-stock text-secondary">{ productData.stock_status }</p>
                            <div className="product-page__short-desc" dangerouslySetInnerHTML={ { __html: productData.short_description } }>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Product;