export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: "$20" },
    { id: 2, name: "Product 2", price: "$25" },
    { id: 3, name: "Product 3", price: "$15" },
    { id: 4, name: "Product 4", price: "$30" },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <div className="h-40 bg-gray-200 rounded mb-3"></div>
            <h3 className="text-lg font-medium">{p.name}</h3>
            <p className="text-gray-600">{p.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
