import * as fs from 'fs';

export async function GET(req) {
    return new Response(JSON.stringify({ name: 'Andrul' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }   
    }, 
    fs.readFile("/blogdata/users.json", (err, data) =>{
        console.log(typeof data);
    })
    );
}
