import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/thunk/thunk";
import { ShopItemProps } from '../../../types/shop/ShopItem/ShopItem';

interface ItemState {
    price?: number,
    publisher?: string,
}

function AddItem() {
    const dispatch = useDispatch()
    const [itemState, setItemState] = useState<ItemState>({});
    const updatePrice = (price: ShopItemProps["price"]) => {
        setItemState({
            ...itemState,
            price
        })
    }

    const updatePublisher = (publisher: ShopItemProps["publisher"]) => {
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
                    onChange={e => updatePrice(Number(e.target.value))}/>
            </div>
            <div className="form-group">
                <label htmlFor="publisherInput" className="label">Publisher:</label>
                <input
                    value={itemState.publisher}
                    onChange={e => updatePublisher(e.target.value)}/>
            </div>
            <button onClick={insertItem}>Submit</button>
        </div>
    );
}

export default AddItem;