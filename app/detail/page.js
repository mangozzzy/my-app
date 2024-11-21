"use client"; // Client Component로 지정

import React, { useState } from "react";
import { useSearchParams } from "next/navigation"; // App Router 전용
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";

const DetailPage = () => {
  const searchParams = useSearchParams(); // URL의 query parameter를 가져오는 hook
  const image = searchParams.get("image"); // 'image' 쿼리 값 가져오기
  const productName = "Stylish T-Shirt"; // 예시 제품명
  const price = 29.99; // 예시 가격

  // 수량 선택 상태 관리
  const [quantity, setQuantity] = useState(1);

  // 수량 변경 함수
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // 장바구니에 추가 함수 (디버깅용)
  const handleAddToCart = () => {
    alert(`${productName} has been added to your cart!`);
  };

  // 구매 함수 (디버깅용)
  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} ${productName}(s).`);
  };

  return (
    <div>
      <Header />
      <div className="flex gap-10 p-10">
        {/* 이미지 */}
        <div className="flex-shrink-0">
          <Image src={`/${image}`} width={300} height={300} alt="옷사진" />
        </div>

        {/* 제품 정보 */}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4">{productName}</h2>
          <p className="text-xl text-gray-600 mb-4">${price.toFixed(2)}</p>

          {/* 수량 선택 */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-lg">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="border p-2 w-20"
            />
          </div>

          {/* 버튼들 */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
