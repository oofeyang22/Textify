import styles from "./postcard.module.css"
import Image from "next/image"
import Link from "next/link"
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="spider" fill className={styles.img}/>
            </div>}
        </div>
        <div className={styles.bottom}>
            <h2 className={styles.title}>{post.title}<span className={styles.date}>09/072024</span></h2>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard