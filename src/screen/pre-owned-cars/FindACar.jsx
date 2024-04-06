import React, { useState } from "react";
import FilteringPanel from "./FilteringPanel";
// import CarsSection from "./CarsSection";
import CarCart from "./CarCart";

const FindACar = () => {
  const [filters, setFilters] = useState({
    minPrice: "100000",
    maxPrice: "10000000",
    minYear: "",
    maxYear: "",
    minKilometer: "",
    maxKilometer: "",
    fuel: "",
    color: "",
    bodyType: "",
  });
  

  return (
    <>
      <div className="mx-auto xl:container">
        {/* <SearchPanel /> */}
        <div className="flex gap-4 my-10">
          <div className="md:w-[350px] relative hidden md:block">
            <div className="sticky p-2 border top-24 left-4 ">
              <FilteringPanel filters={filters} setFilters={setFilters} />
            </div>
          </div>
          <div className="container mx-auto rounded-3xl">
            <div className="px-1 pb-10 overflow-y-scroll">
              <CarCart filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const SearchPanel = () => {
//   return (
//     <div className="container flex items-center justify-between pt-8 pb-4 mx-auto">
//       <div className="text-2xl">
//         All Car &gt; <span className="text-primary">Sedan</span>{" "}
//       </div>

//       <div className="relative pt-2 text-gray-600">
//         <input
//           className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
//           type="search"
//           name="search"
//           placeholder="Search"
//         />
//         <button arial-type='submit' type="submit" className="absolute top-0 right-0 mt-5 mr-4">
//           <svg
//             className="w-4 h-4 fill-current text-primary"
//             xmlns="http://www.w3.org/2000/svg"
//             xlinkHref="http://www.w3.org/1999/xlink" // Change from 'xmlns:xlink' to 'xlinkHref'
//             version="1.1"
//             id="Capa_1"
//             x="0px"
//             y="0px"
//             viewBox="0 0 56.966 56.966"
//             style={{ enableBackground: "new 0 0 56.966 56.966" }}
//             xmlSpace="preserve"
//             width="512px"
//             height="512px"
//           >
//             <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//           </svg>
//         </button>
//       </div>

//       {/* <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
//         <form
//           action="/search"
//           className="flex flex-wrap justify-between md:flex-row"
//         >
//           <input
//             type="search"
//             name="query"
//             placeholder="Search Components"
//             required="required"
//             className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
//           />{" "}
//           <button
//             type="submit"
//             className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>
//           </button>
//         </form>
//       </div> */}
//     </div>
//   );
// };

export default FindACar;
