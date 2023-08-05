export const initialState = {
  values: {
    name: "",
    email: "",
    telephone: "",
    contract: "",
    seniority: [],
    message: "",
  },
  isLoading: false,
};

// TODO: Add submit action
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

    case "ADD_CHECKBOX_VALUE": {
      const { fieldName, newValue } = action.payload;
      const updatedCheckboxesValues = [...state.values[fieldName], newValue];
      return {
        ...state,
        values: {
          ...state.values,
          [fieldName]: [...updatedCheckboxesValues],
        },
      };
    }

    case "REMOVE_CHECKBOX_VALUE": {
      const { fieldName, newValue } = action.payload;
      const updatedValues = {
        ...state.values,
        [fieldName]: [
          ...state.values[fieldName].filter((option) => option !== newValue),
        ],
      };
      return {
        ...state,
        values: {
          ...updatedValues,
        },
      };
    }
  }
};
