export const Button = (props) => {
  return (
    <button
      {...props}
      className="p-2 bg-gray-200 text-gray-800 cursor-pointer hover:brightness-125 rounded-md"
    >
      {props.children}
    </button>
  );
};
