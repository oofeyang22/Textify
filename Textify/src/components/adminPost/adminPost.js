import { deletePost } from "@/lib/action";
import styles from "./adminPost.module.css"
import { getPosts } from "@/lib/data"
import Image from "next/image"
const AdminPost = async () => {
  const posts = await getPosts();
  /*const deletePostWithId = ({id}) => {
    return deletePost.bind(null, id)
  }*/
  return (
    <div className={styles.container}>
      <h1>posts</h1>
      {posts.map(post =>(
        <div className={styles.post} key={post.id}>
          <div className={styles.details}>
            <Image src={post.img || "/profile.png"} alt="profile" width={30} height={30}/>
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          {/*<form action={() => deletePostWithId(post.id)}>*/}
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id}/>
            <button className={styles.postButton}>delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminPost