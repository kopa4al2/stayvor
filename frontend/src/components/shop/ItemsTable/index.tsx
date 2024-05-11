import React, { useEffect } from 'react';

import ItemCard from "../ItemCard";
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reduxStore";
import { fetchAllItems } from "../../../store/features/shopSlice";

function ItemsTable(props) {
    const dispatch = useDispatch();
    const { shopItems } = useSelector((state: RootState) => state.items);

    useEffect(() => {
            // @ts-ignore
        dispatch(fetchAllItems());
    }, []);

    return (
        <div className='items'>
            {shopItems && shopItems.map(item => <ItemCard
                key={item.id}
                id={item.id}
                price={item.price}
                publishedOn={item.publishedOn}
                publisher={item.publisher}
            />)}
        </div>
    );
}

export default ItemsTable;