import { createSlice } from '@reduxjs/toolkit'
import { getData, insertData, removeData, editData, updateData } from './crudActions';

const initialState={
  users:[],
  selectedUser:{},
  loading:false,
  msg:null,
  err:null,
  searchData:[]
};

const crudSlice =  createSlice({
  name:'crud',
  initialState:initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getData.pending, (state)=>{
     // console.log("pending",state)
    });
    builder.addCase(getData.fulfilled, (state, {payload})=>{
      //console.log("full", payload)
      state.users = payload;
    //  console.log(state.users);
    });
    builder.addCase(getData.rejected, (state, {payload})=>{
      //console.log("rejected",state, payload)
    });
    // insert data
    builder.addCase(insertData.pending, (state)=>{
      console.log("pending", state)
    });
    builder.addCase(insertData.fulfilled, (state, {payload})=>{
      console.log("full", payload)
    });
    builder.addCase(insertData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
    });
    // delete data
    builder.addCase(removeData.pending, (state)=>{
      console.log("pending", state)
    });
    builder.addCase(removeData.fulfilled, (state, {payload})=>{
      console.log("full", payload)
      
    });
    builder.addCase(removeData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
    });
    // edit data
    builder.addCase(editData.pending, (state)=>{
      console.log("pending", state)
    });
    builder.addCase(editData.fulfilled, (state, {payload})=>{
      state.selectedUser=payload
      console.log("full", payload)
    });
    builder.addCase(editData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
    });
    // update data
    builder.addCase(updateData.pending, (state)=>{
      console.log("pending", state)
    });
    builder.addCase(updateData.fulfilled, (state, {payload})=>{
      
      console.log("full", payload)
    });
    builder.addCase(updateData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
    });
  }
});
export default crudSlice.reducer;
