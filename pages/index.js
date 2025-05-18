import '../styles/globals.css';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Chat Inbox</h2>
        <ul>
          <li className="py-2 border-b">Customer A</li>
          <li className="py-2 border-b">Customer B</li>
        </ul>
      </div>
      <div className="w-2/5 bg-white p-4">
        <h2 className="text-lg font-bold mb-4">Chat Window</h2>
        <div className="mb-2">You: Hello!</div>
        <div className="mb-2">Customer: Hi, I need a quote.</div>
      </div>
      <div className="w-2/5 bg-gray-50 p-4">
        <h2 className="text-lg font-bold mb-4">Customer Info & Products</h2>
        <div className="mb-2 font-semibold">Product Picker</div>
        <ul className="mb-4">
          <li>11oz Mug - QAR 5.50 - In stock: 240</li>
          <li>White T-Shirt M - QAR 10.00 - In stock: 150</li>
        </ul>
        <div className="mb-2 font-semibold">Quote History</div>
        <ul>
          <li>Quote #101 - 2 Mugs - Reorder</li>
          <li>Quote #102 - 5 T-Shirts - Reorder</li>
        </ul>
      </div>
    </div>
  );
}