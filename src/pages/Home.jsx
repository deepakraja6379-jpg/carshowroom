import { Link } from "react-router-dom";
import { useCars } from "../context/CarContext";
import CarCard from "../components/CarCard";

function Home() {

  const { cars } = useCars();

  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            PREMIUM CAR SHOWROOM
          </p>

          <h1>
            Find Your
            <span> Dream Car</span>
          </h1>

          <p>
            Discover premium cars from the world's
            leading automobile brands.
          </p>

          <Link
            to="/cars"
            className="hero-btn"
          >
            Explore Cars
          </Link>

        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <p>OUR COLLECTION</p>

          <h2>
            Featured Cars
          </h2>
        </div>

        <div className="car-grid">

          {cars.slice(0, 3).map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </section>

      <section className="why-us">

        <h2>Why Choose BOB Cars?</h2>

        <div className="feature-grid">

          <div>
            <span>🚘</span>
            <h3>Premium Cars</h3>
            <p>
              Carefully selected premium vehicles.
            </p>
          </div>

          <div>
            <span>💰</span>
            <h3>Best Pricing</h3>
            <p>
              Competitive and transparent pricing.
            </p>
          </div>

          <div>
            <span>🔧</span>
            <h3>Expert Service</h3>
            <p>
              Professional automobile service.
            </p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Trusted Dealer</h3>
            <p>
              Customer satisfaction is our priority.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;