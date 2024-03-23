const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorFallback;
