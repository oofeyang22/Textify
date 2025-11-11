import Image from "next/image"
import styles from "./about.module.css"
/*
export const metadata = {
    title: "About page",
    description: "About description",
};*/
const about = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital products that impact society positively</h1>
                <p> We craft digital experiences that captivate, engage, and deliver results.
                     From concept to creation, we are your partners in digital transformation.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>1 K+</h1>
                        <p>Websites Built</p>
                    </div>
                    <div className={styles.box}>
                        <h1>500 +</h1>
                        <p>Clients</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/About.png" width={400} height={400} alt="about"/>
            </div>
        </div>
    )
}

export default about;