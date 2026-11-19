"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md border border-neutral-300 px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
      >
        Reset
      </button>
    </div>
  );
}

export default Error;
