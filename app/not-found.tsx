"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      // router.push("/");
      router.replace("/");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      {/* <p>Page that are you looking for is not exists</p> */}
      <p className="mt-3 text-sm text-neutral-500">You will be redirect soon...</p>
    </div>
  );
}

export default NotFound;
