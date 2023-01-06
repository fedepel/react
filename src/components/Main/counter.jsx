import { useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="container-counter">
            <div className="counter">
                <button className="btnQ" onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button className="btnQ" disabled={cantidad === stock} onClick={sumar}>
                    +
                </button>
            </div>
            <Link className="btnDetail" to={``}>
                    Add to cart
                </Link>
        </div>
    );
};

export default Counter;