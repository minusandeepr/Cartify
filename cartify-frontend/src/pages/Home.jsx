// src/pages/Home.jsx
import { Link } from "react-router-dom";

/**
 * Home page: Hero + Product highlights.
 * The product cards use a small dummy array so you can see the layout.
 * Later you can replace `featured` array with data from the API.
 */
export default function Home() {
  const featured = [
    {
      _id: "p1",
      name: "Classic Leather Wallet",
      price: 799,
      tag: "Best seller",
      img: null, // replace with image URL if available
      desc: "Hand-stitched, slim profile — everyday carry essential.",
    },
    {
      _id: "p2",
      name: "Wireless Earbuds",
      price: 2499,
      tag: "Trending",
      img: null,
      desc: "Clear calls, punchy bass, long battery life.",
    },
    {
      _id: "p3",
      name: "Stainless Steel Water Bottle",
      price: 499,
      tag: "Eco pick",
      img: null,
      desc: "Keeps drinks cold for 24 hours — leakproof.",
    },
    {
      _id: "p4",
      name: "Minimalist Backpack",
      price: 2999,
      tag: "Staff pick",
      img: null,
      desc: "Lightweight, laptop sleeve and organiser pockets.",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Shop smart. Ship fast. <br />
              <span className="text-indigo-600">Cartify</span> makes it simple.
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Discover curated products, quick checkout with Razorpay, fast
              delivery and buy with confidence. Build your cart, save favorites,
              and enjoy a smooth shopping experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Shop Products
              </Link>
              <Link
                to="/auth/register"
                className="border border-indigo-600 text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Create Account
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-700">
              <div>
                <div className="text-indigo-600 text-2xl mb-1">✓</div>
                <p className="font-semibold">Secure payments</p>
                <p>Razorpay enabled</p>
              </div>
              <div>
                <div className="text-yellow-500 text-2xl mb-1">🚚</div>
                <p className="font-semibold">Fast delivery</p>
                <p>Across India</p>
              </div>
              <div>
                <div className="text-indigo-600 text-2xl mb-1">★</div>
                <p className="font-semibold">Top-rated</p>
                <p>Curated selection</p>
              </div>
            </div>
          </div>

          {/* Right - Illustration placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-indigo-100 w-full md:w-4/5 aspect-[4/3] rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-sm">🛒 Hero illustration placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Featured picks</h2>
            <Link to="/products" className="text-indigo-600 hover:underline text-sm">
              See all products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <article
                key={p._id}
                className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                {/* image area */}
                <div className="w-full h-40 rounded-md bg-gray-50 flex items-center justify-center mb-4 overflow-hidden">
                  {p.img ? (
                    // if you later provide p.img URLs, they will show here
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-400 text-sm">Image placeholder</div>
                  )}
                </div>

                {/* tag */}
                {p.tag && (
                  <div className="text-xs inline-block px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-2">
                    {p.tag}
                  </div>
                )}

                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600 my-2">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold">₹{p.price}</div>
                  <Link
                    to={`/products/${p._id}`}
                    className="text-indigo-600 text-sm hover:underline"
                  >
                    View
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SMALL PROMO / CTA */}
      <section className="bg-indigo-50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Free Shipping over ₹999</h4>
            <p className="text-sm text-gray-600">Hassle-free returns and fast delivery across India.</p>
          </div>
          <div>
            <Link
              to="/products"
              className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Start shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
