import React, { useEffect, useState } from 'react';
import ItemDetail from './itemDetail';
import { data } from '../assets/data/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const id = useParams();

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const itemFound = data.find(
                    (prod) => prod.id === id
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