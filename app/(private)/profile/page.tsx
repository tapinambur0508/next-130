import { notFound } from "next/navigation";

function Profile() {
  const user = null;

  if (user === null) {
    return notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
    </div>
  );
}

export default Profile;
