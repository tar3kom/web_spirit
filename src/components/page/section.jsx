import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShoppingList } from "../../redux/action"; // Ensure correct import

export const Section = () => {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  // Function to remove a product from the list
  const handleRemove = (indexToRemove) => {
    const updatedList = shoppingList.filter(
      (_, index) => index !== indexToRemove
    );
    dispatch(setShoppingList(updatedList)); // Update the shopping list in Redux
  };

  return (
    <div>
      {shoppingList.length > 0 ? (
        shoppingList.map((product, index) => (
          <div key={index}>
            <div className="container2">
              <img src={product.src} className="pic_in_service" alt="product" />
              <p className="text_in_service">{product.description}</p>
              <p className="price_per_piece">{product.price[0]}</p>
              <p className="amount">1</p>
              <Link to="/payment" state={{ product }}>
                <p className="payment">ชำระสินค้า</p>
              </Link>
              <button className="payment" onClick={() => handleRemove(index)}>
                X
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};
