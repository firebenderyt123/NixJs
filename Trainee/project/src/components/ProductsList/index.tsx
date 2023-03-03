import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productEffects } from "@core/store/effects";
import { ProductCard, Spinner, ErrorMessage } from "@components/index";
import "./styles.scss";

const ProductsList = ({ loading, products, error, loadProducts }) => {
    useEffect(() => {
        loadProducts();
    }, []);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? (
        <>
            {products.map((product) => (
                <div
                    className="col-12 col-sm-6 col-lg-4 col-xxl-3 d-flex align-items-stretch p-2"
                    key={product.id}
                >
                    <ProductCard product={product} />
                </div>
            ))}
        </>
    ) : null;

    return (
        <div className="products__container mx-auto w-75">
            <div className="products__list row">
                {spinner}
                {content}
                {errorMessage}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: state.products.loading.products,
    products: state.products.products,
    error: state.products.error,
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(productEffects.loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
