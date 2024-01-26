'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

import Link from "next/link"
import clsx from 'clsx'

export default function Menu({ home }) {
    const [shown, setShown] = useState(false)

    const menu_classes = clsx({
        "flex flex-col": true,
        "items-center text-black": !home,
        "absolute top-[3rem] right-[3rem] md:top-[6rem] md:right-[6rem] items-end text-white": home,
    })

    const link_classes = clsx({
        "flex flex-col space-y-2 pt-4": true,
        "items-center": !home,
        "items-end": home,
    })

    return (
        <menu className={menu_classes}>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faBars} onClick={() => setShown(!shown)} /></span>
            {shown ?
                <div className={link_classes}>
                    {!home ? <Link href="/"><span>Home</span></Link> : null}
                    <Link href="/about"><span>About</span></Link>
                    <Link href="blog"><span>Blog</span></Link>
                    <Link href="/#session" onClick={() => setShown(!shown)}><span>Introductory Meeting</span></Link>
                    <Link href="/#testimonials" onClick={() => setShown(!shown)}><span>Testimonials</span></Link>
                </div>
            :
                null
            }
        </menu>
    )
}