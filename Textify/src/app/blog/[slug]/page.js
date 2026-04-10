import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css"
import Image from "next/image"

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}

// Helper function to format date properly
const formatDate = (date) => {
    if (!date) return "Date not available";
    
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

const singlePostPage = async ({params}) => {
    const {slug} = params
    const post = await getData(slug)

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image 
                        src={post.img} 
                        alt={post.title || "Blog post image"} 
                        fill 
                        className={styles.img}
                        priority
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && <PostUser userId={post.userId}/>}
                    <div className={styles.detailText}>
                        <span className={styles.authorLabel}>Published On</span>
                        <span className={styles.dateValue}>{formatDate(post.createdAt)}</span>
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