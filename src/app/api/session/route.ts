import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        new Response(JSON.stringify(session?.user), { "status": 200, "headers": { "Content-Type": "application/json" } })
    } catch (error) {
        console.log(error);
    }

}
