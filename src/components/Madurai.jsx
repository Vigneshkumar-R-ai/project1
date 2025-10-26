import madurai1 from '../assets/madurai/madurai.jpg'
import madurai2 from '../assets/madurai/madurai1.jpg'
import madurai3 from '../assets/madurai/madurai2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Madurai.css'
const Madurai = () => {
  
   
  return (
   <body id='background1'>
   
         <div style={{width: 1500, padding: 30}}>
      <h4 style={{marginTop:"100px",fontWeight:"bold"}}>Madurai</h4>
      <div >
      <Carousel>
        <Carousel.Item interval={1500} style={{height:"530px"}}>
          <img
            className="d-block w-100" src={madurai1} alt="First slide" style={{height:"530px"}}></img>
          
        </Carousel.Item>
        <Carousel.Item interval={1500} style={{height:"530px"}} >
          <img
            className="d-block w-100" src={madurai2} alt="Second slide" style={{height:"530px"}}
          />
         
        </Carousel.Item>

          <Carousel.Item interval={1500}style={{height:"530px"}}>
          <img
            className="d-block w-100" src={madurai3} alt="Third Three" style={{height:"530px"}}/>
         
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    <p style={{marginLeft:"50px",marginRight:"50px",textAlign:"justify",fontWeight:"600"}}>
     <span style={{fontWeight:"bold"}}>🌟 Madurai: The Ancient Soul of Tamil Nadu</span> <br></br>
Madurai, one of the oldest continuously inhabited cities in the world, stands as the vibrant cultural capital of Tamil Nadu in southern India. Located on the banks of the Vaigai River, this metropolis has a documented history stretching back over 2,500 years and is famously known as "Thoonga Nagaram," or "the city that never sleeps," a testament to its ceaseless activity and enduring spirit. Its ancient roots are deeply entwined with the history of the Pandyan Kingdom, who made it their capital from the 4th to the 11th century CE. The city's antiquity is further confirmed by mentions in the accounts of Megasthenes, the Greek ambassador to the Mauryan Empire, and Kautilya's Arthashastra as early as the 3rd century BCE. Madurai was also the revered site of the Third Tamil Sangam, a major congregation of Tamil scholars, underscoring its historical importance as a center for classical Tamil literature and learning.<br></br>

The heart of Madurai is its architectural and spiritual masterpiece, the Meenakshi Amman Temple. This massive temple complex, dedicated to the goddess Meenakshi and her consort Sundareshwara (a form of Shiva), defines the city's compact old layout. Rebuilt magnificently during the Vijayanagar and Nayak periods (16th–17th century) after being destroyed in the 14th century, the temple is an astounding example of Dravidian architecture, characterized by its towering, colorful gopurams (gateway towers) covered in thousands of intricate carvings . Beyond the main temple, other prominent historical sites include the majestic Thirumalai Nayakkar Mahal, a 17th-century palace noted for its Indo-Saracenic fusion style, and the Vandiyur Mariamman Teppakulam tank.<br></br>

Today, Madurai remains a significant industrial and educational hub in Tamil Nadu. While large-scale industries like cotton spinning, weaving, and the manufacturing of transport equipment have developed in its suburbs, the traditional small-scale hand-loom weaving of exquisite silks and cottons, which historically made Madurai famous, still flourishes. As a major transportation nexus for southern India, with excellent road, rail, and air connectivity, Madurai links various regions, facilitating both commerce and cultural exchange. The city is also home to educational institutions like Madurai Kamaraj University and is renowned for its vibrant festivals, such as the Chithirai Thiruvizha, further cementing its status as a timeless symbol of cultural heritage and continuous historical relevance.
    </p>
    </body>
  )
}

export default Madurai