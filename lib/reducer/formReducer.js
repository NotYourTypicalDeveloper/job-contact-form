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
    salary: "",
    location: "",
    workinghours: 0,
    workstyle: "",
    companysculture: "",
    recruitmentprocess: "",
  },
  isLoading: false,
  currentStep: 1,
  isTouched: {
    sendername: false,
    company: false,
    email: false,
    telephone: false,
    message: false,
    jobdescription: false,
    salary: false,
    location: false,
    workinghours: false,
    companysculture: false,
    recruitmentprocess: false,
  },
  globalErrorMsg: "",
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
    case "UPDATE_FORM_ERROR": {
      return {
        ...state,
        globalErrorMsg: action.payload,
      };
    }
    case "UPDATE_ONBLUR": {
      return {
        ...state,
        isTouched: {
          ...state.isTouched,
          [action.payload.fieldName]: true,
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

    case "MOVE_NEXT_PAGE": {
      return { ...state, currentStep: state.currentStep + 1 };
    }

    case "MOVE_PREV_PAGE": {
      return {
        ...state,
        currentStep: state.currentStep - 1,
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
