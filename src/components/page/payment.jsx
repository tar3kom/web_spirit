import React from "react";
import "./picture.css";
import { useLocation } from "react-router-dom";

export const Playment = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access the product data

  return (
    <div className="mailbox">
      <img src={product.src} className="pic_mail" />
      <p className="P_mail">ที่อยู่การจัดส่ง</p>
      <input className="input_mail" />
      <p className="P_mail">เบอร์โทรศัพท์</p>
      <input className="input_mail" />
      <img src={product.QR} className="pic_mail" />
      <button className="button_pay">APPLY</button>
    </div>
  );
};
