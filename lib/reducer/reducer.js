export const initialState = {
  values: {
    sendername: "",
    company: "",
    email: "",
    telephone: "",
    message: "",
    contract: "",
    seniority: [],
    jobdescription: "",
    salary: "Move the slider",
    location: "",
    workinghours: 0,
    workstyle: "",
    companysculture: "",
    recruitmentprocess: "",
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

    case "TOGGLE_ISLOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case "RESET_FORM": {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
