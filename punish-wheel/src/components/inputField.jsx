export default function InputField({
  title,
  type,
  placeholder,
  onChange,
  disabled,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={title}
      className="peer block w-full border-0 bg-gray-50 py-1.5 px-20 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
