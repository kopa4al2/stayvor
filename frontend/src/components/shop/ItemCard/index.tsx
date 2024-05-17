import { useDispatch } from "react-redux";
import { deleteItem } from "../../../store/thunk/thunk";
import './styles.css';


interface ItemCardProps {
    id: number,
    price: number,
    publisher: string,
    publishedOn: Date,
}

function ItemCard(props: ItemCardProps) {
    const dispatch = useDispatch();

    function removeItem(id: number)  {
        // @ts-ignore
        dispatch(deleteItem(id))
    }

    function extractDate(publishedOn: Date) {
        return new Date(publishedOn).toLocaleDateString() + ' ' + new Date(publishedOn).toLocaleTimeString();
    }

    return (
        <div className='item-card'>
            <div>
                <span className='label label-name'>Price:</span>
                <span className='label label-value'>{props.price}$</span>
            </div>
            <div>
                <span className='label label-name'>Publisher:</span>
                <span className='label label-value'>{props.publisher}</span>
            </div>
            <div>
                <span className='label label-name'>Date:</span>
                <span className='label label-value'>{extractDate(props.publishedOn)}</span>
            </div>
            <span onClick={() => removeItem(props.id)}>Remove</span>
        </div>
    );
}

export default ItemCard;