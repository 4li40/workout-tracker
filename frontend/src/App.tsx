import { Routes, Route } from "react-router";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
