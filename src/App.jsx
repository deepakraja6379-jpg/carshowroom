import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import TestDrive from "./pages/TestDrive";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/cars" element={<Cars />} />

          <Route path="/cars/:id" element={<CarDetails />} />

          {/* Nested Routing */}
          <Route path="/services" element={<Services />}>
            <Route
              path=":serviceId"
              element={<ServiceDetails />}
            />
          </Route>

          <Route path="/test-drive" element={<TestDrive />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/admin" element={<Admin />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;