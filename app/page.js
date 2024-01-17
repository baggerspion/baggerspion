import About from "./components/About"
import Blog from "./components/Blog"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Session from "./components/Session"
import Testimonials from "./components/Testimonials"

export default function Home() {
    return (
        <main className="flex flex-col">
            <Header />
            <About /> 
            <Testimonials />
            <Session />
            <Experience />
            <Blog />
            <Footer />
        </main>
    ) 
}