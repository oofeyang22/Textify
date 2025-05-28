import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";
/*const getData = async (userId) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);

    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}*/
const PostUser = async ({userId}) => {

  //const user = await getData(userId);
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      {user.img && <Image src={user.img} alt="yangy" width={50} height={50} className={styles.avatar}/>}
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>

    </div>
  )
}

export default PostUser