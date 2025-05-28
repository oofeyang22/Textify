import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action"
import { handleGoogleLogin } from "@/lib/action"
import styles from "./login.module.css"
const Login = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGoogleLogin}>
        <button className={styles.google}>Login With Google</button>
      </form>
        <form action={handleGithubLogin}>

          <button className={styles.github}>Login With Github</button>
        </form>
        <LoginForm/>
      </div>

    </div>
  )
}

export default Login;