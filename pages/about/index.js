import React, { useState } from 'react';

import Nav from '../../components/Nav';
import { useRouter } from 'next/router';
//  data
import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from 'react-icons/fa';

import{
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  
} from 'react-icons/si';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: ' Web Developer Freelacer - Fivver | freelacer.com',
        stage: 'jan-2023 ',
      },
      
     
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - Sylani Mass IT program',
        
      },
      {
        title: 'Bachelor in Computer Science(undergraduate)  - Sindh Madrasa-tul-islam university',
        stage: '2022-till date',
      },
     
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';


import { icons } from 'react-icons';
import CountUp from 'react-countup';
//import {fadeIn} from '../..variants';
const About = () => {
  const router= useRouter();
  const [index, setIndex] =useState(0);
  console.log(index);
  return (

  <div className='h-full bg-primary/30 py-32 text-center xl:text-left '>
   <Circles/>

   {/* <motion.div 
   //variants={fadeIn('right', 0.2)} 
   initial='hidden' 
   animate='show' 
   exit='hidden' 
   className='hidden xl:flexabsolute bottom-0 -left-[370px]'>
    <Avatar />
    
   
   </motion.div> */}
   <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
    {/* text */}
    <div className='flex-1.5 flex flex-col justify-center'>
        <h2 
        // variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='h2'
        >Captivating <span className='text-accent'>stories</span> birth magnificent designs.</h2>
        <p className='mx-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12px-2 xl:px-0'>
          I am full stack front-end web developer and i am also a freelancer.I have a 1 year of experience 
          in web developing .
        </p>
        {/* counter */}
        <div className='hidden md:flex md:mx-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '>
          <div className='flex flex-xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 '>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={1} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                year of experience
                </div>
            </div>
            
            {/* clients */}
            
          </div>
          {/* project */}
          <div className='relative flex-1 '>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={5} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>finished project</div>
            </div>
        </div>
    </div>
    
    {/* info */}
    <div className='flex flex-col w-full xl:mx-w-[48%] h-[480px]'>
      <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
        {aboutData.map((item, itemIndex)=>{
          return(
            <div key={itemIndex} 
            className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
             after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={()=> setIndex(itemIndex)}
            >
              {item.title}
              <div></div>
              </div>
              
          )
        })}
      </div>
      <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center 
      xl:items-start'> 
        {aboutData[index].info.map((item, itemIndex) =>{
          return (<div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max 
          gap-x-2 items-center text-white/60'>
          {/* title */}
          <div className='font-light mb-2 md:mb-0 '>{item.title}</div>
          <div className='hidden md:flex'></div>
          <div>{item.stage}</div>
          <div className='flex gap-x-4'>
          {/* icons */}
          {item.icons?.map((icon, itemIndex)=>{
           return <div className='text-2xl text-white'>{icon}</div>
          })}
          </div>
          </div>
        );
        })}
      </div>
    </div>
   </div>
  </div>
  
  );
 };

// export default About;
export default About;