import React from "react";
import './product-card.scss';
import { Link } from "react-router-dom";

const ProductCard = ( { data } ) => {
    return (
        <Link to={ `/product/${ data.id }` } className="card product-card text-decoration-none">
            <div className="card-img-top product-card__image-wrap">
                <img className="product-card__image" src={ data.images[0].src } alt="..." />
                <div className="product-card__badges position-absolute p-1 fs-5 text-center w-100">
                    {/* <div className="badge text-bg-warning mx-1">Sale</div>
                    <div className="badge bg-dark text-white mx-1">New</div> */}
                </div>
            </div>
            <div className="card-body p-4 text-center">
                <div className="product-card__price price mb-1" dangerouslySetInnerHTML={ { __html: data.price_html } }>
                </div>
                <h6 className="product-card__title">{ data.name }</h6>
                <p className="product-card__sku text-secondary">{ data.sku }</p>
                <p className="product-card__stock product-stock text-secondary">{ data.stock_status }</p>
            </div>
        </Link>
    );
};

export default ProductCard;