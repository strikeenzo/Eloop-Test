import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

interface HomeState {
  loading: boolean
}

const initialState: HomeState = {
  loading: false,
}

export const { reducer, actions } = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export const selectLoading = (state: RootState) => state.home.loading
export default reducer
