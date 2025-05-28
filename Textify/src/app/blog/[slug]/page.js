
import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css"
import Image from "next/image"
//import { getPost } from "@/lib/data"

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}

const singlePostPage = async ({params}) => {

  const {slug} = params

  const post = await getData(slug)
  //const post = await getPost(slug)
  return (
    <div className={styles.container}>
        {post.img && <div className={styles.imgContainer}>
            <Image src={post.img} alt="spider" fill className={styles.img}/>
        </div>}
        <div className={styles.textContainer}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.detail}>
                {/*<Image src="/yang.jpg" alt="yangy" width={50} height={50} className={styles.avatar}/>*/}
                {/*<div className={styles.detailText}>
                    <span className={styles.author}>Author</span>
                    <span className={styles.date}>Emre Chan</span>
                </div>*/}
                {post && <PostUser userId={post.userId}/>}
                <div className={styles.detailText}>
                    <span className={styles.author}>Published On</span>
                    <span className={styles.date}>{post.createdAt.toString().slice(4,16)}</span>
                </div>
            </div>
            <div className={styles.content}>
                {post.desc}
            </div>

        </div>
    </div>
  )
}

export default singlePostPage