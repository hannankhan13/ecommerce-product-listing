import { createSelector } from "@reduxjs/toolkit";

export const selectProductsState = (state) => state.products;

export const selectFilteredProducts = createSelector(
  [selectProductsState],
  ({ items, category, minRating, sortOrder }) => {
    let list = [...items];

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    list = list.filter((p) => p.rating >= minRating);

    list.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return list;
  }
);
