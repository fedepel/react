import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="mainContainer">
            <h1 className="mainTitle">Your cart</h1>
            <p>Nothing on cart yet.</p>
            <Link className="btnDetail" to={`/`}>
                Go back
            </Link>
        </div>
    );
};

export default Cart;