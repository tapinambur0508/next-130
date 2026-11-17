import { notFound } from "next/navigation";

function Profile() {
  const user = null;

  if (user === null) {
    return notFound();
  }

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
