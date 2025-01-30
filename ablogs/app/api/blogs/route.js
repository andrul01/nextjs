// export async function GET() {
//     return new Response(JSON.stringify({ message: "Hello from API" }), {
//       headers: { "Content-Type": "application/json" },
//     });
// }
  
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {  // Use GET method in Next.js App Router
    try {
        const filePath = path.join(process.cwd(), 'blogdata', 'users.json');
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);
        
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

