import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import carReducer from "../reducer/carReducer";

const CarContext = createContext();

const initialCars = [
  {
    id: 1,
    name: "Honda city 2026",
    brand: "Honda",
    price: 1200000,
    fuel: "Petrol",
    year: 2026,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.JXtcLsVkEAAQau6QK40dJgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Hundai verna",
    brand: "Hundais",
    price: 1500000,
    fuel: "Petrol",
    year: 2025,
    image:
      "https://hanshyundai.com/blog/wp-content/uploads/2025/02/verna-exterior-right-front-three-quarter-101.webp",
  },
  {
    id: 3,
    name: "Audi A6",
    brand: "Audi",
    price: 6800000,
    fuel: "Diesel",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
  },
  {
    id: 4,
    name: "Skoda Salvia",
    brand: "Skoda",
    price: 1450000,
    fuel: "Diesel",
    year: 2025,
    image:
      "https://th.bing.com/th/id/OIP.4Wfc8chp8iw2w3lqkFvxXQHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    name: "BMW M3",
    brand: "BMW",
    price: 5500000,
    fuel: "Diesal",
    year: 2025,
    image:
      "https://i.bstr.es/highmotor/2019/05/bmw-m3-e92-gts-2.jpg",
  },
  {
    id: 6,
    name: "SWift Dzire",
    brand: "Maruthi",
    price: 800000,
    fuel: "Diesel",
    year: 2024,
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F11%2F3215140%2FMaruti_Suzuki_Dzire_Launch_LIVE_Updates_Price_Features_Specifications_Images_94bb936476.jpg&w=1080&q=75",
  },
];

export function CarProvider({ children }) {
  const [cars, dispatch] = useReducer(
    carReducer,
    initialCars
  );

  const [favorites, setFavorites] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "TOGGLE":
          return state.includes(action.id)
            ? state.filter((id) => id !== action.id)
            : [...state, action.id];

        default:
          return state;
      }
    },
    []
  );

  useEffect(() => {
    console.log("Cars loaded:", cars.length);
  }, [cars]);

  const addCar = (car) => {
    dispatch({
      type: "ADD",
      payload: car,
    });
  };

  const updateCar = (car) => {
    dispatch({
      type: "UPDATE",
      payload: car,
    });
  };

  const deleteCar = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const toggleFavorite = (id) => {
    setFavorites({
      type: "TOGGLE",
      id,
    });
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        favorites,
        addCar,
        updateCar,
        deleteCar,
        toggleFavorite,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}