export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if(user){
                token.id = user.id;
                token.isAdmin = user.isAdmin
            }
            return token;
        },
        async session({session, token}) {
            if(token){
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request}) {
            //return false;
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");


            //Only admin can reach dashboard
            if(isOnAdminPanel && !user?.isAdmin){
                return false;
            }


            //Only authenticated users can reach login page
            if(isOnBlogPage && !user){
                return false;
            }

            //only authenticated users can reach login page
            if(isOnLoginPage && user){
                return Response.redirect(new URL("/", request.nextUrl))
            }

            return true;
        }
    }
}