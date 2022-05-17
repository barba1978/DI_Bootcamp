


const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
      case 'ADD-5':
      return state +5;
    default:
      return state;
  }
};
export default counter;
