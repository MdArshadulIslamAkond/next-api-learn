 const getAllusers = async() =>{
    const data = await fetch("http://localhost:3000/api/users");
    return await data.json();
}

export default getAllusers;