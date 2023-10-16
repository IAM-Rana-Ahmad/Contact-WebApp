import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContact = createAsyncThunk("contacts", async () => {
  try {
    const getData = await axios.get("https://dummyjson.com/users?limit=100");
    const response = getData.data;
    return response.users;
  } catch (error) {
    console.error("An error occurred", error);
    throw error; 
  }
});

export const contacts = createSlice({
  name: "contacts",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    viewContact:{},
    filterData:[],
    
  },
  reducers: {
    addContact: (state, action) => {
       state.viewContact= action.payload;
    },
    filterData: (state, action) => {
      const bloodGroupToFilter = action.payload;
      
      state.filterData=state.data.filter((contact) => contact.bloodGroup === bloodGroupToFilter);
      console.log(state.data)
    },
    filterSearchData: (state, action) => {
      const searchTerm = action.payload;
      
     
      state.filterData = state.data.filter((contact) => {
       
        const lowerSearchTerm = searchTerm.toLowerCase();
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        return fullName.includes(lowerSearchTerm);
      });
    },
  },
  extraReducers: {
    [getContact.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      
      state.error = null;
    },
    [getContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});


export const { addContact,filterData, filterSearchData } = contacts.actions;

export default contacts.reducer;
