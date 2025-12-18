import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  category: "All",
  minRating: 0,
  sortOrder: "asc",
  page: 1,
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setMinRating(state, action) {
      state.minRating = action.payload;
      state.page = 1;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const {
  setProducts,
  setCategory,
  setMinRating,
  setSortOrder,
  setPage,
  toggleFavorite,
} = productSlice.actions;

export default productSlice.reducer;
