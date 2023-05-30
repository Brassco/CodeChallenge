import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//Interfaces
import {ILocation} from '../../ts/interfaces'

export interface LocationState {
  locations: Array<ILocation>
}

const initialState: LocationState = {
    locations: [],
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    setLocationsList: (state, action: PayloadAction<Array<ILocation>>) => {
      console.log('[REDUX] [setLocationsList] ', action.payload);
      state.locations = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLocationsList } = locationsSlice.actions

export default locationsSlice.reducer