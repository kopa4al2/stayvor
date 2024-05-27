import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/reduxStore";
import { editItem } from "../../../store/thunk/thunk";
import { EditItemProps } from "../../../types/shop/ShopItem/ShopItem";

function EditItem({ item }: EditItemProps) {
  const dispatch: AppDispatch = useDispatch();

  const [price, setPrice] = useState(item.price);
  const [publisher, setPublisher] = useState(item.publisher);

  const handleEdit = (event) => {
    event.preventDefault();
    const updatedItem = {
      id: item.id,
      price,
      publisher,
    };
    dispatch(editItem(updatedItem));
  };
  return (
    <div className="editItem-container">
      <div className="editItem-price">
        <label className="editItem-price--label">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div className="editItem-publisher">
        <label className="editItem-price--label">Publisher:</label>
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleEdit}>
        Save
      </button>
    </div>
  );
}

export default EditItem;
