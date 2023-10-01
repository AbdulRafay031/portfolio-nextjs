import Link from "next/link";

import {RiYoutubeLine, 
        RiInstagramLine, 
        RiFacebookLine, 
        RiBehanceLine, 
        RiPinterestLine,
        RiLinkedinLine,
        RiWhatsappLine,
      } from 'react-icons/ri'

const Socials = () => {
  return <div className='relative flex items-center gap-x-5 text-lg md-20'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
     <RiYoutubeLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
     <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
     <RiFacebookLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/abdul-rafay-aba1bb285'} className='hover:text-accent transition-all duration-300'>
     <RiLinkedinLine/>
    </Link>
    <Link href={'https://wa.me/qr/B35DAJNVSWO3N1'} className='hover:text-accent transition-all duration-300'>
     <RiWhatsappLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
     <RiPinterestLine/>
    </Link>
  </div>;
};

export default Socials;
