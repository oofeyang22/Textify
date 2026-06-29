

"use client"
import { useState } from "react"
import styles from "./Links.module.css"
import Navlink from "./navLink/Navlink"
import Image from "next/image"
import { handleLogout } from "@/lib/action"

const Links = ({session}) => {
    const [open, setOpen] = useState(false)
    const links = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" },
    ]

    const isAdmin = true;

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link) => (
                    <Navlink item={link} key={link.title}/>
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }}/>}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <Navlink item={{ title: "Login", path: "/login" }}/>
                )}
            </div>

            {/* Hamburger / X toggle */}
            <div className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
                <Image
                    src={open ? "/close.png" : "/menu.png"}
                    alt={open ? "close menu" : "open menu"}
                    width={30}
                    height={30}
                />
            </div>

            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <Navlink item={link} key={link.title}/>
                    ))}
                    {session?.user ? (
                        <>
                            {session.user?.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }}/>}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <Navlink item={{ title: "Login", path: "/login" }}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default Links;