

const GetUser = async(id) => {
    console.log(id);
    const user = await fetch(`http://localhost:3000/api/users/${id}`);
    // console.log(user);
    return await user.json();
};

export default GetUser;