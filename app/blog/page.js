import { getAllPosts } from '@/lib/api'

import DateFormatter from '../components/DateFormatter'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../components/Footer'

export default function Blog() {
    const posts = getAllPosts(["title", "date", "excerpt", "image", "slug"])

    return (
        <main className='flex flex-col'>
            {posts.map((post, index) => (
                <div key={index} className='flex flex-col md:even:flex-row md:odd:flex-row-reverse'>
                    <div className='w-full md:w-1/2 h-[30rem] relative'>
                        <Image src={`/blogpic/${post.image}`} fill style={{objectFit: "cover", objectPosition: "center"}} />
                    </div>
                    <div className='w-full h-[30rem] md:w-1/2 flex flex-col justify-between p-[3rem] md:p-[6rem]'>
                        <div>
                            <h3 className="text-leader pb-4">{post.title}</h3>
                            <p className="text-about leading-8">
                                <DateFormatter dateString={post.date} />
                            </p>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                            <span className='text-about'>Read More...</span>
                        </Link>
                    </div>
                </div>
            ))}
            <Footer />
        </main>
    )
}