import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@core/models";
import { Image } from "@components/ui";
import "./styles.scss";

const ProductCard = ({ product }) => {
    return (
        <div id={`product_${product.id}`} className="card product__card">
            <Image
                className="product__thumb card-img-top"
                src={product.thumb}
                alt={product.title}
            />
            <div className="card-body">
                <h2 className="product__title card-title">{product.title}</h2>
                <p className="product__description card-text">
                    {product.description}
                </p>
                <p className="product__price">
                    {product.price} {product.currency}
                </p>
                <div className="product__btn__container">
                    <button className="btn btn-color1">Buy</button>
                    <Link
                        className="btn btn-color1"
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
