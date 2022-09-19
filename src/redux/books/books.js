// action types
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// state
const initialBook = {
  id: 0,
  title: '',
  author: '',
  category: '',
  progress: 0,
  chapter: 'Chapter 1',
};
const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: 85,
    chapter: 'Chapter 17: The Hunger Games',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    progress: 10,
    chapter: 'Chapter 1: Arrakis',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Learning',
    progress: 70,
    chapter: 'Introduction',
  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    category: 'Action',
    progress: 50,
    chapter: 'The Fellowship of the Ring',
  },
];

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
      return [...state, { ...initialBook, ...payload }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
}
