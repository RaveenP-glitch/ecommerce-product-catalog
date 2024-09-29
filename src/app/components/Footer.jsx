import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='w-full flex lg:flex-row bg-slate-300 justify-between p-6 absolute bottom-0 left-0 sm:flex-col sm:gap-2'>
        <div>
            <h6 className='font-semibold text-lg mb-1'>&copy; 2024 Mini Shop</h6>
            <div>
            <Link href="#">Contact</Link> 
            <span> | </span>
            <Link href="#">About</Link> 
            <span> | </span>
            <Link href="#">Terms</Link> 
            <span> | </span>
            <Link href="#">Privacy</Link> 
            </div>
        </div>
        <div className='w-60 flex flex-row justify-between align-middle'>
            <Link href="#">
                <FacebookIcon />
            </Link>
            <Link href="#">
                <InstagramIcon />
            </Link>
            <Link href="#">
                <LinkedInIcon />
            </Link>
            <Link href="#">
                <XIcon />
            </Link>
        </div>
    </div>
  )
}

export default Footer