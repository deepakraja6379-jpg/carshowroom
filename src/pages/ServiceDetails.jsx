import { useParams, Link } from "react-router-dom";

function ServiceDetails() {

  const { serviceId } = useParams();

  const serviceData = {
    maintenance: {
      title: "Car Maintenance",
      text:
        "Our professional maintenance service includes engine checks, oil changes, brake inspection and complete vehicle health checks.",
    },

    detailing: {
      title: "Car Detailing",
      text:
        "Give your vehicle a premium finish with professional interior cleaning, exterior polishing and protective treatments.",
    },

    insurance: {
      title: "Car Insurance",
      text:
        "Get assistance with vehicle insurance plans, renewals and claim support.",
    },
  };

  const service =
    serviceData[serviceId];

  if (!service) {
    return (
      <div className="service-detail">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="service-detail">

      <h2>{service.title}</h2>

      <p>{service.text}</p>

      <Link
        to="/contact"
        className="btn"
      >
        Contact Us
      </Link>

    </div>
  );
}

export default ServiceDetails;