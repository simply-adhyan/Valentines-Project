'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950" role="alert" aria-live="assertive">
      <div className="text-center p-8 bg-slate-900/70 rounded-lg shadow-lg border border-slate-800">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Something went wrong!
        </h2>
        <p className="text-slate-200 mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-error/60 focus-visible:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
