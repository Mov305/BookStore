import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
      <ul className="flex flex-col gap-4">
        {books.length ? books.map((book) => <Book key={book.id} book={book} />) : <></>}
      </ul>
      <span className="block mt-10 rounded-full bg-gray-300 w-full h-1" />
      <AddBook />
    </div>
  );
};

export default Books;
