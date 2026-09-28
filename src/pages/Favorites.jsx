import { useCars } from "../context/CarContext";
import CarCard from "../components/CarCard";

function Favorites() {

  const {
    cars,
    favorites,
  } = useCars();

  const favoriteCars =
    cars.filter((car) =>
      favorites.includes(car.id)
    );

  return (
    <section className="section">

      <div className="section-heading">

        <p>YOUR COLLECTION</p>

        <h1>Favorite Cars</h1>

      </div>

      {favoriteCars.length === 0 ? (

        <div className="empty">

          <h2>No Favorite Cars</h2>

          <p>
            Click the ❤️ icon on a car to add it
            to your favorites.
          </p>

        </div>

      ) : (

        <div className="car-grid">

          {favoriteCars.map((car) => (
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

export default Favorites;