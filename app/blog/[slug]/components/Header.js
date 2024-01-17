import Image from "next/image"

export default function Header({ image }) {
    return (
        <div className="relative top-0 w-full h-96">
            <Image src={`/blogpic/${image}`} alt="Blog post header image" fill priority quality={80} style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
    )
}