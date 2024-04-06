import { useState } from "react";

export default function SpinForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const spin = { title };
    const response = await fetch("/api/spins", {
      method: "POST",
      body: JSON.stringify(spin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setError(null);
      console.log("new spin added", json);
    }
  };
  return (
    <form className="px-14 sm:px-6 lg:px-8" onSubmit={handleSubmit}>
      <div className="sm:flex sm:items-center ">
        <div className="relative mt-20 ">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="name"
            id="name"
            className="peer block w-full border-0 bg-gray-50 py-1.5 px-20 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Insert Challenge"
          />
          <div
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none place-self-end">
          <button className="  block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            +
          </button>
          {error && <div>{error}</div>}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="mt-2">
          {/* <input
            type="text"
            value={title}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder={title}
          /> */}
        </div>
      </div>
    </form>
  );
}