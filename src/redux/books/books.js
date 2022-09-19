// action types
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// state
const initialState = [];

// action creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducer
export default function booksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
}
