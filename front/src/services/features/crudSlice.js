import { createSlice } from '@reduxjs/toolkit'
import { getData, insertData, removeData, editData, updateData } from './crudActions';

const initialState={
  users:[],
  selectedUser:{},
  loading:false,
  msg:null,
  error:false,
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
      state.error=false;
      state.loading = true;
      console.log("pending", state)
    });
    builder.addCase(insertData.fulfilled, (state, {payload})=>{
      console.log("full", payload)
      state.error=false;
      state.msg=payload;
    });
    builder.addCase(insertData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
      state.error=true;
      state.msg=payload;
    });
    // delete data
    builder.addCase(removeData.pending, (state)=>{
      console.log("pending", state)
      state.loading=true;
      state.error=false;
    });
    builder.addCase(removeData.fulfilled, (state, {payload})=>{
      console.log("full", payload)
      state.error=false;
      state.msg = payload;
    });
    builder.addCase(removeData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
      state.error=true;
      state.msg=payload;
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
      state.error=false;
      state.loading = true;
      console.log("pending", state)
    });
    builder.addCase(updateData.fulfilled, (state, {payload})=>{
      console.log("full", payload)
      state.error=false;
      state.msg=payload;
    });
    builder.addCase(updateData.rejected, (state, {payload})=>{
      console.log("rejected", payload)
      state.error=true;
      state.msg=payload;
    });
    
  }
});
export default crudSlice.reducer;
