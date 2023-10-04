import Image from "next/image";

import Link from "next/link";


import { HiArrowRight} from 'react-icons/hi2'



const ProjectsBtn = () => {
  return <div className='xl:100'>
    <Link href={'/work'} className='relative w-[180px] h-[180px] flex justify-center items-center 
    bg-circleStar bg-cover bg-center bg-no-repeat group '>
      <Image 
      src={'/rounded-text.png'}
      width={141}
      height={148}
      alt='button img'
      className='animate-spin-slow w-full h-full max-w-[149px] max-h-[148px]' 
      />
      <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
    </Link>
  </div>;

};

export default ProjectsBtn;
