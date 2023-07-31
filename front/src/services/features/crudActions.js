import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";

export const submitData = createAsyncThunk(
    'submitData',
    async(data, {rejectWithValue})=>{
        try{
            const output = await API.post('/contact', data);
            console.log(output)
        }
        catch(error)
        {
            console.log(error)
        }
    }
)




