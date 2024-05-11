import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/features/shopSlice";

interface ItemState {
    price?: number,
    publisher?: string,
}

function AddItem() {
    const dispatch = useDispatch()
    const [itemState, setItemState] = useState<ItemState>({});
    const updatePrice = (price) => {
        setItemState({
            ...itemState,
            price
        })
    }

    const updatePublisher = (publisher) => {
        setItemState({
            ...itemState,
            publisher
        })
    }

    const insertItem = () => {
        // @ts-ignore
        dispatch(addItem(itemState))
    }


    return (
        <div>
            <div className="form-group">
                <label htmlFor="priceInput" className="label">Price:</label>
                <input
                    id='priceInput'
                    value={itemState.price}
                    onChange={ev => updatePrice(ev.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="publisherInput" className="label">Publisher:</label> <input
                value={itemState.publisher}
                onChange={ev => updatePublisher(ev.target.value)}/>
            </div>
            <button onClick={insertItem}> submit</button>
        </div>
    );
}

export default AddItem;