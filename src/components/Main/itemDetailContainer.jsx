import ItemDetail from './itemDetail';
import { data } from '../assets/data/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/main.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const itemFound = data.find(
                    (prod) => prod.id === parseInt(id)
                );
                setTimeout(() => {
                    res(itemFound);
                }, 500);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;