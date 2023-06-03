import React from "react";
import menu from "../assets/menu.png";
import user from "../assets/user.png";
import icon from "../assets/icon.png";
import filter from "../assets/filtter.png";
import imgae90 from "../assets/image90.png";
import image91 from "../assets/image91.png";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";

import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();


  
  return (
    <div className="container-snap overflow-y-auto flex flex-col gap-4 px-4 h-[90vh]">
      <div className="flex flex-row flex-shrink-0 justify-between align-middle mt-8">
        <img src={menu} alt="menu" className="w-8 h-8 m-2" />
        <img src={user} alt="user" className="w-10 h-10 m-2" />
      </div>
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-black px-2">welcome,</h1>
        <p className="text-gray-600 text-xl text-bold px-2">our fashion app</p>
      </div>
      <div className="flex flex-row flex-shrink-0justify-between align-middle my-2">
        <div
          className="flex flex-row gap-2 px-2 w-75 rounded-3xl h-12"
          style={{ backgroundColor: "#f3f4f5" }}
        >
          <img src={icon} alt="icon" className="w-6 h-6 m-2 mt-3" />
          <input
            type="search"
            name=""
            id=""
            placeholder="search"
            className="bg-transparent focus:bg-transparent focus:outline-none"
          />
        </div>
        <img src={filter} alt="filter" className="w-8 h-8 m-2" />
      </div>
      <div
        className="container-snap flex-shrink-0 flex flex-row gap-4 min-w-full overflow-x-auto align-middle mt-2"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="h-40 w-64 flex-shrink-0 rounded-3xl"
          style={{
            backgroundImage: "url(" + imgae90 + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-black m-4 mb-0">50% off</h1>
            <p className="text-black text-sm mx-4">on everything today</p>
            <span className="text-gray-500 text-xs mt-4 mx-4">
              With code:FScreation
            </span>
            <button
              className="mt-4 mx-4 bg-black w-20 h-6 text-white pt-1 pb-2 rounded-3xl"
              style={{ fontSize: "10px" }}
            >
              Get now
            </button>
          </div>
        </div>
        <div
          className="h-40 w-64 flex-shrink-0 rounded-3xl"
          style={{
            backgroundImage: "url(" + image91 + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-black m-4 mb-0">70% off</h1>
            <p className="text-black text-sm mx-4">on everything today</p>
            <span className="text-gray-500 text-xs mt-4 mx-4">
              With code:FScreation
            </span>
            <button
              className="mt-4 mx-4 bg-black w-20 h-6 text-white pt-1 pb-2 rounded-3xl"
              style={{ fontSize: "10px" }}
            >
              Get now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-shrink-0 justify-between align-middle mt-6">
          <span className="text-2xl font-bold text-black">New Arrivals</span>
          <span className="text-gray-600  font-semibold">view all</span>
        </div>
        <div
          className="container-snap flex flex-row flex-shrink-0 gap-8 min-w-full overflow-x-auto align-middle mt-6 mx-2"
          style={{ overflowX: "scroll" }}
        >
          <div className="w-40 flex flex-col items-center flex-shrink-0 rounded-3xl cursor-pointer"  onClick={() => navigate("/product")}>
            <div
              style={{
                backgroundImage: "url(" + image2 + ")",
                backgroundSize: "cover",
              }}
              className="h-44 w-40 flex-shrink-0 rounded-3xl"
            ></div>
            <h1 className=" font-bold text-black mt-2">The mark Jacobs</h1>
            <p className="font-semibold text-gray-400 text-xs">
              Traveller toto
            </p>
            <p className="font-bold text-black">$195.00</p>
          </div>
          <div className="w-40 flex flex-col items-center flex-shrink-0 rounded-3xl cursor-pointer " onClick={() => navigate("/product")} >
            <div
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
              }}
              className="h-44 w-40 flex-shrink-0 rounded-3xl"
            ></div>
            <h1 className=" font-bold text-black mt-2">Axel Arigato</h1>
            <p className="font-semibold text-gray-400 text-xs">
              Clean 90 Triple Sneaker
            </p>
            <p className="font-bold text-black">$245.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
