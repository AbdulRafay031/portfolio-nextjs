import Circles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import React, { useState } from 'react';
const Contact = () => {
  

  return(
   <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text and form */}
      <div className='flex flex-col w-full mx-w-[700px] '>
        {/* text */}
        <motion.h2
        variants={fadeIn('up',0.2 )} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className='h2 text-center mb-12'>
       Let&apos;s <span className='text-accent'>connect</span>error in this line.

          </motion.h2>
          {/* form */}
          <motion.form mailto='rafay16031@gmail.com'  
        variants={fadeIn('up',0.2 )} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
         className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input'  />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input'   />
            <textarea  className='input' placeholder='message'
            > </textarea>
            <button className='btn rounded-full border border-white/50 max-
            w-[170px] px-8 transition-all duration-300 flex items-center justify-center 
            overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translatey-[120%] 
              group-hover:opacity-0 transition-all duration-500'>lets talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0  group-hover:flex 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300
              absolute text-[22px]'/>
            </button>
          </motion.form>
      </div>
    </div>
   </div>
  );
};

export default Contact;
 