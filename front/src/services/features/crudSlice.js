import { createSlice } from '@reduxjs/toolkit'
import { submitData } from './crudActions'

const initialState = {
  loading: false,
  result: [],
  error:null,
  success:null
};

const crudSlice =  createSlice({
  name:'crudSlice',
  initialState:initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(submitData.pending, (state)=>{
      console.log(state)
    });
    builder.addCase(submitData.fulfilled, (state, {payload})=>{
      console.log(payload)
    });
    builder.addCase(submitData.rejected, (state, {payload})=>{
      console.log(payload)
    })
  }
})

export default crudSlice;
