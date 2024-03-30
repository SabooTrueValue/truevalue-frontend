import React, { useState } from "react";
import { Link } from "react-router-dom";

const CarCart = () => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    minKilometer: "",
    maxKilometer: "",
    fuel: "",
    color: "",
    bodyType: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  // const bodyTypeOptions = [
  //   "Minivan",
  //   "Hatchback",
  //   "Sedan",
  //   "SUV",
  //   "MUV",
  //   "Coupe",
  //   "Convertible",
  //   "Jeep",
  //   "Wagon",
  // ];

  const data = [
    {
      carName: "BMW X7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2018",
      fuel: "Petrol",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW1.png"),
      // img: require("../../assets/pre-owned-car/BMW1.png"),
      price: "8000000",
      isFavorite: false,
    },
    {
      carName: "AUDDI 7",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2017",
      fuel: "Diesel",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/AUDDI1.png"),
      price: "4000000",
      isFavorite: false,
    },
    {
      carName: "JEEP",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2016",
      fuel: "CNG",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/JEEP1.png"),
      price: "3000000",
      isFavorite: false,
    },
    {
      carName: "BMW X5",
      EMI: "1,20,000",
      detail: "XDrive 401 M Sport",
      year: "2020",
      fuel: "Electric",
      kilometer: "23000",
      img: require("../../assets/pre-owned-car/BMW2.png"),
      price: "1000000",
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
      price: "6800000",
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
      price: "5000000",
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
      price: "3500000",
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
      price: "8500000",
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
      price: "2200000",
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
      price: "4300000",
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
      price: "3500000",
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
      price: "2800000",
      isFavorite: false,
    },
  ];

  const filteredData = data.filter((car) => {
    return (
      (parseInt(car.price) >= parseInt(filters.minPrice) ||
        !filters.minPrice) &&
      (parseInt(car.price) <= parseInt(filters.maxPrice) ||
        !filters.maxPrice) &&
      (parseInt(car.year) >= parseInt(filters.minYear) || !filters.minYear) &&
      (parseInt(car.year) <= parseInt(filters.maxYear) || !filters.maxYear) &&
      (parseInt(car.kilometer) >= parseInt(filters.minKilometer) ||
        !filters.minKilometer) &&
      (parseInt(car.kilometer) <= parseInt(filters.maxKilometer) ||
        !filters.maxKilometer) &&
      (filters.fuel === "" ||
        filters.fuel === "All" ||
        filters.fuel.includes(car.fuel)) &&
      (filters.color === "" ||
        filters.color === "All" ||
        filters.color.includes(car.color)) &&
      (filters.bodyType === "" ||
        filters.bodyType === "All" ||
        filters.bodyType === car.bodyType) &&
      car.carName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return parseInt(a.price) - parseInt(b.price);
      case "priceHighToLow":
        return parseInt(b.price) - parseInt(a.price);
      case "yearLowToHigh":
        return parseInt(a.year) - parseInt(b.year);
      case "yearHighToLow":
        return parseInt(b.year) - parseInt(a.year);
      case "kilometerLowToHigh":
        return parseInt(a.kilometer) - parseInt(b.kilometer);
      case "kilometerHighToLow":
        return parseInt(b.kilometer) - parseInt(a.kilometer);
      default:
        return 0;
    }
  });

  return (
    <div className="container flex flex-wrap gap-5 mx-auto 2xl:gap-4">
      <div className="flex flex-wrap justify-center w-full gap-2 my-4 duration-500 md:justify-between">
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 transition-all duration-500 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:md:w-1/2 focus:lg:w-1/3 w-[300px] focus:w-full"
        />{" "}
        <div className="flex items-center ">
          <label htmlFor="sortBy">Sort By:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 ml-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="yearLowToHigh">Year: Low to High</option>
            <option value="yearHighToLow">Year: High to Low</option>
            <option value="kilometerLowToHigh">Kilometer: Low to High</option>
            <option value="kilometerHighToLow">Kilometer: High to Low</option>
          </select>
        </div>
      </div>

      {sortedData.length === 0 ? (
        <div>No cars found</div>
      ) : (
        sortedData.map((x, i) => {
          return (
            <div
              key={i}
              className="w-[280px] bg-white border   hover:shadow-2xl hover:shadow-gray-500 mx-auto duration-500"
            >
              <Link to="/car-details">
                <div className="relative">
                  <img src={x.img} alt={x.carName} className="w-full" />
                  <div className="bg-primary px-4 py-2.5 bg-opacity-50 text-white rounded-tl-xl absolute bottom-0 right-0">
                    ₹ {x.price}
                  </div>
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
        })
      )}
    </div>
  );
};

export default CarCart;
