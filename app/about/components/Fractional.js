import Image from "next/image"

export default function Fractional() {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="min-h-[30rem] md:w-1/2 relative">
                <Image src="/paul.jpg" style={{objectFit: "cover", objectPosition: "center"}} fill alt="Photo portrait for Paul Finlayson Adams" />
            </div>
            <div className="flex flex-col min-h-[30rem] md:w-1/2 p-[6rem] justify-center">
                <h2 className="text-leader pb-4">Fractional Engineering Leadership</h2>
                <p className="text-about">
                    Fractional Engineering Leadership is dedicated to guiding startups in key non-product areas of engineering, e.g. tooling, developer productivity, engineer career development. It&apos;s an essential service for growing companies, focusing on building a strong, efficient team culture and driving organizational success.
                    My work is distinct from a traditional Fractional CTO in that your existing technical leadership remains focused on building an incredible product while I aim to help you scale efficiently, ensuring a well-structured, high-performing engineering culture.
                </p>
            </div>
        </div>
    )
}