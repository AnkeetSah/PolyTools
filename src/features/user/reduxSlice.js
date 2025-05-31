import {createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails } from '../../services/userService';
/*  createSlice is a function from Redux Toolkit.
    It helps you create reducers + actions in one go.
    It automatically generates:
        Action types (e.g., counter/increment)
        Action creators (e.g., increment())
        Reducer function*/
        
const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    }, 
    reducers:{
        
    }
})
