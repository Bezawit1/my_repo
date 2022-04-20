import React from 'react'
import MultiplePizzas from"../assets/Images/multiplePizzas.jpeg"
import '../styles/About.css'
function About() {
    return (
        <div className="about">
          <div className="aboutTop"  style={{backgroundImage:`url(${MultiplePizzas})`}}></div>  
          <div className="aboutBottom">
          
          <h1>About Us</h1>
          <p> Beza's pizza  is one of the most authentic and recognizable food brands in Addis Ababa, Ethiopia. Established in 2007, It has garnered a reputation of delivering gourmet pizzas in unique presentations and settings.

At Beza's Pizza, we firmly believe our success is a result of our product quality and customer service consistency while our growth is because of commitment and hard work of our staff members.</p>
          
          </div>  
        </div>
    )
}

export default About
