import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR,
    name: 'Jane Doe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos sequi consectetur reiciendis error, illo earum quia, sint, soluta fugiat mollitia doloribus. Ipsa mollitia quisquam voluptates molestias eveniet eaque fugiat'
  },
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos sequi consectetur reiciendis error, illo earum quia, sint, soluta fugiat mollitia doloribus. Ipsa mollitia quisquam voluptates molestias eveniet eaque fugiat'
  },
  {
    avatar: AVTR,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos sequi consectetur reiciendis error, illo earum quia, sint, soluta fugiat mollitia doloribus. Ipsa mollitia quisquam voluptates molestias eveniet eaque fugiat'
  },
  {
    avatar: AVTR,
    name: 'Jane Doe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos sequi consectetur reiciendis error, illo earum quia, sint, soluta fugiat mollitia doloribus. Ipsa mollitia quisquam voluptates molestias eveniet eaque fugiat'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
               <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>

            </SwiperSlide>
            )
          })
        }

      
      </Swiper>
    </section>
  )
}

export default Testimonials