import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/api';
import Skeleton from '../SkeletonLoad';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);

  if (books === 'loading') {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
      <ul className="flex flex-col gap-4">
        {books.length && typeof books !== 'string' ? (
          books.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <></>
        )}
      </ul>
      <span className="block mt-10 rounded-full bg-gray-300 w-full h-1" />
      <AddBook />
    </div>
  );
};

export default Books;
