import { configureStore } from '@reduxjs/toolkit'
import FakeSlice from './FakeSlice'

export const store= configureStore({
  reducer: {
    fake: FakeSlice
  },
})