import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//Interfaces
import {IDate} from '../../ts/interfaces'

export interface DatesState {
  dates: Array<IDate>
}

const initialState: DatesState = {
    dates: [],
}

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    addDate: (state, action: PayloadAction<Array<IDate>>) => {
        console.log('[REDUX] [addDate] ', action.payload);
        state.dates = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addDate } = datesSlice.actions

export default datesSlice.reducer