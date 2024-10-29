"use client"

import getAllusers from "@/app/lib/getAllusers";


const page = async() => {
    const users = await getAllusers();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const age = parseInt(e.target.elements.age.value);
        const id = users.length + 1;
        const newData = {
            id,
            name,
            email,
            age,
        };
        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        });
        const result = await response.json();
        if(result.success) {
            // e.target.reset();
            alert("User added successfully!");
            // window.location.href = "/";
        }else{
            alert("Failed to add user!");
            // window.location.href = "/";
        }
        console.log(result);
}
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-12">Add New User</h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-y-4 justify-center items-center pt-32">
            
            <input type="text" name="name" placeholder="Enter your name" className="border border-black rounded-md text-center"/>
            <input type="text" name="email" placeholder="Enter your email" className="border border-black rounded-md text-center" />
            <input type="text" name="age" placeholder="Enter your age" className="border border-black rounded-md text-center" />
            <button type="submit" className="border border-green-700 rounded-md text-center px-4 py-1 text-white bg-green-500">Add User</button>
            </form>
            
           
        </div>
    );
};

export default page;