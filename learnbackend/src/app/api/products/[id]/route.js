import { NextResponse } from "next/server"

export const GET = async (req) => {
    // console.log()
    return NextResponse.json({'msg' : 'Id Req Done'} , {status : 201});
}