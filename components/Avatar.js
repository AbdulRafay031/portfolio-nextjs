import Image from "next/image";


const Avatar = () => {
  return <div className='xl:flex xl:mx-w-none '>
  <Image 
  src={'/home-ar.png'} 
  width={700} 
  height={678} 
  alt=''
  className='translate-z-0 '
  ></Image>
  </div>;
};

export default Avatar;



