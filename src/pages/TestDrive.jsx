import {
  useRef,
  useState,
} from "react";

import { useCars } from "../context/CarContext";

function TestDrive() {

  const { cars } = useCars();

  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const validate = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email =
        "Enter a valid email";
    }

    if (form.phone.length !== 10) {
      newErrors.phone =
        "Enter a valid 10 digit phone number";
    }

    if (!form.car) {
      newErrors.car =
        "Please select a car";
    }

    if (!form.date) {
      newErrors.date =
        "Please select a date";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0
    ) {
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        car: "",
        date: "",
      });
    }

  };

  return (
    <section className="form-section">

      <div className="form-card">

        <h1>Book a Test Drive</h1>

        <p>
          Experience your dream car before you buy.
        </p>

        {submitted && (
          <div className="success">
            Test drive booked successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            ref={nameRef}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && (
            <small>{errors.name}</small>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small>{errors.email}</small>
          )}

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          {errors.phone && (
            <small>{errors.phone}</small>
          )}

          <select
            name="car"
            value={form.car}
            onChange={handleChange}
          >

            <option value="">
              Select Car
            </option>

            {cars.map((car) => (
              <option
                key={car.id}
                value={car.name}
              >
                {car.name}
              </option>
            ))}

          </select>

          {errors.car && (
            <small>{errors.car}</small>
          )}

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          {errors.date && (
            <small>{errors.date}</small>
          )}

          <button
            className="hero-btn"
            type="submit"
          >
            Book Test Drive
          </button>

        </form>

      </div>

    </section>
  );
}

export default TestDrive;