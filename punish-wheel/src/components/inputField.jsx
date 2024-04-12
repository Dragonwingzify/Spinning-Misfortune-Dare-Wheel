export default function InputField({
  title,
  type,
  placeholder,
  onChange,
  disabled,
  value,
}) {
  return (
    <>
      {title === undefined ? (
        <input
          type={type}
          onChange={onChange}
          value={value}
          className=" block w-full border-2 bg-gray-50 py-1.5 px-20 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          onChange={onChange}
          value={title}
          className=" block w-full border-2 bg-gray-50 py-1.5 px-20 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </>
  );
}
