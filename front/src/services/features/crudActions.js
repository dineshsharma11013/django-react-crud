import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitData = createAsyncThunk(
    'submitData',
    async(args, {rejectWithValue})=>{
        try{
            const output = await axios.get('http://127.0.0.1:8000/api/contact');
            console.log(output)
        }
        catch(error)
        {
            console.log(error)
        }
    }
)







