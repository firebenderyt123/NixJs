import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "@core/store/actions/product";
import { ProductCard, Loader } from "../";
import "./styles.scss";

const ProductsList = ({ loading, products, loadProducts }) => {
    useEffect(() => {
        loadProducts();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="products__container mx-auto w-75">
            <div className="products__list row">
                <div className="col-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: state.products.loading.products,
    products: state.products.products,
});

const mapDispatchToProps = {
    loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
