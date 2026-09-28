import { Link } from "react-router-dom";
import { useCars } from "../context/CarContext";

function CarCard({ car }) {

  const {
    favorites,
    toggleFavorite,
  } = useCars();

  const isFavorite = favorites.includes(car.id);

  return (
    <div className="car-card">

      <div className="car-image-wrapper">

        <img
          src={car.image}
          alt={car.name}
        />

        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(car.id)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      </div>

      <div className="car-content">

        <p className="brand">
          {car.brand}
        </p>

        <h3>{car.name}</h3>

        <div className="car-info">
          <span>{car.year}</span>
          <span>{car.fuel}</span>
        </div>

        <h2>
          ₹{car.price.toLocaleString("en-IN")}
        </h2>

        <Link
          to={`/cars/${car.id}`}
          className="btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default CarCard;