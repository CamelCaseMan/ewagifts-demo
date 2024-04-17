import React, { useEffect, useState } from "react";
import ProductCard from "../product-card";
import WooRestApi from "../../services/woo-rest-api";

const ProductList = () => {
    const wooRestApi = new WooRestApi();

    const [isLoading, setLoading] = useState( true );
    const [isError, setError] = useState( false );
    const [productsList, updateProductsList] = useState( [] );

    useEffect( () => {
        wooRestApi.get( 'products', { per_page: 100 } )
            .then( response => {
                setLoading( false );
                updateProductsList( response );
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
        <div className="product-list mb-5">
            <div className="row row-cols-3 row-gap-4">
                {
                    productsList.map( ( product ) => {
                        return (
                            <div className="col" key={ product.id }>
                                <ProductCard data={ product } />
                            </div>
                        );
                    } )
                }

            </div>
        </div>
    );
};

export default ProductList;