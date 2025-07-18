import { Route, Routes } from "react-router-dom";
import WhitelistPage from "./pages/WhitelistPage";

function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-xl text-gray-600">
          Navigate to{" "}
          <a href="/whitelist" className="text-cyan-600 hover:underline">
            /whitelist
          </a>{" "}
          to see the dashboard.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/whitelist" element={<WhitelistPage />} />
    </Routes>
  );
}
