import { getAllPosts } from '@/lib/api'
import DateFormatter from './DateFormatter'

import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
    const posts = getAllPosts(["title", "date", "excerpt", "image", "slug"])

    return (
        <section className="flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="h-[30rem] w-screen md:w-1/2 relative">
                    <Image fill src={`/blogpic/${posts[0].image}`} style={{objectFit: 'cover'}} />
                </div>
                <div className="h-[30rem] w-screen md:w-1/2 bg-white p-[3rem] md:p-[6rem] flex flex-col justify-between">
                    <div className='flex flex-col'>
                        <h3 className="text-leader pb-4">{posts[0].title}</h3>
                        <p className="text-about leading-8">
                            <DateFormatter dateString={posts[0].date} />
                        </p>
                    </div>
                    <Link href={`/blog/${posts[0].slug}`}>
                        <span className='text-about'>Read More...</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
                <div className="h-[30rem] w-screen md:w-1/2 relative">
                    <Image fill src={`/blogpic/${posts[1].image}`} style={{objectFit: 'cover'}} />
                </div>
                <div className="h-[30rem] w-screen md:w-1/2 bg-white p-[3rem] md:p-[6rem] flex flex-col justify-between">
                    <div className='flex flex-col'>
                        <h3 className="text-leader pb-4">{posts[1].title}</h3>
                        <p className="text-about leading-8">
                            <DateFormatter dateString={posts[1].date} />
                        </p>
                    </div>
                    <Link href={`/blog/${posts[1].slug}`}>
                        <span className='text-about'>Read More...</span>
                    </Link>                
                </div>
            </div>
        </section>
    )
}