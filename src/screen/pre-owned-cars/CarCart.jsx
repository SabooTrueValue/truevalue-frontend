import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiSlidersLight } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import RangeSlider from "./RangeSlider";
import { useFormData } from "../../components/Other/FormDataProvider";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const CarCart = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState({
    minPrice: "100000",
    maxPrice: "10000000",
    minYear: "2003",
    maxYear: "2024",
    minKilometer: "0",
    maxKilometer: "300000",
    fuel: "",
    transmission: "",
    color: "",
    bodyType: "",
    accessories: "",
  });

  const { vehicleData } = useFormData();

  

  const filteredData = vehicleData.filter((car) => {
    return (
      (parseInt(car.price) >= parseInt(filters.minPrice) ||
        !filters.minPrice) &&
      (parseInt(car.price) <= parseInt(filters.maxPrice) ||
        !filters.maxPrice) &&
      (parseInt(car.modelYear) >= parseInt(filters.minYear) ||
        !filters.minYear) &&
      (parseInt(car.modelYear) <= parseInt(filters.maxYear) ||
        !filters.maxYear) &&
      (parseInt(car.kmDriven) >= parseInt(filters.minKilometer) ||
        !filters.minKilometer) &&
      (parseInt(car.kmDriven) <= parseInt(filters.maxKilometer) ||
        !filters.maxKilometer) &&
      (filters.fuel === "" || filters.fuel.includes(car.fuelType)) &&
      (filters.transmission === "" ||
        filters.transmission.includes(car.transmission)) &&
      (filters.color === "" ||
        filters.color === "All" ||
        filters.color.includes(car.color)) &&
      (filters.bodyType === "" ||
        // filters.bodyType === "All" ||
        filters.bodyType.includes(car.bodyType)) &&
      `${car.vehicleBrand} + " " + ${car.vehicleTitle} + - + ${car.modelYear} + " " + ${car.kmDriven} + " " + ${car.fuelType} + " " + ${car.transmission} + " " + ${car.bodyType} + " " + ${car.trueValueLocation} + " " + ${car.price} +  " " + ${car.images}" " + ${car.color} +`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return parseInt(a.price) - parseInt(b.price);
      case "priceHighToLow":
        return parseInt(b.price) - parseInt(a.price);
      case "yearLowToHigh":
        return parseInt(a.modelYear) - parseInt(b.modelYear);
      case "yearHighToLow":
        return parseInt(b.modelYear) - parseInt(a.modelYear);
      case "kilometerLowToHigh":
        return parseInt(a.kmDriven) - parseInt(b.kmDriven);
      case "kilometerHighToLow":
        return parseInt(b.kmDriven) - parseInt(a.kmDriven);
      default:
        return 0;
    }
  });

  const calculateEMI = (price) => {
    // Assuming interest rate of 8.5% per annum and tenure of 5 years (60 months)
    const interestRatePerMonth = 8.5 / (12 * 100);
    const tenureInMonths = 60; // 5 years
    const principal = price; // Assuming carData.price is in lakhs

    // Calculating EMI using the formula
    const emi =
      (principal *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, tenureInMonths)) /
      (Math.pow(1 + interestRatePerMonth, tenureInMonths) - 1);

    // Rounding off to 2 decimal places and converting to string
    return emi.toFixed(0);
  };

  return (
    <>
      <Helmet>
        <title>Your Destination to Buy Cars with Confidence</title>
        <meta
          name="title"
          content="Your Destination to Buy Cars with Confidence "
        />
        <meta
          name="description"
          content="Explore a wide range of pre-owned cars with TrueValue. Trust, reliability, and quality guaranteed. Buy with confidence and peace of mind. Visit us today!"
        />
        <meta
          name="keywords"
          content="Saboo TrueValue, buy cars, pre-owned cars, trust, reliability, quality, confidence, peace of mind, car dealership.
"
        />
      </Helmet>
      <div className="mx-auto xl:container">
        {/* <SearchPanel /> */}
        <div className="flex gap-4 my-10">
          <div className="md:w-[350px] relative hidden md:block ">
            <div className="sticky p-2 border top-24 left-4 ">
              <FilteringPanel filters={filters} setFilters={setFilters} />
            </div>
          </div>
          <div className="container mx-auto rounded-3xl">
            <div className="px-1 pb-10 ">
              {/* <CarCart filters={filters} setFilters={setFilters} /> */}
              <div className="grid grid-cols-1 gap-y-4 gap-x-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                <div className="flex flex-wrap justify-center w-full gap-2 my-4 duration-500 md:justify-between md:col-span-2 lg:col-span-3 xl:col-span-4 ">
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
                      <option value="kilometerLowToHigh">
                        Kilometer: Low to High
                      </option>
                      <option value="kilometerHighToLow">
                        Kilometer: High to Low
                      </option>
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
                        className="mx-auto duration-500 bg-white border hover:shadow-2xl hover:shadow-gray-500 group rounded-xl text-primary border-primary md:col-span-2 lg:col-span-1"
                      >
                        <Link
                          to={`/car-details/${x._id}`}
                          className="overflow-hidden"
                        >
                          <div className="relative overflow-hidden rounded-t-xl">
                            <img
                              src={x?.images["image1"]["img1"]}
                              alt={x.carName}
                              className="w-full"
                            />
                            {/* <div className="bg-primary px-4 py-2.5 bg-opacity-50 text-white rounded-tl-xl absolute bottom-0 right-0">
                              ₹ {x.price}
                            </div> */}
                          </div>
                          {/* <div className="p-4">
                            <div className="flex items-end justify-between pb-2 ">
                              <div className="text-xl ">{x.carName}</div>
                              <div className="text-sm">EMI : {x.EMI}</div>
                            </div>
                            <div className=" mb-2 text-[#8A8A8A]">
                              {x.detail}{" "}
                            </div>
                            <div className=" mb-4 text-[#8A8A8A] font-light text-xs tracking-wider  flex  gap-2">
                              <div className="">{x.year}</div> |
                              <div className="">{x.fuel}</div>|{" "}
                              <div>{x.kilometer}km</div>
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
                          </div> */}
                          <div className="p-2 lg:px-4">
                            <div className="flex mt-6 mb-4 text-xl font-bold">
                              {x.vehicleBrand} {x.vehicleTitle} - {x.modelYear}
                            </div>

                            <div className="mb-2 text-sm">
                              <span>{x.kmDriven} Km</span> |{" "}
                              <span>
                                {x.fuelType} | {x.transmission} | {x.bodyType} |{" "}
                                {x.color}
                              </span>
                            </div>
                            <div className="flex items-end justify-between mb-6 ">
                              <p>
                                ₹{" "}
                                <span className="text-xl font-bold ">
                                  {x.price}{" "}
                                </span>
                              </p>
                              <p className="text-sm ">
                                From ₹{calculateEMI(x.price)}/m
                              </p>
                            </div>

                            <div className="flex justify-between border-t border-[#797979] py-2 ">
                              <Link
                                to={`/car-details/${x.id}`}
                                className="flex items-center gap-2 text-lg group"
                              >
                                Buy Now{" "}
                                <p className="invisible text-sm font-bold transition duration-500 rounded-full group-hover:translate-x-2 group-hover:visible ">
                                  &#12297;
                                </p>
                              </Link>{" "}
                              <div className="flex items-center gap-2 text-sm font-bold bottom-2 right-3 ">
                                <FaLocationDot />
                                <p className="">{x.trueValueLocation}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                )}
                {/* <div className="w-[280px] m-5 h-10 "></div> */}

                {/* <div className="w-[280px] m-2 "></div>
                <div className="w-[280px] m-2 "></div>
                <div className="w-[280px] m-2 "></div>
                <div className="w-[280px] m-2 "></div>
                <div className="w-[280px] m-2 "></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCart;

const FilteringPanel = ({ filters, setFilters }) => {
  const [Budget, setBudget] = useState(true);
  // const [BrandModel, setBrandModel] = useState(false);
  const [ModalYear, setModalYear] = useState(false);
  const [Kilometers, setKilometers] = useState(false);
  const [GearBox, setGearBox] = useState(false);
  const [FuelType, setFuelType] = useState(false);
  const [BodyType, setBodyType] = useState(false);
  // const [colors, setColors] = useState(false);
  // const [OtherFeatures, setOtherFeatures] = useState(false);

  return (
    <div className="px-2 ">
      {/* filter Section */}
      <section>
        <div className="flex items-end justify-between py-3 border-b-2">
          <div className="flex gap-3 ">
            <PiSlidersLight className="text-2xl" />
            <div className="text-xl uppercase">Filter</div>
          </div>
          {/* <div className="underline cursor-pointer text-primary underline-offset-2 ">
            Clear All
          </div> */}
        </div>
      </section>

      {/* Budget Section */}
      <div className="mt-5 mb-3 border-b-2 ">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer "
          onClick={() => setBudget(!Budget)}
        >
          <div className="text-sm font-semibold select-none"> Budget</div>
          <div className={`duration-200 ${Budget ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {Budget && <BudgetFilter filters={filters} setFilters={setFilters} />}
      </div>

      {/* Brand and Model */}
      {/* <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setBrandModel(!BrandModel)}
        >
          <div className="text-sm font-semibold select-none">
            Brand and Model
          </div>
          <div className={`duration-200 ${BrandModel ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {BrandModel && <BrandModelFilter />}
      </div> */}

      {/* Model Year */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setModalYear(!ModalYear)}
        >
          <div className="text-sm font-semibold select-none"> Model Year</div>
          <div className={`duration-200 ${ModalYear ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {ModalYear && (
          <ModelYearFilter filters={filters} setFilters={setFilters} />
        )}
      </div>

      {/* Kilometers Driven */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setKilometers(!Kilometers)}
        >
          <div className="text-sm font-semibold select-none">
            Kilometers Driven
          </div>
          <div className={`duration-200 ${Kilometers ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {Kilometers && (
          <KilometersDrivenFilter filters={filters} setFilters={setFilters} />
        )}
      </div>

      {/* Gearbox */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setGearBox(!GearBox)}
        >
          <div className="text-sm font-semibold select-none"> Gearbox</div>
          <div className={`duration-200 ${GearBox ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {GearBox && <GearBoxFilter filters={filters} setFilters={setFilters} />}
      </div>

      {/* Fuel Type */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setFuelType(!FuelType)}
        >
          <div className="text-sm font-semibold select-none"> Fuel Type</div>
          <div className={`duration-200 ${FuelType ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {FuelType && (
          <FuelTypeFilter filters={filters} setFilters={setFilters} />
        )}
      </div>
      {/* Body Type */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setBodyType(!BodyType)}
        >
          <div className="text-sm font-semibold select-none"> Body Type</div>
          <div className={`duration-200 ${BodyType ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {BodyType && (
          <BodyTypeFiter filters={filters} setFilters={setFilters} />
        )}
      </div>

      {/* Colour section */}
      {/* <div className="mt-5 mb-3 border-b-2 ">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setColors(!colors)}
        >
          <div className="text-sm font-semibold select-none"> Colour</div>
          <div className={`duration-200 ${colors ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {colors && <ColourFilter />}
      </div> */}

      {/* Other features */}
      {/* <div className="py-3 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setOtherFeatures(!OtherFeatures)}
        >
          <div className="text-sm font-semibold select-none">
            {" "}
            Other features
          </div>
          <div className={`duration-200 ${OtherFeatures ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {OtherFeatures && <OtherFeaturesFilter />}
      </div> */}
    </div>
  );
};

const BudgetFilter = ({ filters, setFilters }) => {
  const MIN = 100000;
  const MAX = 10000000;
  const steps = 100000;

  const initialValues = [MIN, MAX];
  const [values, setValues] = useState(initialValues);
  useEffect(() => {
    setFilters({ ...filters, minPrice: values[0], maxPrice: values[1] });
  }, [values]);
  // }, [values, filters, setFilters]);

  // Function to reset values to initial state
  const resetValues = () => {
    setValues(initialValues);
    setFilters({ ...filters, minPrice: "100000", maxPrice: "10000000" });
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between ">
        <div className="px-3 py-2 rounded bg-[#F4F4F4] w-min flex gap-1 items-center">
          <div className="text-base font-bold">{values[0] / 100000}</div>
          <div> Lakhs</div>
        </div>
        <div className="px-3 py-2 rounded bg-[#F4F4F4] w-min flex gap-1 items-center">
          <div className="text-base font-bold">{values[1] / 100000}</div>
          <div> Lakhs</div>
        </div>
      </div>
      <div>
        <div className="">
          <RangeSlider
            MIN={MIN}
            MAX={MAX}
            values={values}
            setValues={setValues}
            steps={steps}
          />
        </div>
        <div className="flex justify-between">
          <div>Min</div>
          <div>Max</div>
        </div>
        <div
          onClick={resetValues}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-primary"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

// const BrandModelFilter = () => {
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleCheckboxChange = (brandName) => {
//     if (selectedBrands.includes(brandName)) {
//       setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
//     } else {
//       setSelectedBrands([...selectedBrands, brandName]);
//     }
//   };

//   const handleSearch = (e) => {
//     const searchText = e.target.value.toLowerCase();
//     setSearchText(searchText);

//     if (searchText.length === 0) {
//       setSearchResults([]);
//     } else {
//       const filteredResults = BrandModelData.filter((brand) =>
//         brand.brandName.toLowerCase().includes(searchText)
//       );
//       setSearchResults(filteredResults);
//     }
//   };

//   const clearSearch = () => {
//     setSearchText("");
//     setSearchResults([]);
//   };

//   const BrandModelData = [
//     {
//       brandName: "Maruti Suzuki",
//       totalCount: "240",
//     },
//     {
//       brandName: "Nissan",
//       totalCount: "160",
//     },
//     {
//       brandName: "Honda",
//       totalCount: "100",
//     },
//     {
//       brandName: "Toyota",
//       totalCount: "100",
//     },
//     {
//       brandName: "BMW",
//       totalCount: "80",
//     },
//     {
//       brandName: "Audi",
//       totalCount: "80",
//     },
//     {
//       brandName: "Ford",
//       totalCount: "70",
//     },
//     {
//       brandName: "Chevrolet",
//       totalCount: "60",
//     },
//     {
//       brandName: "Hyundai",
//       totalCount: "55",
//     },
//     {
//       brandName: "Volkswagen",
//       totalCount: "50",
//     },
//     {
//       brandName: "Mercedes-Benz",
//       totalCount: "45",
//     },
//     {
//       brandName: "Kia",
//       totalCount: "40",
//     },
//     {
//       brandName: "Volvo",
//       totalCount: "35",
//     },
//     {
//       brandName: "Subaru",
//       totalCount: "30",
//     },
//     {
//       brandName: "Porsche",
//       totalCount: "25",
//     },
//     {
//       brandName: "Ferrari",
//       totalCount: "20",
//     },
//     {
//       brandName: "Jaguar",
//       totalCount: "18",
//     },
//     {
//       brandName: "Mazda",
//       totalCount: "16",
//     },
//     {
//       brandName: "Lexus",
//       totalCount: "14",
//     },
//     {
//       brandName: "Bentley",
//       totalCount: "12",
//     },
//     {
//       brandName: "Land Rover",
//       totalCount: "10",
//     },
//     {
//       brandName: "McLaren",
//       totalCount: "9",
//     },
//   ];

//   return (
//     <div className="mb-6 ">
//       <div className="relative mb-4">
//         <input
//           type="text"
//           value={searchText}
//           onChange={handleSearch}
//           className="w-full p-1 mt-1 border rounded"
//           placeholder="Search Brands"
//         />
//         {searchText.length > 0 && (
//           <div
//             onClick={clearSearch}
//             className="absolute text-lg text-red-400 cursor-pointer top-[20%] right-4"
//           >
//             x
//           </div>
//         )}
//       </div>
//       <div className="max-h-[30vh] overflow-y-scroll">
//         {(searchText.length > 0 ? searchResults : BrandModelData).map(
//           (data, index) => (
//             <div key={index} className="mb-1">
//               <input
//                 type="checkbox"
//                 className="transform cursor-pointer scale-[1.0] mx-2"
//                 id={`compareCheckbox${index}`}
//                 onChange={() => handleCheckboxChange(data.brandName)}
//                 checked={selectedBrands.includes(data.brandName)}
//               />
//               <label
//                 htmlFor={`compareCheckbox${index}`}
//                 className="cursor-pointer"
//               >
//                 {data.brandName} ({data.totalCount})
//               </label>
//             </div>
//           )
//         )}

//         {searchText.length > 0 && searchResults.length === 0 && (
//           <p>No search results</p>
//         )}
//       </div>
//       <div className="mt-4 text-sm">
//         <div className="mb-1 font-medium">Selected Brands:</div>
//         <div className="flex flex-wrap gap-x-2 font-extralight">
//           {selectedBrands.map((brand, index) => (
//             <div key={index}>{brand},</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const ModelYearFilter = ({ filters, setFilters }) => {
  const MIN = 2003;
  const MAX = 2024;
  const steps = 1;

  const initialValues = [MIN, MAX];
  const [values, setValues] = useState(initialValues);
  useEffect(() => {
    setFilters({ ...filters, minYear: values[0], maxYear: values[1] });
  }, [values]);
  // }, [values, filters, setFilters]);

  // Function to reset values to initial state
  const resetValues = () => {
    setValues(initialValues);
    setFilters({ ...filters, minYear: "2003", maxYear: "2024" });
    console.log("values", values);
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between ">
        <div className="px-4 py-2 rounded bg-[#F4F4F4] w-min ">
          <div className="">{values[0]}</div>
        </div>
        <div className="px-4 py-2 rounded bg-[#F4F4F4] w-min ">
          <div className="">{values[1]}</div>
        </div>
      </div>
      <div>
        <div className="">
          <RangeSlider
            MIN={MIN}
            MAX={MAX}
            values={values}
            setValues={setValues}
            steps={steps}
          />
        </div>
        <div className="flex justify-between">
          <div>Min</div>
          <div>Max</div>
        </div>
        <div
          onClick={resetValues}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-primary"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

const KilometersDrivenFilter = ({ filters, setFilters }) => {
  const MIN = 0;
  const MAX = 300000;
  const steps = 1000;

  const initialValues = [MIN, MAX];
  const [values, setValues] = useState(initialValues);
  useEffect(() => {
    setFilters({
      ...filters,
      minKilometer: values[0],
      maxKilometer: values[1],
    });
  }, [values]);
  // }, [values, filters, setFilters]);

  // Function to reset values to initial state
  const resetValues = () => {
    setValues(initialValues);
    setFilters({ ...filters, minKilometer: "0", maxKilometer: "300000" });
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between ">
        <div className="px-4 py-2 rounded bg-[#F4F4F4] w-min ">
          <div className="">{values[0]}</div>
        </div>
        <div className="px-4 py-2 rounded bg-[#F4F4F4] w-min ">
          <div className="">{values[1]}</div>
        </div>
      </div>
      <div>
        <div className="">
          <RangeSlider
            MIN={MIN}
            MAX={MAX}
            values={values}
            setValues={setValues}
            steps={steps}
          />
        </div>
        <div className="flex justify-between">
          <div>Min (0)</div>
          <div>Max (30K+)</div>
        </div>
        <div
          onClick={resetValues}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-primary"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

const GearBoxFilter = ({ filters, setFilters }) => {
  const [selectedGearBox, setSelectedGearBox] = useState([]);

  useEffect(() => {
    if (selectedGearBox.length === 0) {
      setFilters({ ...filters, transmission: "" });
    } else {
      setFilters({ ...filters, transmission: selectedGearBox.join(",") });
    }
  }, [selectedGearBox]);
  // }, [selectedGearBox, filters, setFilters]);

  const handleCheckboxChange = (gearBox) => {
    if (selectedGearBox.includes(gearBox)) {
      setSelectedGearBox(
        selectedGearBox.filter((gearBoxType) => gearBoxType !== gearBox)
      );
    } else {
      setSelectedGearBox([...selectedGearBox, gearBox]);
    }
  };

  return (
    <div className="mb-6 ">
      <div className="mb-1">
        <input
          type="checkbox"
          className="transform cursor-pointer scale-[1.0] mx-2"
          id={`Mannual`}
          onChange={() => handleCheckboxChange("Mannual")}
          checked={selectedGearBox.includes("Mannual")}
        />
        <label htmlFor={`Mannual`} className="cursor-pointer ">
          Mannual
        </label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          className="transform cursor-pointer scale-[1.0] mx-2"
          id={`Automatic`}
          onChange={() => handleCheckboxChange("Automatic")}
          checked={selectedGearBox.includes("Automatic")}
        />
        <label htmlFor={`Automatic`} className="cursor-pointer">
          Automatic
        </label>
      </div>
      {/* <div>{selectedGearBox}</div> */}
    </div>
  );
};

const FuelTypeFilter = ({ filters, setFilters }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  useEffect(() => {
    // setFilters({ ...filters, fuel: selectedBrands });
    if (selectedBrands.length === 0) {
      setFilters({ ...filters, fuel: "" });
    } else {
      setFilters({ ...filters, fuel: selectedBrands.join(",") });
    }
  }, [selectedBrands]);
  // }, [selectedBrands, filters, setFilters]);

  const handleCheckboxChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const FuelTypeData = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];

  return (
    <div className="mb-6 ">
      {FuelTypeData.map((data, index) => (
        <div key={index} className="mb-2 select-none">
          <input
            type="checkbox"
            className="transform cursor-pointer scale-[1.0] mx-2"
            id={`compareCheckbox${index}`}
            onChange={() => handleCheckboxChange(data)}
            checked={selectedBrands.includes(data)}
          />
          <label htmlFor={`compareCheckbox${index}`} className="cursor-pointer">
            {data}
          </label>
        </div>
      ))}
    </div>
  );
};

const BodyTypeFiter = ({ filters, setFilters }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  useEffect(() => {
    // setFilters({ ...filters, fuel: selectedBrands });
    if (selectedBrands.length === 0) {
      setFilters({ ...filters, bodyType: "" });
    } else {
      setFilters({ ...filters, bodyType: selectedBrands.join(",") });
    }
  }, [selectedBrands]);
  // }, [selectedBrands, filters, setFilters]);

  const handleCheckboxChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const FuelTypeData = [
    "Minivan",
    "Hatchback",
    "Sedan",
    "SUV",
    "MUV",
    "Coupe",
    "Convertible",
    "Jeep",
    "Wagon",
  ];

  return (
    <div className="mb-6 ">
      {FuelTypeData.map((data, index) => (
        <div key={index} className="mb-2 select-none">
          <input
            type="checkbox"
            className="transform cursor-pointer scale-[1.0] mx-2"
            id={`compareCheckbox${index}`}
            onChange={() => handleCheckboxChange(data)}
            checked={selectedBrands.includes(data)}
          />
          <label htmlFor={`compareCheckbox${index}`} className="cursor-pointer">
            {data}
          </label>
        </div>
      ))}
    </div>
  );
};

// const BodyTypeFiter = () => {
//   const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);

//   const BodyTypeData = [
//     {
//       title: "Hatchback",
//       img2: require("../../assets/Home/HATCHBACK-B.png"),
//       color: "#F4F4F4",
//     },
//     {
//       title: "SUV",
//       img2: require("../../assets/Home/SUV-B.png"),
//       color: "#fff7eb",
//     },
//     {
//       title: "SEDAN",
//       img2: require("../../assets/Home/SEDAN-B.png"),
//       color: "#ecfad7",
//     },
//     {
//       title: "MUV",
//       img2: require("../../assets/Home/MUV-B.png"),
//       color: "#d4faf6",
//     },
//     {
//       title: "Coupe",
//       img2: require("../../assets/Home/COUPE-B.png"),
//       color: "#deebff",
//     },
//     {
//       title: "Convertible",
//       img2: require("../../assets/Home/Convertible-B.png"),
//       color: "#e7e1fa",
//     },
//   ];

//   const handleSelect = (title) => {
//     if (selectedBodyTypes.includes(title)) {
//       setSelectedBodyTypes(
//         selectedBodyTypes.filter((selected) => selected !== title)
//       );
//     } else {
//       setSelectedBodyTypes([...selectedBodyTypes, title]);
//     }
//   };

//   return (
//     <div className="grid grid-cols-2 gap-2 mb-6 lg:grid-cols-3">
//       {BodyTypeData.map((x, i) => {
//         const isSelected = selectedBodyTypes.includes(x.title);

//         return (
//           <div
//             key={i}
//             className={`bg-[#F4F4F4] rounded text-center cursor-pointer relative select-none`}
//             // className={`bg-[${x.color}] rounded text-center cursor-pointer relative select-none`}
//             onClick={() => handleSelect(x.title)}
//           >
//             <div className="flex items-end justify-center mb-2 h-14 ">
//               <img src={x.img2} alt=""  className="px-1" />
//             </div>
//             <div className="text-sm">{x.title}</div>
//             {isSelected && (
//               <div className="absolute top-2 right-2">
//                 <img
//                   src={require("../../assets/Find Car/ionic-ios-checkmark-circle-outline.png")}
//                   alt=""
//
//                 />
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// Colour Tab

// const ColourFilter = () => {
//   const [selectedColourTypes, setSelectedColourTypes] = useState([]);

//   const handleSelect = (title) => {
//     if (selectedColourTypes.includes(title)) {
//       setSelectedColourTypes(
//         selectedColourTypes.filter((selected) => selected !== title)
//       );
//     } else {
//       setSelectedColourTypes([...selectedColourTypes, title]);
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4 mb-6 lg:gap-5 lg:grid-cols-4">
//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Red")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-[#D91414] ${
//             selectedColourTypes.includes("Red")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Red") && "font-semibold text-xl"
//           }`}
//         >
//           Red
//         </div>
//       </div>

//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Blue")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-blue-900 ${
//             selectedColourTypes.includes("Blue")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Blue") && "font-semibold text-xl"
//           }`}
//         >
//           Blue
//         </div>
//       </div>
//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Black")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-black ${
//             selectedColourTypes.includes("Black")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Black") && "font-semibold text-xl"
//           }`}
//         >
//           Black
//         </div>
//       </div>

//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("White")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-white ${
//             selectedColourTypes.includes("White")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("White") && "font-semibold text-xl"
//           }`}
//         >
//           White
//         </div>
//       </div>

//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Silver")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-[#F4F4F4] ${
//             selectedColourTypes.includes("Silver")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Silver") && "font-semibold text-xl"
//           }`}
//         >
//           Silver
//         </div>
//       </div>
//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Brown")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-[#8B461B] ${
//             selectedColourTypes.includes("Brown")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Brown") && "font-semibold text-xl"
//           }`}
//         >
//           Brown
//         </div>
//       </div>
//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Yellow")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200  bg-[#FFCE2C] ${
//             selectedColourTypes.includes("Yellow")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         ></div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Yellow") && "font-semibold text-xl"
//           }`}
//         >
//           Yellow
//         </div>
//       </div>

//       <div
//         className={` rounded text-center cursor-pointer relative`}
//         onClick={() => handleSelect("Others")}
//       >
//         <div
//           className={`flex items-end justify-center mb-2 h-14 rounded duration-200   ${
//             selectedColourTypes.includes("Others")
//               ? " shadow-lg shadow-gray-600"
//               : "border"
//           } `}
//         >
//           <img
//             src={require("../../assets/pre-owned-car/otherColor.png")}
//             alt=""
//             className="w-full h-full"
//           />
//         </div>
//         <div
//           className={`text-xs ${
//             selectedColourTypes.includes("Others") && "font-semibold text-xl"
//           }`}
//         >
//           Others
//         </div>
//       </div>
//     </div>
//   );
// };

// const OtherFeaturesFilter = () => {
//   const [selectedFeatures, setSelectedFeatures] = useState([]);

//   const handleCheckboxChange = (brandName) => {
//     if (selectedFeatures.includes(brandName)) {
//       setSelectedFeatures(
//         selectedFeatures.filter((brand) => brand !== brandName)
//       );
//     } else {
//       setSelectedFeatures([...selectedFeatures, brandName]);
//     }
//   };

//   const OthersFeaturesData = [
//     "ABS",
//     "Traction Control",
//     "Climate Control",
//     "CarPlay",
//     "Rear AC Vents",
//   ];

//   return (
//     <div className="mb-6 ">
//       {OthersFeaturesData.map((data, index) => (
//         <div key={index} className="mb-2 select-none">
//           <input
//             type="checkbox"
//             className="transform cursor-pointer scale-[1.0] mx-2"
//             id={`compareCheckbox${index}`}
//             onChange={() => handleCheckboxChange(data)}
//             checked={selectedFeatures.includes(data)}
//           />
//           <label htmlFor={`compareCheckbox${index}`} className="cursor-pointer">
//             {data}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };
