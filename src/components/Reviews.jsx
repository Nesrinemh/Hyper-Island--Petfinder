import reviewsUsers from "../data/reviewsUsers.js";

export default function Reviews() {
  const Star = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-label="Star"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our pet lovers
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsUsers.map((review, index) => (
            <article key={index} className="mt-4">
              <div className="mb-4 sm:break-inside-avoid">
                <blockquote className="rounded-lg bg-gray-50 p-2 sm:p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={`Profile picture of ${review.nameUser}`}
                      src={review.imageUser}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {review.nameUser}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{review.testimony}</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
