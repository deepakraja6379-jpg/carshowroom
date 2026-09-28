function carReducer(state, action) {
  switch (action.type) {

    case "ADD":
      return [
        ...state,
        {
          ...action.payload,
          id: Date.now(),
        },
      ];

    case "UPDATE":
      return state.map((car) =>
        car.id === action.payload.id
          ? action.payload
          : car
      );

    case "DELETE":
      return state.filter(
        (car) => car.id !== action.payload
      );

    default:
      return state;
  }
}

export default carReducer;