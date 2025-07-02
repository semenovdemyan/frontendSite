import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CubeState {
  rotationX: number
  rotationY: number
  rotationZ: number
  positionX: number
  positionY: number
  isAnimating: boolean
}

const initialState: CubeState = {
  rotationX: 0,
  rotationY: 0,
  rotationZ: 25,
  positionX: 0,
  positionY: 0,
  isAnimating: false,
}

const cubeSlice = createSlice({
  name: 'cube',
  initialState,
  reducers: {
    setRotation(
      state,
      action: PayloadAction<{ x: number; y: number; z: number }>
    ) {
      state.rotationX = action.payload.x
      state.rotationY = action.payload.y
      state.rotationZ = action.payload.z
    },
    setPosition(state, action: PayloadAction<{ x: number; y: number }>) {
      state.positionX = action.payload.x
      state.positionY = action.payload.y
    },
    setAnimating(state, action: PayloadAction<boolean>) {
      state.isAnimating = action.payload
    },
  },
})

export const { setRotation, setPosition, setAnimating } = cubeSlice.actions

export default cubeSlice.reducer
