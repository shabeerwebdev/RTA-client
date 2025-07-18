import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-xl text-gray-600">
          Navigate to{" "}
          <Link to="/whitelist" className="text-cyan-600 hover:underline">
            /whitelist
          </Link>{" "}
          to see the dashboard.
        </p>
      </div>
    </div>
  );
}
