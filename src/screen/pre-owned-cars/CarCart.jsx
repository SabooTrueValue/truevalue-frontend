import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CarCart = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  const data = [
    {
      carName: "BMW X7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Petrol",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW1.png"),
      // img: require("../../assets/pre-owned-car/BMW1.png"),
      price: "80,00,000",
      isFavorite: false,
    },
    {
      carName: "AUDDI 7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Diesel",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/AUDDI1.png"),
      price: "40,00,000",
      isFavorite: false,
    },
    {
      carName: "JEEP",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "CNG",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/JEEP1.png"),
      price: "30,00,000",
      isFavorite: false,
    },
    {
      carName: "BMW X5",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Electric",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW2.png"),
      price: "10,00,000",
      isFavorite: false,
    },
    {
      carName: "BMW X7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Hybrid",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW1.png"),
      price: "68,00,000",
      isFavorite: false,
    },
    {
      carName: "AUDDI 7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Petrol",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/AUDDI1.png"),
      price: "50,00,000",
      isFavorite: false,
    },
    {
      carName: "JEEP",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Diesel",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/JEEP1.png"),
      price: "35,00,000",
      isFavorite: false,
    },
    {
      carName: "BMW X5",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "CNG",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW2.png"),
      price: "85,00,000",
      isFavorite: false,
    },
    {
      carName: "BMW X7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Electric",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW1.png"),
      price: "22,00,000",
      isFavorite: false,
    },
    {
      carName: "AUDDI 7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Hybrid",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/AUDDI1.png"),
      price: "43,00,000",
      isFavorite: false,
    },
    {
      carName: "JEEP",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Petrol",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/JEEP1.png"),
      price: "35,00,000",
      isFavorite: false,
    },
    {
      carName: "BMW X5",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2019",
      fuel: "Diesel",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW2.png"),
      price: "28,00,000",
      isFavorite: false,
    },
  ];

  const handleToggleFavorite = (index) => {
    setSelectedCars((prevSelectedCars) => {
      if (prevSelectedCars.includes(index)) {
        return prevSelectedCars.filter((selectedCar) => selectedCar !== index);
      } else {
        return [...prevSelectedCars, index];
      }
    });
  };

  // const handleToggleFavorite = (index) => {
  //   setSelectedCars((prevSelectedCars) => {
  //     if (prevSelectedCars.includes(index)) {
  //       return prevSelectedCars.filter((selectedCar) => selectedCar !== index);
  //     } else {
  //       return [...prevSelectedCars, index];
  //     }
  //   });
  // };

  return (
    <div className="container flex flex-wrap gap-5 mx-auto 2xl:gap-4">
      {data.map((x, i) => {
        const isFavorite = selectedCars.includes(i);
        return (
          <div
            key={i}
            className="w-[280px] bg-white shadow-lg shadow-gray-300 hover:shadow-2xl hover:shadow-gray-500"
          >
            <Link to="/car-details">
              <div className="relative">
                <img src={x.img} alt={x.carName} className="w-full" />
                <div className="bg-truevalue px-4 py-2.5 bg-opacity-50 text-white rounded-tl-xl absolute bottom-0 right-0">
                  ₹ {x.price}
                </div>
                <AiFillHeart
                  className={`absolute text-2xl top-2 right-2 cursor-pointer ${
                    isFavorite ? "text-red-500" : "text-white"
                  }`}
                  onClick={() => handleToggleFavorite(i)}
                />
              </div>
              <div className="p-4">
                <div className="flex items-end justify-between pb-2 ">
                  <div className="text-xl ">{x.carName}</div>
                  <div className="text-sm">EMI : {x.EMI}</div>
                </div>
                <div className=" mb-2 text-[#8A8A8A]">{x.detail} </div>
                <div className=" mb-4 text-[#8A8A8A] font-light text-xs tracking-wider  flex  gap-2">
                  <div className="">{x.year}</div> |
                  <div className="">{x.fuel}</div>| <div>{x.kilometer}km</div>
                </div>
                <div className="flex gap-4  text-[#8A8A8A]">
                  <input
                    type="checkbox"
                    name="compareCheckbox"
                    id=""
                    className="transform scale-125 cursor-pointer"
                  />
                  <label htmlFor="compareCheckbox ">COMPARE</label>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CarCart;
