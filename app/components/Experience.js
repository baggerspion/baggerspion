import Image from 'next/image'

export default function Experience() {
    return (
        <section className="w-full bg-[url('/background.jpg')] bg-cover bg-center bg-overlay bg-blend-overlay bg-fixed flex flex-col justify-center items-center p-20">
            <div className="w-full max-w-4xl overflow-hidden">
                <div className="flex flex-row w-full gap-[50px] animate-slider">
                    <Image width={90} height={90} src="/logos/Deliveroo.png" alt="Deliveroo logo" />
                    <Image width={90} height={90} src="/logos/Vercel.png" alt="Vercel logo" />
                    <Image width={90} height={90} src="/logos/Scout24.png" alt="Scout24 logo" />
                    <Image width={90} height={90} src="/logos/Wayfair.png" alt="Wayfair logo" />
                    <Image width={90} height={90} src="/logos/Swarm64.png" alt="Swarm64 logo" />
                    <Image width={90} height={90} src="/logos/Zalando.png" alt="Zalando logo" />
                    <Image width={90} height={90} src="/logos/Crate.png" alt="CrateDB logo" />
                    <Image width={90} height={90} src="/logos/Deliveroo.png" alt="Deliveroo logo" />
                    <Image width={90} height={90} src="/logos/Vercel.png" alt="Vercel logo" />
                    <Image width={90} height={90} src="/logos/Scout24.png" alt="Scout24 logo" />
                    <Image width={90} height={90} src="/logos/Wayfair.png" alt="Wayfair logo" />
                    <Image width={90} height={90} src="/logos/Swarm64.png" alt="Swarm64 logo" />
                    <Image width={90} height={90} src="/logos/Zalando.png" alt="Zalando logo" />
                    <Image width={90} height={90} src="/logos/Crate.png" alt="CrateDB logo" />
                </div>
            </div>
        </section>
    )
}