import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
return ( <section className="px-4 py-8 md:px-8 lg:px-12"> <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 shadow-lg">

    <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 md:grid-cols-2 md:p-12 lg:gap-12 lg:p-16">

      {/* Left Content */}
      <div className="flex flex-col items-start space-y-6">

        {/* Small Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
          📚 Read • Explore • Grow
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Books to freshen up{' '}
          <span className="text-emerald-600">
            your bookshelf
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
          Discover your next favorite read. Explore a wonderful
          collection of books that inspire, educate, and entertain.
          Your next adventure is just a page away.
        </p>

        {/* Button */}
        <button
          type="button"
          className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          View The List

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Benefits */}
        <div className="grid w-full grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
              🚚
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Fast Delivery
              </h3>
              <p className="text-xs text-slate-500">
                Right to your door
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-lg">
              🛡️
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Secure Payment
              </h3>
              <p className="text-xs text-slate-500">
                Safe and trusted
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg">
              ❤️
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Book Lovers
              </h3>
              <p className="text-xs text-slate-500">
                Books for everyone
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />

        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-sky-200/60 blur-2xl" />

        <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200/60 transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={bannerImg}
            alt="A collection of books ready to be explored"
            className="h-auto w-full rounded-xl object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Floating Label */}
        <div className="absolute -bottom-5 right-4 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-lg sm:-right-5">
          <p className="text-xs font-medium text-slate-500">
            Your next chapter starts here
          </p>
          <p className="text-sm font-bold text-emerald-700">
            Find your next favorite book ✨
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


);
};

export default Banner;
