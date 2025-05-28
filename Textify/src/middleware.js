import NextAuth from "next-auth"

import { authConfig } from "./lib/auth.config"
 
export default NextAuth(authConfig).auth
export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)']
}

//ANu5MWjW9ALQa2HK
//olaitanferanmi41
//mongodb+srv://olaitanferanmi41:ANu5MWjW9ALQa2HK@cluster0.cd4jz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0