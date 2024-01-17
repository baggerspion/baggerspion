'use client'

import Cal from "@calcom/embed-react"

export default function Session() {
    return (
        <section id="session" className="w-full p-[3rem] md:p-[6rem] flex flex-col items-center">
            <div className="flex flex-col max-w-4xl">
                <h3 className="text-leader pb-8">Want an introductory chat?</h3>
                <p className="text-about leading-8 pb-8">
                    Use this calendar to grab a free 45-minute with me to discuss your business and how I might be able to help.
                </p>
                <Cal
                    calLink="baggerspion/initial"
                    style={{width:"100%",height:"100%",overflow:"scroll"}}
                    config={{layout: 'month_view'}}
                />
            </div>
        </section>
    )
}