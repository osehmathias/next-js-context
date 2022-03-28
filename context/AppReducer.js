// empty array of items for the initial state
export const initialState = {
  items: [],
};

export const AppReducer = (state, action) => {
  // initialize the state with values from localStorage
  switch (action.type) {
    case "init_stored": {
      return action.item;
    }
    // adds an item
    case "add_item": {
      return {
        ...state,
        // merges the existing state with new items
        items: [...state.items, action.item],
      };
    }
  }
};
