import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/dribble1.png'
import IMG5 from '../../assets/dribble2.webp'
import IMG6 from '../../assets/dribble3.webp'

const data = [
  {
    id:1,
  image: IMG1,
  title:'Global present and the connections between',
  github: 'https://github.com',
  demo: 'https://cdn.dribbble.com/userupload/3489053/file/original-e152ff30a6e9d4662b38f6908d198506.jpg?compress=1&resize=752x'
},
{
  id:2,
image: IMG2,
title:'Node system dashboard',
github: 'https://github.com',
demo: 'https://cdn.dribbble.com/userupload/3493091/file/original-ccc74fa584c086f09883a6866983a76c.jpg?compress=1&resize=752x'
},
{
  id:3,
image: IMG3,
title:'futuristic map',
github: 'https://github.com',
demo: 'https://cdn.dribbble.com/userupload/3493073/file/original-294e5342fa03518885be29baf18479c3.jpg?compress=1&resize=1504x1128'
},
{
  id:4,
image: IMG4,
title:'futuristic map',
github: 'https://github.com',
demo: 'https://cdn.dribbble.com/users/1724719/screenshots/19426615/media/5bf8e74bff55e34d06a513f42539475a.png?compress=1&resize=1200x900&vertical=top'
},
{
  id:5,
image: IMG5,
title:'Roll With Me',
github: 'https://github.com',
demo: 'https://cdn.dribbble.com/userupload/3581119/file/original-81e7fe13f90757d4650dbc2ad2f99e12.png?compress=1&resize=1504x1128'
},
{ id:6,
  image: IMG6,
  title:'We help tackle your problems',
  github: 'https://github.com',
  demo: 'https://cdn.dribbble.com/userupload/3512611/file/original-de7df098a10589b245983206a3ff0218.png?compress=1&resize=1504x1128'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
            
               <div className='portfolio__item-cta'>
                 <a href={github} className='btn' target='_blank' rel="oopener noreferrer">Github</a>
                 <a href={demo} className='btn btn-primary' target='_blank' rel="oopener noreferrer">Live Demo</a>
               </div>
        </article>
            )
          } )
        }
        
      </div>
    </section>
  )
}

export default Portfolio