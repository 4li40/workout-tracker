import Logout from "@/components/logout";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <Logout />
    </div>
  );
};

export default page;
