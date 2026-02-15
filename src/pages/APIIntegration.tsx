import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const APIIntegration = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-center mb-6">
        Axios API Integration
      </h1>

      {/* Loading */}
      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Users */}
      <div className="grid md:grid-cols-3 gap-6">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>

      {/* Reload Button */}
      <div className="text-center mt-8">
        <button
          onClick={fetchUsers}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Reload Data
        </button>
      </div>

    </div>
  );
};

export default APIIntegration;