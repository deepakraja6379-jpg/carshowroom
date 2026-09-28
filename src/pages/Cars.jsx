import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import { useCars } from "../context/CarContext";
import CarCard from "../components/CarCard";

function Cars() {

  const { cars } = useCars();

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const search =
    searchParams.get("search") || "";

  const brand =
    searchParams.get("brand") || "All";

  const filteredCars = useMemo(() => {

    return cars.filter((car) => {

      const matchesSearch =
        car.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesBrand =
        brand === "All" ||
        car.brand === brand;

      return matchesSearch && matchesBrand;
    });

  }, [cars, search, brand]);

  const brands = [
    "All",
    ...new Set(cars.map((car) => car.brand)),
  ];

  const handleSearch = (e) => {

    setSearchParams({
      search: e.target.value,
      brand,
    });
  };

  return (
    <section className="section">

      <div className="section-heading">

        <p>OUR COLLECTION</p>

        <h1>Explore Cars</h1>

        <p>
          Find the perfect car for your lifestyle.
        </p>

      </div>

      <div className="filters">

        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={handleSearch}
        />

        <select
          value={brand}
          onChange={(e) =>
            setSearchParams({
              search,
              brand: e.target.value,
            })
          }
        >

          {brands.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

      </div>

      {filteredCars.length === 0 ? (

        <div className="empty">
          <h2>No Cars Found</h2>
          <p>
            Try changing your search or filter.
          </p>
        </div>

      ) : (

        <div className="car-grid">

          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      )}

    </section>
  );
}

export default Cars;