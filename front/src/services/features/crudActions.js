import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../API'

export const getData = createAsyncThunk(
    'getAllData',
    async(args, {rejectWithValue})=>{
        try{
          const response = await API.get('/contact');
           // console.log(response.data);
            return response.data;
        }
        catch(error)
        {
          console.log(error);
          //console.log(rejectWithValue(error.response.data))
        }
    }
  )


  export const insertData = createAsyncThunk(
    'insertData',
    async(data, {rejectWithValue})=>{
        try{
          const response = await API.post('/contact', data);
            console.log(response.data);
            return response.data;
        }
        catch(error)
        {
          console.log(error);
          //console.log(rejectWithValue(error.response.data))
        }
    }
  )  

  export const removeData = createAsyncThunk(
    'removeData',
    async(id, {rejectWithValue})=>{
        try{
          const response = await API.delete(`/contact/${id}`);
            console.log(response.data);
            return response.data;
        }
        catch(error)
        {
          console.log(error);
          //console.log(rejectWithValue(error.response.data))
        }
    }
  )  

  export const editData = createAsyncThunk(
    'editData',
    async(id, {rejectWithValue})=>{
        try{
          const response = await API.get(`/contact/${id}`);
            console.log(response.data);
            return response.data;
        }
        catch(error)
        {
          console.log(error);
          //console.log(rejectWithValue(error.response.data))
        }
    }
  )  

  export const updateData = createAsyncThunk(
    'updateData',
    async(data, {rejectWithValue})=>{
        try{
          const response = await API.put(`/contact/${data.id}`, data);
           // console.log(response.data);
            return response.data;
        }
        catch(error)
        {
          console.log(error);
          //console.log(rejectWithValue(error.response.data))
        }
    }
  )  




