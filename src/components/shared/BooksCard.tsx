import Image from 'next/image';
import React from 'react';

interface IBookCardProps {
book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
return ( <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

  {/* Book Image */}
  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 p-5">

    <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
      {book.category}
    </span>

    <Image
      src={book.image}
      alt={`Cover of ${book.bookName}`}
      width={200}
      height={240}
      unoptimized
      className="h-full w-auto max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
    />

  </div>

  {/* Book Details */}
  <div className="p-5">

    {/* Rating */}
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-lg text-amber-400">★</span>

        <span className="text-sm font-bold text-slate-700">
          {book.rating}
        </span>
      </div>

      <span className="text-xs text-slate-400">
        {book.totalPages} pages
      </span>
    </div>

    {/* Book Title */}
    <h3 className="mb-2 line-clamp-1 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
      {book.bookName}
    </h3>

    {/* Author */}
    <p className="mb-4 text-sm text-slate-500">
      By{' '}
      <span className="font-medium text-slate-700">
        {book.author}
      </span>
    </p>

    {/* Review */}
    <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
      {book.review}
    </p>

    {/* Tags */}
    <div className="mb-5 flex flex-wrap gap-2">
      {book.tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between border-t border-slate-100 pt-4">

      <div>
        <p className="text-xs text-slate-400">Published</p>

        <p className="text-sm font-semibold text-slate-700">
          {book.yearOfPublishing}
        </p>
      </div>

      <button
        type="button"
        className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200"
      >
        View Details →
      </button>

    </div>

  </div>
</div>


);
};

export default BooksCard;
