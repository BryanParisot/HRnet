import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmploye(state, action) {
       state.employees.push(action.payload);
    },
  },
});

export const { addEmploye } = employeeSlice.actions;
export const employeesReducer = employeeSlice.reducer;
