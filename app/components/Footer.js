'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const front = "paul"
const domain = "baggerspion"
const tld = "net"

export default function Footer() {
    return (
        <footer className="w-full p-20 bg-overlay text-white flex flex-col justify-center items-center">
            <div className='flex flex-col md:flex-row space-y-10 md:space-x-20 md:space-y-0 justify-center'>
                <div className='flex flex-col items-center'>
                    <span className="text-leader">Dr. Paul Finlayson Adams</span>
                    <span className="text-about text-white">Fractional Engineering Leadership</span>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className="">
                        <a target="_blank" href={`mailto:${front}@${domain}.${tld}?subject=Baggerspion: I'd Like To Chat!`} rel="noopener noreferrer"><span><FontAwesomeIcon icon={faEnvelopeOpenText} />  Email Me</span></a>
                    </div>
                    <div className='flex flex-row w-full space-x-8 justify-center'>
                        <a target="_blank" href="https://twitter.com/baggerspion" rel="noopener noreferrer">
                            <span className='text-about text-white'><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/pauljadams/" rel="noopener noreferrer">
                            <span className='text-about text-white'><FontAwesomeIcon icon={faXTwitter} /></span>
                        </a>
                    </div>
                </div>
            </div>
            <span className='text-sm pt-12'>&copy; 2023 Paul Finlayson Adams. All rights reserved.</span>
        </footer>
    )
}