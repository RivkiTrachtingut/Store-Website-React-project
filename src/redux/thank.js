import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../Api";

export const fetchDataAsyncAction=createAsyncThunk("product/fetchData", async()=>{
    const data = await fetchData();
   
    return data;
});