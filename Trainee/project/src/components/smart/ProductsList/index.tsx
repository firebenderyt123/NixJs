import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productEffects } from "@store/effects";
import { ProductCard, Spinner, ErrorMessage } from "@components/simple";

const ProductsList = ({ loading, products, error, loadProducts }) => {
    useEffect(() => {
        loadProducts();
    }, []);

    const errorBlock = error ? <ErrorMessage /> : null;
    const spinnerBlock = loading ? <Spinner /> : null;
    const contentBlock = !(loading || error) ? (
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
        <div className="container products__container">
            <div className="products__list row">
                {errorBlock}
                {contentBlock}
                {spinnerBlock}
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
