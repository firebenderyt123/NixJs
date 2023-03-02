import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@core/models";
import "./styles.scss";

import defaultThumb from "@images/Bootsy_black.png";

const ProductCard = ({ product }) => {
    let id = product.id;
    let thumb = product.thumb === undefined ? defaultThumb : product.thumb;
    let title = product.title;
    let description = product.description;
    let price = product.price;
    let currency = product.currency;

    return (
        <div id={`product_${id}`} className="card product__card">
            <img
                className="product__thumb card-img-top"
                src={thumb}
                alt={title}
            />
            <div className="card-body">
                <h2 className="product__title card-title">{title}</h2>
                <p className="product__description card-text">{description}</p>
                <p className="product__price">
                    {price} {currency}
                </p>
                <div className="product__btn__container">
                    <button className="btn btn-color1">Buy</button>
                    <Link className="btn btn-color1" to={`products/?id=${id}`}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
