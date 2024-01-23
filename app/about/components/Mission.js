import Image from "next/image"

export default function Mission() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="bg-white p-[3rem] md:p-[6rem] md:w-1/2 flex flex-col justify-center h-[30rem]">
                    <h2 className="text-leader pb-4">Overview</h2>
                    <p className="text-about">I provide engineering management services to technology startups pushing for growth but without the capacity for a full-time manager. I provide strategic support to CTOs and practical, hands-on assistance to teams of software engineers.</p>
                </div>
                <div className="md:w-1/2 relative h-[30rem]">
                    <Image src="/david-iskander-iWTamkU5kiI-unsplash.jpg" style={{objectFit: "cover", objectPosition: "center"}} fill alt="Photo of a hand and pen next to a notebook with the title 'Let's Get Started'" quality={80} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
                <div className="bg-white md:w-1/2 p-[3rem] md:p-[6rem] flex flex-col justify-center h-[30rem]">
                    <h2 className="text-leader pb-4">Background</h2>
                    <p className="text-about">I established Baggerspion having spent over 20 years working as an engineer and engineering manager in both startups and enterprises. I wanted to support startup growth by providing engineering management to companies which have yet to achieve the scale to support a full-time manager.</p>
                </div>
                <div className="md:w-1/2 relative h-[30rem]">
                    <Image src="/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg" style={{objectFit: "cover", objectPosition: "center"}} fill alt="Photo of drawer filled with old photosgraphs" quality={80} />
                </div>
            </div>
        </div>
    )
}