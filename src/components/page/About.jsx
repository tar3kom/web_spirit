import React, { useState } from "react";
import "./picture.css";
import { Link, NavLink } from "react-router-dom";
export const About = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const products = [
    {
      src: "/pic2.jpg",
      description:
        "Size 37.5 cm x 39.5 cmใส่ไอแพด และอื่นๆได้ ยังไม่ได้วัดขนาด 🙇สภาพ 8/10 เป็นสกรีนโลโก้ 2 ด้าน สกรีนมีรอยการใช้งานตามภาพ ไม่มีขาดหรือรู",
      price: ["150฿/ใบ", 150],
      QR: "/pay1.jpg",
    },
    {
      src: "/pic3.jpg",
      description:
        "Size เอว 36“ ยาว 44” ปลายขา 10 สภาพ 8.5/10 มีรอยพับขากางเกง ไม่มีขาดรู😍",
      price: ["300฿/ตัว", 300],
      QR: "/pay2.jpg",
    },
    {
      src: "/pic4.jpg",
      description:
        "Size S อก 18.5” ยาว 27.5” (±0.5) สภาพ 8/10 สีดรอปเสมอตัว ลายใหญ่ๆหายากมากกก",
      price: ["390฿/ตัว", 390],
      QR: "/pay3.jpg",
    },
    {
      src: "/pic5.jpg",
      description:
        "Size M อก 20” ยาว 27” (±0.5) สภาพ 9.5/10 สกรีนจมไม่แตก สภาพเสื้อสวย ป้ายครบๆ",
      price: ["490฿/ตัว", 490],
      QR: "/pay4.jpg",
    },
    {
      src: "/togboki3.jpg",
      description:
        "✨ ต้องโบกี ✨ ขนมยอดฮิตที่มาพร้อมกับรสชาติที่คุณไม่ควรพลาด! หนึบหนับทุกคำ เหมือนยกเกาหลีมาไว้ใกล้ๆคุณ ประมาณถุงละ 250g",
      price: ["40฿/กิโลกรัม", 40],
      QR: "/pay5.jpg",
    },
    {
      src: "/snackbar.jpg",
      description:
        "🥇 Snack Bar ข้าวโอ๊ต 🥇 ของว่างเพื่อสุขภาพที่รวมความอร่อยและคุณประโยชน์จากธรรมชาติไว้ในแท่งเดียว!",
      price: ["20฿/ห่อ", 20],

      QR: "/pay6.jpg",
    },
  ];
  return (
    <div>
      {products.map((product, index) => (
        <Link
          to="/about/product"
          state={{
            product: product,
          }}
          className="about"
        >
          <img src={product.src} alt={index} className="size" />
          <p className="price">{product.price[0]} </p>
        </Link>
      ))}
    </div>
  );
};
