import Image from 'next/image'

import Strategy from '@/public/strategy.jpg'
import Team from '@/public/team.jpg'

export default function Services() {
    return (
        <section className="w-full py-20 px-14">
            <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <div className="w-full h-full relative">
                        <Image className='rounded-md 'fill src={Team} style={{objectFit: "cover"}} />
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <span className="text-2xl font-semibold pb-4">Invest in your team as well as your tech.</span>
                        <p className='pb font-thin tracking-wider'>As your Fractional CTO, I optimize your team's potential by enhancing leadership, refining hiring processes, and boosting morale. I bridge the gap between tech and team, ensuring your focus remains on innovation, while I handle the intricacies of effective people leadership.</p>
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <span className="text-2xl font-semibold pb-4">Removing obstacles and leading the way.</span>
                        <p className='font-thin tracking-wider'>Elevate your startup's engineering strategy with my expertise. I craft visionary roadmaps, streamline budgeting, and fortify your tech foundation. With a focus on alignment with your business' mission and engineering efficiency, I empower your business to thrive in the ever-evolving tech landscape.</p>
                    </div> 
                    <div className="w-full h-full relative">
                        <Image className='rounded-md 'fill src={Strategy} style={{objectFit: "cover"}} />
                    </div>
                </div>                          
            </div>
        </section>
    )
}