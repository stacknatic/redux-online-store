import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = "https://fakestoreapi.com/products";

const initialState = {
    products: [""],
    errors: {}
}

export const fetchProducts = createAsyncThunk(
    "products/fetchproducts",
    async () => {
        const response = await axios.get(api);
        const data = await response.data;
        return data;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    // The 'reducers' field lets us define reducers and generat associated actions
    // This is where direct logic goes
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products = [];
            })
    }

})

export default productsSlice.reducer;