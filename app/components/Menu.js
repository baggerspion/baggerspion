'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

import Link from "next/link"

export default function Menu() {
    const [shown, setShown] = useState(false)

    return (
        <menu className="absolute top-[3rem] right-[3rem] md:top-[6rem] md:right-[6rem] flex flex-col items-end">
            <span className="text-white cursor-pointer"><FontAwesomeIcon icon={faBars} onClick={() => setShown(!shown)} /></span>
            {shown ?
                <div className='flex flex-col space-y-2 text-white items-end pt-4'>
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