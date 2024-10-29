
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const number = params.data.length;
  console.log(params.data, params.data[number - 1]);
  return NextResponse.json ({message: params.data[number - 1]});
};
