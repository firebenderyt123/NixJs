import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@core/models";
import { Image } from "@components/ui";
import { FaCartPlus } from "react-icons/fa";
import "./styles.scss";

const ProductCard = ({ product }) => {
    const maxLength = 100;
    const description =
        product.description.length > maxLength
            ? product.description.substring(0, maxLength) + "..."
            : product.description;

    return (
        <div id={`product_${product.id}`} className="card product__card">
            <Image
                className="product__thumb card-img-top"
                src={product.thumb}
                alt={product.title}
            />
            <div className="card-body h-100 d-flex flex-column">
                <div className="product__info__container d-flex flex-column justify-content-between">
                    <h4 className="product__title card-title">
                        {product.title}
                    </h4>
                    <p className="product__description card-text">
                        {description}
                    </p>
                    <p className="product__price">
                        {product.price} {product.currency}
                    </p>
                </div>
                <div className="product__btn__container d-flex justify-content-between">
                    <button className="product__buy-btn button d-flex align-items-center">
                        <FaCartPlus className="me-1" />
                        Buy
                    </button>
                    <Link
                        className="product__view-btn button"
                        to={`products/:id=${product.id}`}
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
