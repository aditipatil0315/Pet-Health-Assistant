const Alert = ({ message }) => {
  return (
    <div className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-3 rounded-xl mb-4">
      {message}
    </div>
  );
};

export default Alert;
