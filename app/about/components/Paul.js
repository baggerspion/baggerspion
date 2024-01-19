import Image from "next/image"

export default function Paul() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="h-[30rem] md:w-1/2 relative">
                <Image src="/paul.jpg" style={{objectFit: "cover", objectPosition: "center"}} fill alt="Photo portrait for Paul Finlayson Adams" />
            </div>
            <div className="flex flex-col h-[30rem] md:w-1/2 p-[6rem] justify-center">
                <h2 className="text-leader pb-4">Dr. Paul Finlayson Adams</h2>
                <p className="text-about">
                    I am a software engineer and engineering manager with over 20 years of experience. I have worked with some of Europe&apos;s biggest names in tech as well as some of the most exciting unicorn startups.              
                </p>
            </div>
        </div>
    )
}