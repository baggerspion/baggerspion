import clsx from "clsx"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import Link from "next/link"

export default function Menu({ color }) {
    const classes = clsx({
        "absolute top-0 w-full z-10 pt-14 px-14": true,
        "text-white": color === "white",
        "text-black": color === "black",
    })

    return (
        <section className={classes}>
            <div className='w-full max-w-4xl mx-auto'>
                <div className='flex flex-row justify-between'>
                    <Link href="/"><span className='text-2xl font-semibold cursor-pointer'>Baggerspion.</span></Link>
                    <menu className='flex flex-row space-x-8 pt-2'>
                        <span>You</span>
                        <Link href="/blog"><span>Blog</span></Link>
                        <Link href="/about"><span>About</span></Link>
                        <Link href="/blog"><FontAwesomeIcon icon={faXTwitter} /></Link>
                        <Link href="/blog"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                        <Link href="/blog"><FontAwesomeIcon icon={faGithub} /></Link>
                    </menu>
                </div>
            </div>            
        </section>
    )
}