import React from 'react'
import dindigul from '../assets/dindigul/dindigul.jpg'
import dindigul1 from '../assets/dindigul/dindigul1.jpg'
import dindigul2 from '../assets/dindigul/dindigul2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import './Dindigul.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
const Dindigul = () => {
  return (
    <body class='background'>
    <div style={{width:1500,padding:30}}>
      <h4 style={{marginTop:"100px",fontWeight:"bold"}}>Dindigul</h4>
      <div>
<Carousel>
  <CarouselItem interval={1500} style={{height:"530px"}} >
    <img className='d-block w-100' src={dindigul} alt='first slide' style={{height:"530px"}}></img>
  </CarouselItem>
  <CarouselItem interval={1500} style={{height:"530px"}}>
    <img className='d-block w-100' src={dindigul1} alt='second slide' style={{height:"530px"}}></img>
  </CarouselItem>
  <CarouselItem interval={1500} style={{height:"530px"}}>
    <img className='d-block w-100'  src={dindigul2} alt='third slide' style={{height:"530px"}}></img>
  </CarouselItem>
</Carousel>
      </div>
    </div>
    <p style={{marginLeft:"50px",marginRight:"50px",textAlign:"justify",fontWeight:"600"}}>
<span style={{fontWeight:'bold'}}>🏰 Dindigul: The City of Locks and Heritage</span><br></br>
Dindigul, a city and the administrative headquarters of the district bearing its name in the southern Indian state of Tamil Nadu, boasts a rich tapestry of history, industry, and culture. Its name is derived from the Tamil words thindu (pillow) and kal (rock), referring to the distinctive, pillow-shaped Rock Fort that dominates the city skyline and serves as a major historical landmark . This fort's strategic location was pivotal, marking the border of the ancient Pandyas, Cheras, and Cholas kingdoms. Over centuries, Dindigul was ruled by numerous dynasties, including the Madurai Nayaks, the Kingdom of Mysore under Hyder Ali and Tipu Sultan, and eventually the British, making the fort a silent witness to countless conflicts and power shifts.<br></br><br></br>

<span style={{fontWeight:'bold'}}>Industrial Hub and Agricultural Wealth💼</span> <br></br>
Beyond its historical significance, Dindigul is renowned as a hub for several niche industries. It is famously known as the 'City of Locks', associated for a long time with the manufacturing of high-quality, durable iron locks and safes. This traditional skill even earned the Dindigul locks a Geographical Indication (GI) tag. The district is also a major centre for the leather tanning industry and is recognized for its textile and handloom sectors, with places like Chinnalapatti being famous for Art-Silk and Sungudi sarees.Agriculture remains a fundamental part of the district's economy. Dindigul is a major wholesale market for crops like onion and groundnut, and the conducive climate supports horticulture, producing cash crops like coffee, flowers, and fruits. The town of Oddanchatram, within the district, is particularly noted as a major vegetable market. The historical association with tobacco is also strong; during the British era, Dindigul was a key centre for cigar manufacture, including the famous 'Light of Asia' cigar.
<br></br><br></br>
<span style={{fontWeight:'bold'}}>🙏 Cultural and Educational Significance</span><br></br>
Dindigul district holds immense religious and cultural importance, primarily due to the presence of one of the Six Abodes of Lord Murugan: the famous Dhandayuthapani Temple atop Palani Hills. This draws pilgrims from across the globe, with the temple's electric winches and rope car being notable features facilitating access. Other notable attractions include the Begampur Mosque, a monument of the Hyder Ali era, and the popular hill station of Kodaikanal, which is located within the district. Educationally, the district is home to institutions like the Gandhigram Rural Deemed University and Mother Teresa Women's University at Kodaikanal, contributing to its development as a well-connected and progressive region in Tamil Nadu. The city continues to evolve as an important transport nexus, linking major cities like Madurai, Coimbatore, and Tiruchirappalli.

    </p>
    </body>
  )
}

export default Dindigul