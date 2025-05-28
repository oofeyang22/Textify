//"use client"
import styles from "./contact.module.css"
import Image from "next/image"
/*export const metadata = {
    title: "Contact page",
    description: "Contact description",
};*/
const contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/Contact.png" alt="contact" width={300} height={300}/>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="text" placeholder="enter your name"/>
                    <input type="email" placeholder="enter your email address"/>
                    <input type="number" placeholder="enter your phone number"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="enter a message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default contact;