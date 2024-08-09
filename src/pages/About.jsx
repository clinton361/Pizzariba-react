import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizzas})`}}>
        
      </div>

      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellendus quibusdam, cumque omnis debitis ad harum quidem eius facilis, aperiam praesentium, rerum facere expedita ea itaque delectus ipsa earum laboriosam?
        Ratione ipsa alias, sapiente eaque tempora qui ex nulla dolorem nobis, voluptatibus aliquid iure repellat impedit magnam nam sit maiores, dolores in quo recusandae nihil? Itaque eveniet perspiciatis possimus at?
        Ratione similique culpa et iure atque beatae nostrum non minus voluptas. Expedita consectetur aliquam nisi suscipit doloribus, molestiae accusamus atque nesciunt eveniet harum quos labore deleniti voluptatem provident quo magnam.
        </p>
      </div>
    </div>
  )
}

export default About
