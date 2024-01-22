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
                <div className='w-40 h-40 bg-orange-300'>
                    <ul>
                        <li>Blog</li>
                        <li>Introductory Meeting</li>
                    </ul>
                </div>
            :
                null
            }
        </menu>
    )
}