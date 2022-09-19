import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categories/categories.js";
import booksReducer from "./books/books.js";

const store = configureStore({
    reducer: {
        books: booksReducer,
        categories: categoryReducer,
    },
});

export default store;