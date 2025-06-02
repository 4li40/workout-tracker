import NavBar from "@/components/NavBar";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-3xl font-bold">Your Workout Dashboard</h1>
              <p>Track your progress and stay consistent!</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
