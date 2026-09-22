import React from 'react';
import BooksCard from '../shared/BooksCard';

const getBooks = async () => {
const res = await fetch('http://localhost:3000/booksData.json');

if (!res.ok) {
throw new Error('Failed to fetch books data');
}

const data = await res.json();
return data;
};

const Books = async () => {
const booksData = await getBooks();

return ( <section className="container mx-auto my-16 px-4">


  {/* Section Heading */}
  <div className="mb-10 text-center">
    <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
      Explore Our Collection
    </span>

    <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
      Discover Your Next{' '}
      <span className="text-emerald-600">Favorite Book</span>
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
      Find your next great read from our carefully selected collection
      of books. Your next adventure is just a page away!
    </p>
  </div>

  {/* Book Cards */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {booksData.map((book: IBook, ind: number) => (
      <BooksCard key={book.bookId || ind} book={book} />
    ))}
  </div>

</section>


);
};

export default Books;
