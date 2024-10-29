import { NextResponse } from "next/server";
import { users } from "../../../../public/utlity/bd";

export const GET = async (req, res) => {
    const data = users();
    console.log(data);
    return NextResponse.json(data, {status: 200});
}

export const POST = async (req, res) => {
    const body = await req.json();
    if(!body.id || !body.name || !body.email || !body.age) {
        return NextResponse.status(400).json({error: "No data provided"});
    }
    users().push(body);
    return NextResponse.json({success:true}, {status: 201});
};

// export const PUT = async (req, res) => {
//     const body = await req.json();
//     if(!body.id) {
//         return NextResponse.status(400).json({error: "No id provided"});
//     }
//     const index = users().findIndex(user => user.id === body.id);
//     if(index === -1) {
//         return NextResponse.status(404).json({error: "User not found"});
//     }
//     users()[index] = {...users()[index],...body};
//     return NextResponse.json(users()[index], {status: 200});
// }