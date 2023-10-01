// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
//import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';

import { Pagination } from 'swiper';
//icon
import { BsArrowRight } from 'react-icons/bs'

const TestimonialSlider = () => {
  return (
   <Swiper 
   spaceBetween={10}
   pagination={{
clickable:true
   }}
   modules={{Pagination}}
   className='h-[350px] sm:h-[560px]'
   >
       {testimonialSlider.map((person,index)=> {
        return(
        <SwiperSlide key={index}>
          <div>
            {/* avatar, name, position */}
            <div>
              {/* avatar */}
              <div>avatar image</div>
              {/* name */}
              <div>name</div>
              {/* position*/}
              <div>position</div>
            </div>
            {/* quote and messages */}
            <div>quote and messages</div>
          </div>
        </SwiperSlide>
        );
        })}
   </Swiper>
  );
};

export default TestimonialSlider;

