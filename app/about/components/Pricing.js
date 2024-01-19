import Link from "next/link"

import Tick from "./Tick"

export default function Pricing() {
    return (
        <div className="w-full min-h-[30rem] bg-[url('/background.jpg')] bg-cover bg-center bg-overlay bg-blend-overlay bg-fixed flex flex-col justify-center text-white p-[3rem] md:p-[6rem]">
            <h3 className="text-leader pb-8">Pricing</h3>
            <p className="text-about leading-8 pb-8 text-white">
                I provide three consulting products to suit different scenarios. Each product comes with its own price point, designed to be cost effective to startups. Volume discounting is available for all three consulting rates.
            </p>
            <div className="grid grid-cols-3 gap-10">
                <div className="h-full">                                
                    <div class="relative flex flex-col h-full p-6 pb-10">
                        <div className="mb-5">
                            <div className="font-semibold mb-1">On-Demand</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="font-bold text-3xl">£</span>
                                <span className="font-bold text-4xl">350</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <div className="text-sm text-slate-500 mb-5">Keep things moving with my experienced, impartial advice when it&apos;s most valuable to you. </div>
                            <Link href="/#session" className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                Book Time With Me
                            </Link>
                        </div>
                        <div className="text-sm font-medium mb-4">Includes:</div>
                        <ul className="text-sm space-y-3 grow">
                            <li className="flex items-center">
                                <Tick />
                                <span>Ad-hoc advice from an experienced engineer</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Email and video call</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Maximum 48 hour response time</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Open-ended. We can discuss anything you need!</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full">                                
                    <div className="relative flex flex-col h-full p-6 pb-10">
                        <div className="mb-5">
                            <div className="font-semibold mb-1">Team Support</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="font-bold text-3xl">£</span>
                                <span className="font-bold text-4xl">1,500</span>
                                <span className="text-slate-500 font-medium">/month</span>
                                <span className="font-medium px-2">+</span>
                                <span className="font-bold text-3xl"> £</span>
                                <span className="font-bold text-4xl">150</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <div className="text-sm text-slate-500 mb-5">Hands-on support for your engineers, helping them to deliver their best.</div>
                            <Link href="/#session" className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                Book Time With Me
                            </Link>
                        </div>
                        <div className="text-sm font-medium mb-4">Includes:</div>
                        <ul className="text-sm space-y-3 grow">
                            <li className="flex items-center">
                                <Tick />
                                <span>Regular 1:1 meetings</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Career development planning</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Attending team meetings</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Backlog grooming</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full">                                
                    <div className="relative flex flex-col h-full p-6 pb-10">
                        <div className="mb-5">
                            <div className="font-semibold mb-1">Strategic Consulting</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="font-bold text-3xl">£</span>
                                <span className="font-bold text-4xl">1,500</span>
                                <span className="text-slate-500 font-medium">/month</span>
                                <span className="font-medium px-2">+</span>
                                <span className="font-bold text-3xl"> £</span>
                                <span className="font-bold text-4xl">250</span>
                                <span className="text-slate-500 font-medium">/hour</span>
                            </div>
                            <div className="text-sm text-slate-500 mb-5">Supporting your CTO in building an incredible engineering organisation, designed to last</div>
                            <Link href="/#session" className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                Book Time With Me
                            </Link>
                        </div>
                        <div className="text-sm font-medium mb-4">Includes:</div>
                        <ul className="text-sm space-y-3 grow">
                            <li className="flex items-center">
                                <Tick />
                                <span>Team hiring</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Supplier selection and negotiation</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>Choosing the tech stack</span>
                            </li>
                            <li className="flex items-center">
                                <Tick />
                                <span>DevOps and process automation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}