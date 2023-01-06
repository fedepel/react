import { data } from "../assets/data/data.js";
import Item from "../Main/item.jsx";

function ItemList() {

    const products = data;

    return (
        <main className="container">
            {products.map((product) => (
                <Item product={product} key={product.id}/>
            ))}
        </main>
    );
}

export default ItemList;