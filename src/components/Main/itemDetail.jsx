import Counter from './counter';
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
    return (
        <main className="containerDetail">
            <h1 className="titleDetail">{item.name}</h1>
            <div className="imgContainerDetail">
                <img className="itemImgDetail" alt={item.name} src={item.src} />
            </div>
            <aside className="aside">
                <p className="description">{item.description}</p>
                <span className="price">USD {item.price}</span>
                <Counter stock={item.stock} />
                <Link className="btnDetail" to={`/`}>
                    Go back
                </Link>
            </aside>
        </main>
    );
};

export default ItemDetail;