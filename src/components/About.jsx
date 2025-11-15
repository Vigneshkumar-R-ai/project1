import React from 'react'
import './About.css'
import tourism from '../assets/tourism.jpg'
import thanjai from '../assets/Thanjai.jpg'
const About = () => {
  
  return (
    <div >
    <br></br><br></br> <br></br><br></br> <br></br><br></br>
    <div id="temple" style={{backgroundImage:`url(${thanjai})`,backgroundSize:"cover",height:"86vh",marginTop:"-14px",marginBottom:"0px",opacity:"0.4",overflowY:"hidden"}}>
       </div>
   
   
    <p id='temple1'><h1>About</h1>

Tamil Nadu tourism is centered around its rich cultural heritage, natural beauty, and diverse attractions, which include ancient temples, UNESCO World Heritage Sites, and hill stations. Visitors can explore historic sites in cities like Madurai and Thanjavur, scenic destinations like Ooty and Kodaikanal, and coastal areas like Kanyakumari. The state offers a range of experiences, from wildlife sanctuaries and beaches to bustling markets and modern attractions, catering to different interests throughout the year, especially during festivals.<br></br>

One of the greatest treasures of Tamil Nadu is its magnificent temple architecture. Cities like Madurai, Thanjavur, and Kanchipuram are renowned for their ancient Dravidian-style temples that showcase the brilliance of South Indian craftsmanship. The Meenakshi Amman Temple in Madurai, the Brihadeeswarar Temple in Thanjavur, and the Ekambareswarar Temple in Kanchipuram stand as symbols of Tamil Nadu’s glorious past and devotion. These temples are not only places of worship but also architectural masterpieces that attract historians, photographers, and spiritual seekers alike.<br></br>

Beyond temples, Tamil Nadu also boasts beautiful hill stations such as Ooty, Kodaikanal, and Yercaud, which provide a cool retreat from the tropical climate. These regions are known for their lush greenery, serene lakes, and tea plantations, making them popular among nature lovers and honeymooners. The state’s long coastline features pristine beaches like Mahabalipuram, Rameswaram, and Kovalam, each offering breathtaking views and opportunities for water sports. Mahabalipuram, a UNESCO World Heritage Site, is especially famous for its rock-cut temples and sculptures dating back to the Pallava dynasty.




</p>

   <span id="tourism1"><img src={tourism} alt='Tour' id='tourism'></img></span> 
    </div>
  )
}

export default About