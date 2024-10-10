import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link, NavLink } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate(); // Create a navigate function

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
  const [currentImage, setCurrentImage] = useState(products[0]);

  // Function to handle random image change
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setCurrentImage(products[randomIndex]);
  };

  const likeImage = () => {
    alert("You Like this picture!");
  };

  return (
    <div className="product_container">
      <div className="home_left">
        <div className="button_Home_container1">
          <Link to="/section" state={{ products: currentImage }}>
            <button className={"button_pic"}>
              <img
                src="/—Pngtree—facebook love icon_3584863.png"
                className="button_pic"
              />
            </button>
          </Link>
        </div>
        <div className="button_Home_container2">
          <button className="button_pic" onClick={likeImage}>
            <img
              src="/—Pngtree—facebook like icon_3584862.png"
              className="button_pic"
            />
          </button>
        </div>
        <div className="button_Home_container3">
          <button onClick={randomImage} className="button_pic">
            <img
              src="/Tinder App Buttons FREE PNG.png"
              className="button_pic"
            />
          </button>
        </div>
        <div className="ad">
          <img src="up_to_eat.jpg" className="ad_pic" />
          <img src="robot1.jpg" className="ad_pic" />
          <img src="robot2.jpg" className="ad_pic" />
        </div>
      </div>

      <img className={"ninja_middle"} src={currentImage.src} />

      <div className="description">
        <p className="description_text"> {currentImage.description}</p>
      </div>
    </div>
  );
};
