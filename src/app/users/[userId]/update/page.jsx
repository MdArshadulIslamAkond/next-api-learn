"use client";

import GetUser from "@/app/lib/getUser";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const updateId = parseInt(params.userId);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      //   const user = await fetch(`http://localhost:3000/api/users/${updateId}`);
      //   const userData = await user.json();
      const userData = await GetUser(updateId);
      setUserData(userData);
    };
    getUserData();
  }, [updateId]);
  console.log(userData);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const age = parseInt(e.target.elements.age.value);
    const id = userData.id;
    const updateUser = { id, name, email, age };
    const update = await fetch(`http://localhost:3000/api/users/${updateId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateUser),
  
    });
    const result = await update.json();
    console.log(result);
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-12">Update User</h1>
      <form
        action=""
        onSubmit={handleUpdate}
        className="flex flex-col gap-y-4 justify-center items-center pt-32"
      >
        <input
          type="text"
          name="name"
          defaultValue={userData.name}
          className="border border-black rounded-md text-center"
        />
        <input
          type="text"
          name="email"
          defaultValue={userData.email}
          placeholder="Enter your email"
          className="border border-black rounded-md text-center"
        />
        <input
          type="text"
          name="age"
          defaultValue={userData.age}
          placeholder="Enter your age"
          className="border border-black rounded-md text-center"
        />
        <button
          type="submit"
          className="border border-green-700 rounded-md text-center px-4 py-1 text-white bg-green-500"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Page;
