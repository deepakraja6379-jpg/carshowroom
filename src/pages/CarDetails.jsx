import {
  Link,
  useParams,
} from "react-router-dom";

import { useCars } from "../context/CarContext";

function CarDetails() {

  const { id } = useParams();

  const { cars } = useCars();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return (
      <section className="section empty">
        <h1>Car Not Found</h1>

        <Link
          to="/cars"
          className="btn"
        >
          Back to Cars
        </Link>
      </section>
    );
  }

  return (
    <section className="details">

      <div className="details-image">

        <img
          src={car.image}
          alt={car.name}
        />

      </div>

      <div className="details-content">

        <p className="brand">
          {car.brand}
        </p>

        <h1>{car.name}</h1>

        <h2>
          ₹{car.price.toLocaleString("en-IN")}
        </h2>

        <div className="details-info">

          <div>
            <strong>Brand</strong>
            <span>{car.brand}</span>
          </div>

          <div>
            <strong>Year</strong>
            <span>{car.year}</span>
          </div>

          <div>
            <strong>Fuel</strong>
            <span>{car.fuel}</span>
          </div>

        </div>

        <p>
          Experience exceptional performance,
          advanced technology and premium comfort
          with the {car.name}.
        </p>

        <Link
          to="/test-drive"
          className="hero-btn"
        >
          Book Test Drive
        </Link>

      </div>

    </section>
  );
}

export default CarDetails;