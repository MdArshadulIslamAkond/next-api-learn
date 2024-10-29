import GetUser from "@/app/lib/getUser";
import Link from "next/link";


const page = async({params}) => {
    const id = parseInt(params.userId);
    // const id = params.userId;
    const data = await GetUser(id);
    // console.log(data);
    return (
        <div className="text-center pt-32 space-y-6">
            {/* this is user id page. */}
            <h1 className="text-2xl text-green-500">Name: {data.name}</h1>
            <p>Email: {data.email}</p>
            <p>Age: {data.age}</p>
            <Link href="/users"><button>Go Back</button></Link>
        </div>
    );
};

export default page;