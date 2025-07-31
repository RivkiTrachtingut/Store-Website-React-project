

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsyncAction } from "../redux/thank";
import loadingIcon from "..//assets/Spinner-1s-200px.gif";
import errorIcon from "..//assets/error.jpg";
import Product from "./Product";

const CatalogProduct = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    return (
        <div className="container mt-400 text-center" style={{ height: "50vh" }}>
            <h1 style={{ width: "190vh" }}>Product List</h1>
            <div className="d-flex justify-content-center align-items-center" style={{ width: "190vh" }}>
                {loading && <img src={loadingIcon} />}
                {error && <img src={errorIcon} />}
            </div>
            <div className="row justify-content-center" style={{ width: "190vh" }}>
                {productList.length > 0 &&
                    productList.map((product, index) => {
                        return (
                            <Product key={index} productt={product} />
                        );
                    })}
            </div>
        </div>
    );
}
export default CatalogProduct;