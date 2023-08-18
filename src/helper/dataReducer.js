import { CreateSlice, createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    updateData: (state, action) => {
      const { id, date, invoice, payee, payer, amount } = action.payload;
      const updated = state.find((data) => data.id == id);
      updated.date = date;
      updated.invoice_no = invoice;
      updated.amount = amount;
      updated.payee.name = payee;
      updated.payer.name = payer;
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
