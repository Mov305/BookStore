const AddBook = () => (
  <div className="py-16 mx-auto max-w-screen-xl flex flex-col items-center md:items-start">
    <h2 style={{ fontFamily: 'Montserrat' }} className="my-2 text-xl md:text-3xl text-gray-500 dark:text-gray-200 font-semibold">ADD NEW BOOK</h2>
    <form className=" flex flex-col md:flex-row gap-5 w-full dark:text-white">
      <div className=" grow">
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md "
            placeholder="Enter The Book Title"
          />
        </div>
      </div>
      <div className="md:max-w-[20%]">
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md"
            placeholder="Enter The Book Author"
          />
        </div>
      </div>
      <div className="md:max-w-[20%]">
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md"
            placeholder="Category"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-block px-5 py-3 text-sm font-medium text-white bg-[#08ACB4] rounded-lg"
      >
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddBook;
