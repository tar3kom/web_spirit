import React from "react";
import "./product.css";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingList } from "../../../redux/action";

export const Product = () => {
  let [count, setCount] = useState(0);
  const location = useLocation();
  const { product } = location.state;
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateShoppingList = (newList) => {
    dispatch(setShoppingList(newList));
    console.log(shoppingList);
  };

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  // <div>{count}</div>
  //           <button onClick={incrementCount}>+</button>
  //           <button onClick={decrementCount}>-</button>

  const handleBuy = (item) => {
    const newList = [...shoppingList, item];
    updateShoppingList(newList); // เรียกใช้ฟังก์ชันเพื่ออัปเดต Redux store
    navigate("/section", { state: { product: newList } });
  };
  return (
    <div>
      <div className="box">
        <img src={product.src} className="size3" />
        <ul className="textbox">{product.description}</ul>
      </div>
      <div className="box">
        <div className="textbox2">
          <div className="buy_sell">
            {/* <Link to="/section" state={{ product: shoppingList }}> */}
            <button onClick={() => handleBuy(product)} className="button_buy">
              buy
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="textbox3">
          <div className="buy_sell">sell</div>
        </div>
      </div>
    </div>
  );
};
