import Item from "../Main/item.jsx";

function ItemList({items}) {
    return (
        <main className="container">
            {items.map((product) => (
                <Item product={product} key={product.id}/>
            ))}
        </main>
    );
}

export default ItemList;