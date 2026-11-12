"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ reset }: ErrorProps) {
  return (
    <>
      <p>Failed to load notes</p>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

export default Error;
