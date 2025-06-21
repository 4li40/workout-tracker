import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Welcome to the Workout Tracker</h1>
      <p>Track your workouts and stay fit!</p>
      <Link href="/signup">
        <Button>Sign Up</Button>
      </Link>
      <Link href="/login">
        <Button variant="outline">Login</Button>
      </Link>
    </div>
  );
};

export default page;
