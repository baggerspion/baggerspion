'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'

import Adi from '@/public/testimonials/adi.jpg'
import Christian from '@/public/testimonials/christian.jpg'
import Ferit from '@/public/testimonials/ferit.jpg'
import Grigor from '@/public/testimonials/grigor.jpg'
import Jess from '@/public/testimonials/jess.jpg'
import Kevin from '@/public/testimonials/kevin.jpg'
import Marios from '@/public/testimonials/marios.jpg'
import Mathias from '@/public/testimonials/mathias.jpg'
import Meriam from '@/public/testimonials/meriam.jpg'
import Mikio from '@/public/testimonials/mikio.jpg'
import Thomas from '@/public/testimonials/thomas.jpg'
import Tom from '@/public/testimonials/tom.jpg'

export default function Testimonials() {
    const testimonials = [
        {
            "name": "Mathias Hasselmann",
            "image": Mathias,
            "affilliation": "Engineer, KDAB",
            "content": "He impressed me several times with his ability to read customers within no time: Their needs, their wishes, their fears."
        },
        {
            "name": "Kevin Ottens",
            "image": Kevin,
            "affilliation": "Engineering, KDAB",
            "content": "A perfect fit for servant leadership of most teams I can think of."
        },
        {
            "name": "Tom Callway",
            "image": Tom,
            "affilliation": "Head of Marketing, Sirius",
            "content": "Paul is a hugely capable and knowledgeable FOSS advocate who can turn his hand to almost everything."
        },
        {
            "name": "Grigor Ambrumyan",
            "image": Grigor,
            "affilliation": "Engineer, Wayfair",
            "content": "Any employee would be lucky to have Paul as a manager."
        },
        {
            "name": "Thomas Richter",
            "image": Thomas,
            "affilliation": "Founder & CEO, Swarm64",
            "content": "His broad network of business relationships was able to help us with tough challenges and is a testament to his excellent character and style."
        },
        {
            "name": "Ferit Topcu",
            "image": Ferit,
            "affilliation": "Engineer, Zalando",
            "content": "One of the best Lead's I've met during my career. He combines the three most important aspects one expects from a Team Lead: a deep technical knowledge, a great mentor and leader towards a shared goal."
        },
        {
            "name": "Dr. Mikio Braun",
            "image": Mikio,
            "affilliation": "Data Scientist, Zalando",
            "content": "What makes Paul so great is his strong background in agile methodology, technical expertise, and a very human centric approach to management."
        },
        {
            "name": "Aditya Varun Chadra",
            "image": Adi,
            "affilliation": "Engineering, Zalando",
            "content": "Paul has a deep understanding of core technology, which in combination with his leadership acumen is hard to top."
        },
        {
            "name": "Christian Lutz",
            "image": Christian,
            "affilliation": "Founder & CEO, Crate.io",
            "content": "If your engineering team needs a people leader with a strong background in agility, you would be lucky to work with Paul."
        },
        {
            "name": "Jessica Rose",
            "image": Jess,
            "affilliation": "Technical Outreach",
            "content": "Paul is an incredible leader, drawing from an interest in servant leadership. He communicates clearly across teams with diverse language skills and perspectives."
        },
        {
            "name": "Marios Trivyzas",
            "image": Marios,
            "affilliation": "Engineer, Crate.io",
            "content": "He has always worked in a manner of consulting the engineering teams and help improve productivity rather than micromanage."
        },
        {
            "name": "Meriam Kharbat",
            "image": Meriam,
            "affilliation": "Engineer, Crate.io",
            "content": "When I think about the people that have made a positive impact on my career, I think of Paul. He always ensured that we were on track and headed in the right direction."
        }
    ]

    const [testimonial, setTestimonial] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonial(testimonial + 1 === testimonials.length ? 0 : testimonial => testimonial + 1)
        }, 7000)
        return () => clearInterval(interval)
    }, [testimonial, testimonials.length])

    return (
        <section className="w-full min-h-[30rem] bg-[url('/background.jpg')] bg-cover bg-center bg-overlay bg-blend-overlay bg-fixed flex flex-col justify-center items-center text-white p-[3rem] md:p-[6rem]">
            <p className='tracking-wide text-center pb-12 font-semibold text-leader'>&quot;{testimonials[testimonial].content}&quot;</p>
            <div className='flex flex-row space-x-8 mx-auto'>
                <Image className="rounded-full" src={testimonials[testimonial].image} width={56} height={56} alt={testimonials[testimonial].name} />
                <div className='flex flex-col justify-center'>
                    <span className='font-semibold text-lg'>{testimonials[testimonial].name}</span>
                    <span className='font-thin'>{testimonials[testimonial].affilliation}</span>
                </div>
            </div>
        </section>
    )
}