import Image from "next/image";
import { SignIn } from "./components/sign-in";
import { auth } from '@/auth';

export default async function Home() {
  let session = await auth();
  let email = session?.user?.email
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the app!</h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={200}
        />
        <p className="text-lg">You are logged in as {email}</p>
      </div>
      <SignIn />
    </main>
  );
}
