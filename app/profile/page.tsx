import Link from "next/link";

import { LogoutButton } from "./_components";

const Profile = () => {
  return (
    <section className="grid grid-cols-4 gap-4 px-20 py-8">
      <Link
        href="profile/edit"
        className="border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
      >
        Edit
      </Link>
      <Link
        href="/profile/payment"
        className="border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
      >
        Payment
      </Link>

      <LogoutButton />
      {/* <DeleteUserButton /> */}
    </section>
  );
};

export default Profile;
