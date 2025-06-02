import { SignOutButton } from "./SignOutButton";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold text-gray-900">
            Workout Tracker
          </h1>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
