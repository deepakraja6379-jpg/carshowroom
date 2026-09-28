import {
  useRef,
  useState,
} from "react";

function Contact() {

  const formRef = useRef(null);

  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage(
      "Thank you! Your message has been received."
    );

    formRef.current.reset();
  };

  return (
    <section className="form-section">

      <div className="contact-layout">

        <div className="contact-info">

          <p>GET IN TOUCH</p>

          <h1>
            Contact BOB Cars
          </h1>

          <p>
            Have questions about our cars,
            services or test drives?
            Contact our team.
          </p>

          <div className="contact-item">
            📞 +91 6379262332
          </div>

          <div className="contact-item">
            ✉ bobcars@gmail.com
          </div>

          <div className="contact-item">
            📍 Tamil Nadu, India
          </div>

        </div>

        <div className="form-card">

          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >

            <input
              required
              placeholder="Your Name"
            />

            <input
              required
              type="email"
              placeholder="Your Email"
            />

            <input
              required
              placeholder="Phone Number"
            />

            <textarea
              required
              rows="5"
              placeholder="Your Message"
            />

            <button
              className="hero-btn"
              type="submit"
            >
              Send Message
            </button>

          </form>

          {message && (
            <div className="success">
              {message}
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default Contact;