import { NextResponse } from "next/server"

export const GET= async (req) => {

    // if we get url params 
    const {searchParams}= new URL(req.url) 
    console.log(searchParams.get('search'))
    //url search ko asy catch kar skty hain Ok.
    return NextResponse.json(
        {
            'id' : 1,
            'fName' : 'Zaheer',
            'lastName' : 'Ahmad',
            'fatherName' : 'Imtiaz Ali'
        },
    )
}