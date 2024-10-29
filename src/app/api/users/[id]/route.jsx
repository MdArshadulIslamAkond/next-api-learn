import { NextResponse } from "next/server";
import { users } from "../../../../../public/utlity/bd";


export const GET = async (req, {params}) => {
    const datas = users();
    const id = parseInt(params.id);
    // console.log(parseInt(params.id));
    const data = datas.find((data)=>data.id === id);
    console.log(data);
    if(data){
        return NextResponse.json(data, {status: 200});
    }else{
        return NextResponse.json({message: 'User Not Found'}, {status: 404});
    }
    // return NextResponse.json(data, {status: 200});
};

export const PUT = async (req, {params}) => {
    const datas = users();
    const id = parseInt(params.id);
    const data = datas.find((data)=>data.id === id);
    // console.log(data);
    if(data){
        const newData = await req.json();
        datas[datas.findIndex((data)=>data.id === id)] = {...data,...newData};
        return NextResponse.json(datas, {status: 200});
    }else{
        return NextResponse.json({message: 'User Not Found'}, {status: 404});
    }
};

export const DELETE = async (req, {params}) => {
    const datas = users();
    const id = parseInt(params.id);
    const data = datas.find((data)=>data.id === id);
    // console.log(data);
    if(data){
        datas.splice(datas.findIndex((data)=>data.id === id), 1);
        return NextResponse.json(datas, {status: 200});
    }else{
        return NextResponse.json({message: 'User Not Found'}, {status: 404});
    }
}