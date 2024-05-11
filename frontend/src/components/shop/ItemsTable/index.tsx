import React, { useEffect } from 'react';

import ItemCard from "../ItemCard";
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reduxStore";
import { fetchAllItems } from "../../../store/features/shopSlice";
import AddItem from "../AddItem";
import { openModal } from "../../../store/features/modalSlice";
import Filter from "../FIlter";

function ItemsTable(props) {
    const dispatch = useDispatch();
    const { shopItems } = useSelector((state: RootState) => state.items);

    useEffect(() => {
            // @ts-ignore
        dispatch(fetchAllItems());
    }, []);

    const toggleModal = () => {
        dispatch(openModal({
            children: <AddItem/>,
            title: 'Add Item'
        }))
    }

    return (
        <div className="table-wrapper">
            <button className="new-item" onClick={toggleModal}>New item</button>
            <Filter/>
            <div className='items'>
                {shopItems && shopItems.map(item => <ItemCard
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    publishedOn={item.publishedOn}
                    publisher={item.publisher}
                />)}
            </div>
        </div>
    );
}

export default ItemsTable;