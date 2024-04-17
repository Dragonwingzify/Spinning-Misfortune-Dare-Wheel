export default function SpinDetails({ spin, data }) {
  return (
    <>
      <tr key={spin._id} className="divide-x divide-gray-200">
        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
          {spin.title}
        </td>
        <td className="whitespace-nowrap p-4 text-sm font-medium text-gray-900">
          {spin.totalWheelSpin}
        </td>
      </tr>
    </>
  );
}
