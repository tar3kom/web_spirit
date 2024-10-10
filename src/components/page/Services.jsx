import React from "react";

export const Services = () => {
  const product = [
    {
      src: "/pic2.jpg",
      description:
        "Size 37.5 cm x 39.5 cmใส่ไอแพด และอื่นๆได้ ยังไม่ได้วัดขนาด 🙇สภาพ 8/10 เป็นสกรีนโลโก้ 2 ด้าน สกรีนมีรอยการใช้งานตามภาพ ไม่มีขาดหรือรู",
      price: ["150฿", 150],
    },
    {
      src: "/pic3.jpg",
      description:
        "Size เอว 36“ ยาว 44” ปลายขา 10 สภาพ 8.5/10 มีรอยพับขากางเกง ไม่มีขาดรู😍",
      price: ["300฿", 300],
    },
    {
      src: "/pic4.jpg",
      description:
        "Size S อก 18.5” ยาว 27.5” (±0.5) สภาพ 8/10 สีดรอปเสมอตัว ลายใหญ่ๆหายากมากกก",
      price: ["390฿", 390],
    },
    {
      src: "/pic5.jpg",
      description:
        "Size M อก 20” ยาว 27” (±0.5) สภาพ 9.5/10 สกรีนจมไม่แตก สภาพเสื้อสวย ป้ายครบๆ",
      price: ["490฿", 490],
    },
    {
      src: "/togboki3.jpg",
      description:
        "✨ ต้องโบกี ✨ ขนมยอดฮิตที่มาพร้อมกับรสชาติที่คุณไม่ควรพลาด! หนึบหนับทุกคำ เหมือนยกเกาหลีมาไว้ใกล้ๆคุณ ประมาณถุงละ 250g",
      price: ["40฿", 40],
    },
    {
      src: "/snackbar.jpg",
      description:
        "🥇 Snack Bar ข้าวโอ๊ต 🥇 ของว่างเพื่อสุขภาพที่รวมความอร่อยและคุณประโยชน์จากธรรมชาติไว้ในแท่งเดียว!",
      price: ["20฿", 20],
    },
  ];
  return (
    <div>
      <div className="container2">
        <p className="text_in_service2">สินค้า</p>
        <p className="text_in_service3">ราคาต่อชิ้น</p>
        <p className="text_in_service2">จำนวน</p>
        <p className="text_in_service2">ราคารวม</p>
        <p className="text_in_service2">สถานะ</p>
      </div>
      <div className="container2">
        <img src={product[1].src} className="pic_in_service" />
        <p className="text_in_service">{product[1].description}</p>
        <p className="price_per_piece">{product[1].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[1].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[0].src} className="pic_in_service" />
        <p className="text_in_service">{product[0].description}</p>
        <p className="price_per_piece">{product[0].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[0].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[0].src} className="pic_in_service" />
        <p className="text_in_service">{product[0].description}</p>
        <p className="price_per_piece">{product[0].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[0].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[0].src} className="pic_in_service" />
        <p className="text_in_service">{product[0].description}</p>
        <p className="price_per_piece">{product[0].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[0].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[2].src} className="pic_in_service" />
        <p className="text_in_service">{product[2].description}</p>
        <p className="price_per_piece">{product[2].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[2].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[2].src} className="pic_in_service" />
        <p className="text_in_service">{product[2].description}</p>
        <p className="price_per_piece">{product[2].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[2].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[3].src} className="pic_in_service" />
        <p className="text_in_service">{product[3].description}</p>
        <p className="price_per_piece">{product[3].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[3].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[3].src} className="pic_in_service" />
        <p className="text_in_service">{product[3].description}</p>
        <p className="price_per_piece">{product[3].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[3].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[4].src} className="pic_in_service" />
        <p className="text_in_service">{product[4].description}</p>
        <p className="price_per_piece">{product[4].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[4].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[4].src} className="pic_in_service" />
        <p className="text_in_service">{product[4].description}</p>
        <p className="price_per_piece">{product[4].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[4].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[5].src} className="pic_in_service" />
        <p className="text_in_service">{product[5].description}</p>
        <p className="price_per_piece">{product[5].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[5].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[5].src} className="pic_in_service" />
        <p className="text_in_service">{product[5].description}</p>
        <p className="price_per_piece">{product[5].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[5].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[4].src} className="pic_in_service" />
        <p className="text_in_service">{product[4].description}</p>
        <p className="price_per_piece">{product[4].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[4].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[5].src} className="pic_in_service" />
        <p className="text_in_service">{product[5].description}</p>
        <p className="price_per_piece">{product[5].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[5].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[5].src} className="pic_in_service" />
        <p className="text_in_service">{product[5].description}</p>
        <p className="price_per_piece">{product[5].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[5].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
      <div className="container2">
        <img src={product[4].src} className="pic_in_service" />
        <p className="text_in_service">{product[4].description}</p>
        <p className="price_per_piece">{product[5].price[0]}</p>
        <p className="amount">1</p>
        <p className="sum_price">{`${product[4].price[1] * 1}฿`}</p>
        <img src="/checkmark-flat.png" className="status" />
      </div>
    </div>
  );
};
