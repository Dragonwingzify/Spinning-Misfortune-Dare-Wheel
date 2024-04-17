import { useEffect, useState } from "react";
import SpinDetails from "../components/spinDetails";

export default function History() {
  const [spins, setSpins] = useState(null);

  useEffect(() => {
    const fetchSpins = async () => {
      const response = await fetch("/api/spins");
      const json = await response.json();

      if (response.ok) {
        setSpins(json);
      }
    };
    fetchSpins();
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            History
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all your challenges
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount of repeated wheel spins
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {spins &&
                  spins.map((spin) => (
                    <SpinDetails key={spin._id} spin={spin} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
