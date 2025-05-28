import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPost from "@/components/adminPost/adminPost"
import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import AdminUser from "@/components/adminUser/adminUser"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"
import { auth } from "@/lib/auth"
const Admin = async () => {
  const session = await auth()
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <Suspense fallback={<div>loading...</div>}>
                    <AdminPost/>
                </Suspense>
            </div>
            <div className={styles.col}>

                <AdminPostForm userId={session.user.id}/>

            </div>
            <div className={styles.col}>
                <Suspense fallback={<div>loading...</div>}>
                    <AdminUser/>
                </Suspense>
            </div>
            <div className={styles.col}>

                <AdminUserForm/>
            </div>
        </div>
    </div>
  )
}

export default Admin