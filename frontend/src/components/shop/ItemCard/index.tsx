import { useDispatch } from "react-redux";
import { openModal } from "../../../store/features/modalSlice";
import { deleteItem } from "../../../store/thunk/thunk";
import EditItem from "../EditItem";
import "./styles.css";

interface ItemCardProps {
  id: number;
  price: number;
  publisher: string;
  publishedOn: Date;
}

function ItemCard(item: ItemCardProps) {
  const dispatch = useDispatch();

  function removeItem(id: number) {
    // @ts-ignore
    dispatch(deleteItem(id));
  }

  function extractDate(publishedOn: Date) {
    return (
      new Date(publishedOn).toLocaleDateString() +
      " " +
      new Date(publishedOn).toLocaleTimeString()
    );
  }

  const toggleModal = () => {
    dispatch(
      openModal({
        children: <EditItem item={item} />,
        title: "Edit Item",
      })
    );
  };

  return (
    <div className="item-card">
      <div>
        <span className="label label-name">Price:</span>
        <span className="label label-value">{item.price}$</span>
      </div>
      <div>
        <span className="label label-name">Publisher:</span>
        <span className="label label-value">{item.publisher}</span>
      </div>
      <div>
        <span className="label label-name">Date:</span>
        <span className="label label-value">
          {extractDate(item.publishedOn)}
        </span>
      </div>
      <button onClick={() => removeItem(item.id)}>Remove</button>
      <button className="editItem-button-modal" onClick={toggleModal}>
        Edit Item
      </button>
    </div>
  );
}

export default ItemCard;
