import DateFormatter from '@/app/components/DateFormatter'

import markdownToHtml from "@/lib/markdownToHTML"
import Sidebar from './Sidebar'

export default async function Content({ post }) {
    const content = await markdownToHtml(post.content || "")

    return (
        <div className="w-full p-10 md:p-20">
            <div className='flex flex-col md:flex-row md:space-x-16 justify-center'>
                <div className='flex flex-col'>
                    <div className='prose prose-lg pb-4'><h1>{post.title}</h1></div>
                    <div className='pb-20'><DateFormatter dateString={post.date} /></div>
                    <p className='prose prose-lg italic pb-8'>{post.excerpt}</p>
                    <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <div>
                    <Sidebar current={post.slug} />
                </div>
            </div>
        </div>
    )
}