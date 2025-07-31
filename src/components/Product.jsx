
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/CartSlice'; 

const Product = ({ productt }) => {
    const dispatch = useDispatch();
    
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={productt.images[0]} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{productt.title}</h5>
                <h5 className="card-title">{productt.price}</h5>
                <p className="card-text">{productt.description}</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    const productData = { 
                        id: productt.id, 
                        title: productt.title, 
                        price: productt.price, 
                    };
                    dispatch(addToCart(productData)); 
                }}>Add</button>
            </div>
        </div>
    );
}
export default Product;