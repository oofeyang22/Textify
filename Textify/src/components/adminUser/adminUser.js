import { getUsers } from "@/lib/data"
import styles from "./adminUser.module.css"
import Image from "next/image"
import { deleteUser } from "@/lib/action"
const AdminUser = async () => {
  const users = await getUsers()
  return (
    <div className={styles.container}>

      <h1>users</h1>
      {users.map((user) =>(
        <div className={styles.user} key={user.id}>
          <div className={styles.details}>
            <Image src={user.img || "/profile.png"} alt="profile" width={30} height={30}/>
            <span className={styles.userTitle}>{user.username}</span>
          </div>
          {/*<form action={() => deletePostWithId(post.id)}>*/}
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id}/>
            <button className={styles.userButton}>delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminUser