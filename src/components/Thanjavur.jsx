import thanjavur1 from '../assets/thanjavur/thanjavur.jpg'
import thanjavur2 from '../assets/thanjavur/thanjavur1.jpg'
import thanjavur3 from '../assets/thanjavur/thanjavur2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Thanjavur.css'
const Thanjavur = () => {
  
   
  return (
   <body class='background1'>
   
         <div style={{width: 1500, padding: 30}}>
      <h4 style={{marginTop:"100px",fontWeight:"bold"}}>Thanjavur</h4>
      <div >
      <Carousel>
        <Carousel.Item interval={1500} style={{height:"530px"}}>
          <img
            className="d-block w-100" src={thanjavur1} alt="First slide" style={{height:"530px"}}></img>
          
        </Carousel.Item>
        <Carousel.Item interval={1500} style={{height:"530px"}} >
          <img
            className="d-block w-100" src={thanjavur2} alt="Second slide" style={{height:"530px"}}
          />
         
        </Carousel.Item>

          <Carousel.Item interval={1500}style={{height:"530px"}}>
          <img
            className="d-block w-100" src={thanjavur3} alt="Third Three" style={{height:"530px"}}/>
         
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    <p style={{marginLeft:"50px",marginRight:"50px",textAlign:"justify",fontWeight:"600"}}>
<span style={{fontWeight:"bold"}}>🍚 Thanjavur: The Rice Bowl and Zenith of Chola Art</span>
Thanjavur, historically known as Tanjore, is a city that encapsulates the very soul of South Indian art, architecture, and cultural heritage. Nestled in the fertile delta of the Kaveri River, it is affectionately known as the "Rice Bowl of Tamil Nadu," a testament to its pivotal role as a major agrarian region. However, Thanjavur’s truest claim to fame lies in its unparalleled history as the capital of the mighty Chola Empire from the 9th to the 11th centuries. Under the patronage of emperors like Raja Raja Chola I, the city became a crucible of Dravidian civilization, fostering a renaissance in art, literature, and temple building that left an indelible mark on the subcontinent.<br></br>

The crowning glory of Thanjavur is the magnificent Brihadeeswarar Temple, often simply called the "Big Temple." Completed in 1010 CE, this UNESCO World Heritage Site is one of the largest and most ambitious Hindu temples ever constructed in India, dedicated to Lord Shiva. An architectural marvel, the entire structure is built from thousands of tons of granite, which had to be transported from quarries nearly 50 miles away. Its most awe-inspiring feature is the towering Vimana (main spire), which rises over 200 feet high, crowned by an 80-ton monolithic cupola, a feat of ancient engineering whose method of placement remains a subject of legend. The temple, with its massive Nandi statue and walls covered in intricate carvings and Chola frescoes, stands as a grand symbol of the Chola dynasty's power and devotion.<br></br>

Beyond the granite monoliths, Thanjavur is a vibrant center for the arts. It is the origin of the distinctive Tanjore Painting style, celebrated for its rich colors, intricate gold leaf work, and use of semi-precious stones to depict Hindu deities. The city also remains a vital hub for Carnatic music and the classical dance form Bharatanatyam. Key cultural landmarks include the sprawling Thanjavur Maratha Palace Complex, which houses the world-renowned Saraswathi Mahal Library, one of Asia's oldest libraries, preserving a vast collection of rare manuscripts. Having been ruled sequentially by the Cholas, Pandyas, Nayaks, and Marathas, Thanjavur's architecture and culture are a beautiful amalgamation of diverse influences, offering a tangible link to a glorious and highly artistic past.

    </p>
    </body>
  )
}

export default Thanjavur