import { useState } from "react";
import { useCars } from "../context/CarContext";

function Admin() {

  const {
    cars,
    addCar,
    updateCar,
    deleteCar,
  } = useCars();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    fuel: "Petrol",
    year: "",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  });

  const [editingId, setEditingId] =
    useState(null);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const resetForm = () => {

    setForm({
      name: "",
      brand: "",
      price: "",
      fuel: "Petrol",
      year: "",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    });

    setEditingId(null);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.brand ||
      !form.price ||
      !form.year
    ) {
      alert("Please fill all fields");
      return;
    }

    const carData = {
      ...form,
      price: Number(form.price),
      year: Number(form.year),
    };

    if (editingId) {

      updateCar({
        ...carData,
        id: editingId,
      });

    } else {

      addCar(carData);

    }

    resetForm();
  };

  const handleEdit = (car) => {

    setForm(car);
    setEditingId(car.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="section">

      <div className="section-heading">

        <p>ADMIN PANEL</p>

        <h1>Car Management</h1>

      </div>

      <div className="admin-form">

        <h2>
          {editingId
            ? "Update Car"
            : "Add New Car"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Car Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <select
            name="fuel"
            value={form.fuel}
            onChange={handleChange}
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>

          <input
            name="year"
            type="number"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="hero-btn"
          >
            {editingId
              ? "Update Car"
              : "Add Car"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}

        </form>

      </div>

      <div className="admin-list">

        <h2>
          Available Cars ({cars.length})
        </h2>

        {cars.map((car) => (

          <div
            className="admin-item"
            key={car.id}
          >

            <div>

              <strong>
                {car.name}
              </strong>

              <p>
                {car.brand} • ₹
                {car.price.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <div>

              <button
                className="edit-btn"
                onClick={() =>
                  handleEdit(car)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => {

                  if (
                    window.confirm(
                      "Delete this car?"
                    )
                  ) {
                    deleteCar(car.id);
                  }

                }}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Admin;