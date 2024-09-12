import Link from "next/link";
import { cookies } from "next/headers";

import LogoutButton from "./LogoutButton";

const Profile = () => {
  const cookieStore = cookies();

  console.log("username: ", cookieStore.get("username"));
  console.log("mail: ", cookieStore.get("mail"));
  console.log("refresh token: ", cookieStore.get("refreshToken"));

  return (
    <>
      <ul>
        <li>username: {cookieStore.get("username")?.value}</li>
        <li>mail: {cookieStore.get("mail")?.value}</li>
        <li className="break-words">
          refresh token: {cookieStore.get("refreshToken")?.value}
        </li>
      </ul>
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
      </section>
    </>
  );
};

export default Profile;
