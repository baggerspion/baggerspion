import { getPostBySlug } from "@/lib/api"

import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "@/app/components/Footer"

export default function Post({ params }) {
    const post = getPostBySlug(params.slug, ["title", "slug", "excerpt", "date", "content", "image", ])

    return (
        <main className='flex flex-col'>
            <Header image={post.image} />
            <Content post={post} />
            <Footer />
        </main>
    )
}

export async function generateMetadata({ params }) {
    const post = getPostBySlug(params.slug, ["title", "slug", "excerpt", "date", "image", ])

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['Paul Finlayson Adams'],
            url: `/blog/${post.slug}`,
            siteName: 'Baggerspion.',
            images: [
                {
                    url: `/blogpic/${post.image}`,
                    width: 2400,
                    height: 1350,
                },
            ],
        }
    }
}