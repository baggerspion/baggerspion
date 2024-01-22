import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

import Menu from './Menu'

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-end w-full h-screen bg-[url('/paul.jpg')] bg-cover bg-center bg-overlay bg-blend-overlay bg-fixed">
            <Menu />
            <h1 className="text-white text-header font-light">Dr. Paul Finlayson Adams</h1>
            <h2 className="text-subheading font-light tracking-[0.025rem]">Fractional Engineering Leadership</h2>
            <span className='text-white text-arrow py-10'><FontAwesomeIcon icon={faCircleDown} /></span>
        </header>
    )
}