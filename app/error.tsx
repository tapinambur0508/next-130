"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

export default Error;
