/*const users = [
    {id: 1, name: "john"},
    {id: 2, name: "james"},
]*/

/*const posts = [
    {id: 1, title: "post 1", body:"......", userId: 1},
    {id: 2, title: "post 2", body:"......", userId: 2},
    {id: 3, title: "post 3", body:"......", userId: 3},
    {id: 4, title: "post 4", body:"......", userId: 4},


]*/
import { Post } from "./models";
import { User } from "./models";
import { connectToDb  } from "./utils";

export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts");
    }

    //return posts;
}

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch post");
    }

    /*const post = posts.find((post) => post.id === parseInt(id));
    return post;*/
}
export const getUsers = async () => {
    try{
        connectToDb();
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch users");
    }
    //return users.find((user) => user.id === parseInt(id))
}
export const getUser = async (id) => {
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch user");
    }
    //return users.find((user) => user.id === parseInt(id))
}