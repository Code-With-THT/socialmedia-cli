import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type BlankBuilderType = {};

const initialState: BlankBuilderType = {};

const blankBuilder = createSlice({
  name: 'blankBuilder',
  initialState,
  reducers: {
    setBlank: (state, action: PayloadAction<string>) => {
      // state.blank = action.payload;
    },
  },
});

export const BlankBuilderActions = blankBuilder.actions;

export default blankBuilder.reducer;
