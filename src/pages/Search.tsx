import { useState, type ChangeEvent, useMemo } from "react";

/* ================= TYPES ================= */

interface User {
  id: number;
  name: string;
  email: string;
}

/* ================= MOCK DATA ================= */

const usersData: User[] = [
  { id: 1, name: "Piyush", email: "piyush@mail.com" },
  { id: 2, name: "Aman", email: "aman@mail.com" },
  { id: 3, name: "Riya", email: "riya@mail.com" },
  { id: 4, name: "Rahul", email: "rahul@mail.com" }
];

/* ================= COMPONENT ================= */

const SearchFilter = () => {
  const [search, setSearch] = useState<string>("");

  /* ================= FILTER LOGIC ================= */

  const filteredUsers = useMemo(() => {
    return usersData.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  /* ================= HANDLER ================= */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl font-bold mb-4 text-center">
        Search Users
      </h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      {filteredUsers.length === 0 ? (
        <p className="text-gray-500 text-center">No users found</p>
      ) : (
        <ul className="space-y-2">
          {filteredUsers.map(user => (
            <li
              key={user.id}
              className="p-3 bg-white shadow rounded-lg border"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;