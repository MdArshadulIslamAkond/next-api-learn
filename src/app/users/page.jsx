"use client";

import getAllusers from "@/app/lib/getAllusers";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const allUser = async () => {
      const users = await getAllusers();
      setDatas(users);
      // console.log(users);
      // fetch('https://jsonplaceholder.typicode.com/users')
      //.then(res => res.json())
      //.then(data => setDatas(data))
      //.catch(error => console.error('Error:', error));
    };
    allUser();
  }, []);
  const handleDelete = async(deleteId) => {
   const user = await fetch(`http://localhost:3000/api/users/${deleteId}`, {
    method: 'DELETE'
   })
   const result = await user.json(); 

  //  console.log(result);
    setDatas(result);
  }
  console.log(datas.length);
  return (
    <div className="ps-20 pt-6">
      <ul className="space-y-2">
        {datas.map((data) => {
          return (
            <li key={data.id} className="flex gap-4">
              <Link href={`/users/${data.id}`} className="inline-block w-52">
                {data.name}
              </Link>
              <Link
                href={`/users/${data.id}/update`}
                className="p-1 border-2 border-yellow-400 text-sm"
              >
                Edit
              </Link>
              <button
              onClick={()=>handleDelete(data.id)}
                className="p-1 border-red-600 rounded-md text-white bg-red-400 text-sm"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <Link href={`/addUser`}>
        <button className="bg-green-500 text-white border-green-600 rounded-md px-4 py-1">
          Add User
        </button>
      </Link>
    </div>
  );
};

export default Page;
