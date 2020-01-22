export const initState = [
  {
    item: "Learn About Reducers",
    completed: false,
    id: Date.now()
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newITem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newITem];

    case "IS_CLICKED":
      return state.map(ele => {
        if (ele.id === action.payload) {
          return { ...ele, completed: !ele.completed };
        } else {
          return ele;
        }
      });

    case "REMOVE":
      return state.filter(ele => !ele.completed);

    default:
      return state;
  }
};
