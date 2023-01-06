import { Link } from "react-router-dom";

function Item({ product }) {
    return (
        <div key={product.id} className="card">
            <p className="title">{product.name}</p>
            <div className="imgContainer">
                <img className="itemImg" alt={product.name} src={product.src} />
            </div>
            <span className="price">USD {product.price}</span>
            <Link className="btnDetail" to={`/detail/${product.id}`}>
                View details
            </Link>
        </div>
    );
}

export default Item;
