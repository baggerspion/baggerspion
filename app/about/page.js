import Footer from "../components/Footer"
import Mission from "./components/Mission"
import Paul from "./components/Paul"
import Pricing from "./components/Pricing"

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