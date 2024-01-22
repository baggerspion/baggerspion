import Footer from "../components/Footer"
import Mission from "./components/Mission"
import Paul from "./components/Paul"
import Pricing from "./components/Pricing"

export const metadata = {
    title: 'Baggerspion: About.',
    description: 'Fractional Engineering Leadership from Paul Finlayson Adams',
    openGraph: {
        title: 'Baggerspion: About.',
        siteName: 'Baggerspion.',
        description: 'Fractional Engineering Leadership from Paul Finlayson Adams',
        type: 'website',
        url: 'https://baggerspion.net/about',
        images: [
            {
                url: `/paul.jpg`
            },
        ],
    }
}

export default function About() {
    return (
        <main className="flex flex-col">
            <div className='flex flex-col p-[3rem] md:p-[6rem] bg-white items-center'>
                <h2 className='text-header'>About</h2>
            </div>
            <Paul />
            <Pricing />
            <Mission />
            <Footer />
        </main>
    )
}