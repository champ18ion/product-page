import React, { useState } from "react";
import star from "../assets/star.png";
import bag from "../assets/bag.png";
import button from "../assets/button.png";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [totalPrice, setTotalPrice] = useState(198);

  const navigate = useNavigate();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newCount) => {
    if (newCount >= 1) {
      setCount(newCount);
      setTotalPrice(198 * newCount);
    }
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="h-[50%] flex flex-col p-4 mt-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl text-black font-bold mb-1">Roller Rabbit</h1>
          <p className="text-sm text-gray-500 mb-1">Vado Odelle Dress</p>
          <div className="flex flex-row items-center">
            <img src={star} alt="" />
            <span className="text-sm text-gray-500">(307 reviews)</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[30px] w-[70px] rounded-3xl bg-gray-200 flex flex-row justify-between items-center p-2 text-black">
            <span onClick={() => handleQuantityChange(count + 1)}>+</span>{" "}
            <span>{count}</span>{" "}
            <span onClick={() => handleQuantityChange(count - 1)}>-</span>
          </div>
          <p className="mt-2">Available in Stock</p>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="text-xl text-black font-semibold">Size</h1>
        <div className="flex flex-row gap-2 items-center mt-2">
          {sizes.map((size) => (
            <div
              key={size}
              className={`rounded-full p-2 m-1 ${
                selectedSize === size ? "bg-black text-white" : "bg-transparent"
              } border text-black-100  w-10 h-10 flex items-center justify-center text-lg font-bold`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-xl text-black font-semibold">Description</h1>
        <p className="text-[11px] text-gray-500 mt-2">
          Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center mt-4 mb-2">
        <div className="flex flex-col">
          <p className="text-[9px] text-gray-300">Total price</p>
          <p className="text-[18px] text-black font-black">${totalPrice.toFixed(2)}</p>
        </div>
        <button className="w-[200px] h-[50px]" onClick={() => navigate("/pay")}>
          <img src={button} alt="" />
        </button>
      </div>
    </div>
  );
}
