import { SignIn } from "@clerk/nextjs";

export default function SignInComponent() {
  return (
    <div className="h-screen">
      <SignIn />
    </div>
  );
}
