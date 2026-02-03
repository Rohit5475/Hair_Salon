import { useNavigate } from "react-router-dom";

function StaffDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>

      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>View Assigned Appointments</li>
        <li>Update Service Status</li>
        <li>Manage Availability</li>
      </ul>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default StaffDashboard;
