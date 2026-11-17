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
    <div>
      <h1>Page not found</h1>
      {/* <p>Page that are you looking for is not exists</p> */}
      <p>You will be redirect soon...</p>
    </div>
  );
}

export default NotFound;
