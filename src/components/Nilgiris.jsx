import image1 from '../assets/nilgiris/licensed-image (1).jpg'
import image2 from '../assets/nilgiris/unnamed (1).jpg'
import image3 from '../assets/nilgiris/unnamed.jpg'
import './Nilgiris.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Nilgiris = () => {
  
   
  return (
   <body id='background'>
   
         <div style={{width: 1500, padding: 30}}>
      <h4 style={{marginTop:"100px",fontWeight:"bold"}}>Nilgiris</h4>
      <div >
      <Carousel>
        <Carousel.Item interval={1500} style={{height:"530px"}}>
          <img
            className="d-block w-100" src={image1} alt="First slide" style={{height:"530px"}}></img>
          
        </Carousel.Item>
        <Carousel.Item interval={1500} style={{height:"530px"}} >
          <img
            className="d-block w-100" src={image2} alt="Second slide" style={{height:"530px"}}
          />
         
        </Carousel.Item>

          <Carousel.Item interval={1500}style={{height:"530px"}}>
          <img
            className="d-block w-100" src={image3} alt="Third Three" style={{height:"530px"}}/>
         
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    <p style={{marginLeft:"50px",marginRight:"50px",textAlign:"justify",fontWeight:"600"}}>The Nilgiris, or the "Blue Mountains," are a captivating range of hills forming part of the Western Ghats, predominantly located in the state of Tamil Nadu, India, at the tri-junction of Tamil Nadu, Karnataka, and Kerala. The name is believed to originate either from the violet blossoms of the 'Kurinji' flower that periodically blanket the slopes, giving them a bluish hue, or from the smoky haze that often envelops the area. A land of unparalleled natural beauty, the Nilgiris district, with its administrative headquarters at Ooty (Udhagamandalam), is often referred to as the "Queen of Hill Stations."
      <br></br>
    Geographically, the district is a hilly plateau lying at an elevation of 1,000 to 2,600 meters above mean sea level. This high elevation is responsible for its famously cool and pleasant climate, a significant draw for tourists and a perfect setting for the extensive tea plantations that define its landscape. The highest point in the Nilgiris, and indeed in Tamil Nadu, is Doddabetta Peak, soaring to 2,637 meters. The unique topography consists of rolling hills, dense forests known as 'sholas,' interspersed with open grasslands, and numerous waterfalls and streams, including the sacred Pykara River. This diverse ecosystem is part of the larger Nilgiri Biosphere Reserve, a UNESCO designated site known for its rich biodiversity.
     <br></br>
    Historically, the Nilgiris attracted European attention in the early 19th century due to its temperate climate, serving as a welcome retreat from the heat of the plains. John Sullivan, the Collector of Coimbatore, played a crucial role in developing the area, leading to Ooty becoming the official sanatorium and later the summer capital of the Madras Presidency during the British Raj. The colonial legacy is evident in the architecture of towns like Ooty and Coonoor, as well as the world-famous Nilgiri Mountain Railway—a UNESCO World Heritage Site—which provides a picturesque journey up the slopes.
   <br></br>
    The region is also home to several indigenous communities, including the Todas, Kotas, Kurumbas, and Irulas, whose traditional way of life and distinct cultural heritage form an integral part of the Nilgiris' identity. The hills are a critical habitat for various flora and fauna, notably the Nilgiri Tahr, an endangered mountain ungulate and the state animal of Tamil Nadu, primarily found in the montane grasslands. However, the ecosystem faces threats from habitat loss due to monoculture plantations and invasive species, making conservation efforts, especially in protected areas like Mudumalai and Mukurthi National Parks, vital for preserving this irreplaceable natural paradise.</p>
    </body>
  )
}

export default Nilgiris