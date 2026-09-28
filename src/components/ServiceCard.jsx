import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {service.icon}
      </div>

      <h3>{service.name}</h3>

      <p>{service.description}</p>

      <Link
        className="btn"
        to={`/services/${service.id}`}
      >
        Learn More
      </Link>

    </div>
  );
}

export default ServiceCard;