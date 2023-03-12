import React from "react";
import Link from "next/link";
import { Image } from "@components/ui";
import { FaCartPlus, FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const maxLength = 100;
    const description =
        product.description.length > maxLength
            ? product.description.substring(0, maxLength) + "..."
            : product.description;

    return (
        <div id={`product_${product.id}`} className="card product__card">
            <div className="d-flex image-block position-relative overflow-hidden h-100 rounded-top">
                <Link href={`products/:id=${product.id}`}>
                    <Image
                        className="product__thumb card-img-top"
                        src={product.thumb}
                        alt={product.title}
                    />
                </Link>
            </div>
            <div className="card-body h-100 d-flex flex-column">
                <div className="product__info__container d-flex flex-column justify-content-between">
                    <h4 className="product__title card-title">
                        <Link
                            href={`products/:id=${product.id}`}
                            className="text-color1"
                        >
                            {product.title}
                        </Link>
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
                        href={`products/:id=${product.id}`}
                    >
                        <FaEye className="me-1" />
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
