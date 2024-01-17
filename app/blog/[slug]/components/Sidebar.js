import { getAllPosts } from "@/lib/api"

import Image from "next/image"
import Link from "next/link"

export default function Sidebar({ current }) {
    const posts = getAllPosts(["title", "date", "image", "slug"])
    const first = posts.slice(0, 4)

    return (
        <div>
            <div className="hidden md:block">
                <h2 className="text-leader pb-4">Navigate</h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/#session">Introductory Meeting</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="text-leader pt-14 pb-4">Other Posts</h2>
                <div className="grid grid-cols-3 gap-10 md:gap-0 md:flex md:flex-col md:space-y-5 md:w-[300px]">
                    {first.filter((post) => {
                        if (post.slug === current) {
                            return false
                        }
                        return true
                    }).map((sidepost, index) => (
                        <div key={index} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <div className="min-w-[100px] h-[100px] relative">
                                <Image alt="Blog post header image" fill quality={50} style={{objectFit: "cover"}} src={`/blogpic/${sidepost.image}`} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <Link href={`/blog/${sidepost.slug}`}><h3>{sidepost.title}</h3></Link>    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}