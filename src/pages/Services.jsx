import { Outlet, Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: "maintenance",
    name: "Car Maintenance",
    icon: "🔧",
    description:
      "Professional maintenance for better performance.",
  },
  {
    id: "detailing",
    name: "Car Detailing",
    icon: "✨",
    description:
      "Premium exterior and interior detailing.",
  },
  {
    id: "insurance",
    name: "Car Insurance",
    icon: "🛡️",
    description:
      "Reliable insurance support for your vehicle.",
  },
];

function Services() {
  return (
    <section className="section">

      <div className="section-heading">

        <p>OUR SERVICES</p>

        <h1>Automotive Services</h1>

        <p>
          Everything your car needs in one place.
        </p>

      </div>

      <div className="service-grid">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

      <div className="nested-area">

        <Outlet />

      </div>

    </section>
  );
}

export default Services;