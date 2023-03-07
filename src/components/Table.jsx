import React, { useState } from "react";

const usersData = [
  { id: 1, title: "Virat", body: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Mahendra", body: "Ut enim ad minim veniam." },
  {
    id: 3,
    title: "Rohit",
    body: "Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 4,
    title: "Rahul",
    body: "Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 5,
    title: "Rishabh",
    body: "Sed ut perspiciatis unde omnis iste natus error.",
  },
  {
    id: 6,
    title: "Shikhar",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
  },
  {
    id: 7,
    title: "Shubham",
    body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    id: 8,
    title: "Kuldeep",
    body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 9,
    title: "Hardik",
    body: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 10,
    title: "Axar",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 11,
    title: "Mark Davis",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 12,
    title: "Karen Johnson",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 13,
    title: "Steven Lee",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: 14,
    title: "Michelle Brown",
    body: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    id: 15,
    title: "Daniel Smith",
    body: "Omnis voluptas assumenda est, omnis dolor repellendus.",
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const tableStyle = `w-10/12 m-4 mx-auto  ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
  }`;
  const thStyle = "bg-gray-400 px-4 py-2 text-left";
  const tdStyle = "border px-4 py-2";

  const users = usersData.slice(0, 10);

  return (
    <div>
      <header className="p-4 bg-indigo-600 text-white flex justify-center items-center ">
        <h1 className="text-2xl font-bold ">Assignment 3</h1>
        <button
          className="bg-indigo-500 px-2 py-1 mx-4 rounded-md"
          onClick={toggleDarkMode}
        >
          Toggle Mode
        </button>
      </header>
      <table className={tableStyle}>
        <thead>
          <tr>
            <th className={thStyle}>ID</th>
            <th className={thStyle}>Title</th>
            <th className={thStyle}>Body</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className={tdStyle}>{user.id}</td>
              <td className={tdStyle}>{user.title}</td>
              <td className={tdStyle}>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
