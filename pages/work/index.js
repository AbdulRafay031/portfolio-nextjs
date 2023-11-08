

//component 
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'

//framer motion 
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center '>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h1 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='h2 xl:mt-12'>
            My Work<span className='text-accent'>.</span></motion.h1>
          <motion.p 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='mb-4 max-w-[400px] mx-auto lg:mx-0 md:auto'>
           Hello i am a full stack front end developer expertise in html5 | css3 | javascript | typescript | reactjs | nextjs | tailwind css | nodejs | mongodb | firebase | java. I am also a freelancer hvaing 1+ year of experience. 
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('up',0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className='w-full xl:max-w-[95%]'>
        <WorkSlider/>
        </motion.div>
       
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
