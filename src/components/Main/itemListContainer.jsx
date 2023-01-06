import ItemList from './itemList';
import { data } from "../assets/data/data.js";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/main.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const dataFilter = data.filter(
                    (prod) => prod.category === categoryName
                );
                const itemList = categoryName ? dataFilter : data;
                setTimeout(() => {
                    res(itemList);
                }, 500);
            });
        };

        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <ItemList items={items} />
    );
}

export default ItemListContainer;