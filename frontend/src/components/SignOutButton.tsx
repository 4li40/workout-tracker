import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await authClient.signOut();
      toast.success("Successfully signed out");
      // Redirect to login page after successful sign out
      navigate("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("Failed to sign out. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleSignOut}
      disabled={isLoading}
      className="ml-auto"
    >
      {isLoading ? "Signing out..." : "Sign Out"}
    </Button>
  );
}