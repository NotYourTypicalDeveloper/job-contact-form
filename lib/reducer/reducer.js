export const initialState = {
  values: {
    name: "",
    email: "",
    telephone: "",
    contract: "",
    seniority: "",
    // workstyle: "",
    message: "",
  },
  isLoading: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.fieldName]: action.payload.newValue,
        },
      };
    }
  }
};
