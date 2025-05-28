"use server"
import credentials from "next-auth/providers/credentials"
import { signIn, signOut } from "./auth"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"

export const handleGithubLogin = async () => {

    await signIn("github")
}
export const handleGoogleLogin = async () => {

    await signIn("google")
}

export const handleLogout = async () => {

    await signOut()
}

export const register = async (previousState, formData) => {
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData)

    if (password !== passwordRepeat){
        return {error: "passwords don't match"}
    }
    try{
        connectToDb();
        const user = await User.findOne({ username })
        if (user) {
            return {error: "username already exists"}
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        console.log("saved to DB");
        return { success: true }
    }catch (err){
        console.log(err);
    }
}

export const login = async (previousState, formData) => {
    const {username, password} = Object.fromEntries(formData)

    try{
        await signIn("credentials", { username, password})
        console.log("saved to DB");
    }catch (err){
        console.log(err);
        if(err.type=== "CredentialsSignin"){
            return {error: "invalid username or password"}
        }
        throw err;
        //return {error: "something went wrong"}
    }
}

export const addPost = async (previousState, formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData);


    try{
        connectToDb();
        const newPost = new Post({
            title, desc, slug, userId
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch(err){
        console.log(err);
        return { error: "something went wrong!" }
    }
}

export const deletePost = async (formData)  => {
    const { id } = Object.fromEntries(formData);

    try{
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch(err){
        console.log(err);
        return { error: "something went wrong"}
    }
}


export const addUser = async (previousState, formData) => {
    const {username, email, password, img} = Object.fromEntries(formData);


    try{
        connectToDb();
        const newUser = new User({
            username, email, password, img
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin")
    } catch(err){
        console.log(err);
        return { error: "something went wrong!" }
    }
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try{
        connectToDb();

        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin")
    } catch(err){
        console.log(err);
        return { error: "something went wrong"}
    }
}