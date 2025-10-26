import React from 'react'
import Marquee from "react-fast-marquee";
import './Home.css'
import Tamilnadu from '../assets/Tamilnadu.jpg'
// import Tourism from '../assets/Tourism.mp4'
const Home = () => {

   document.addEventListener('DOMContentLoaded', () => {
   const tabButtons = document.querySelectorAll('.tab-button');
  // const tabPanes = document.querySelectorAll('.tab-pane');
   tabButtons.forEach(button => {
   button.addEventListener('click', () => {
      // Deactivate current active button and pane
      document.querySelector('.tab-button.active').classList.remove('active');
      document.querySelector('.tab-pane.active').classList.remove('active');

      // Activate clicked button
      button.classList.add('active');

      // Show corresponding tab pane
      const targetTabId = button.dataset.tab;
      document.getElementById(targetTabId).classList.add('active');
    });
  });
});
 
  return (
    <>
<br></br>
  <Marquee speed={100}  style={{marginTop:"106px",backgroundColor:"red",color:"white"}} id="m1" direction="left">Popular Destinations :
 1)Kanyakumari &nbsp; 
 2)Ooty  &nbsp; 
 3)Kodaikanal  &nbsp; 
 4)Mahabalipuram  &nbsp; 
 5)Madurai  &nbsp; 
 6)Thanjavur  &nbsp; 
 7)Velankanni  &nbsp; 
 8)Rameswaram</Marquee>
 
 
<video autoPlay muted loop id="myVideo">
  <source src={require('../assets/tourist.mp4')} type="video/mp4" ></source>
 
  </video>
  
<br></br> 


  <div id='back'>Tamil Nadu State Tourism</div>

<div id='imageback'>
  <img id='back1' src={Tamilnadu} alt='TamilNadu'></img>
</div>

<br></br>

<div class='tabs-container'>
  <div class='tab-buttons'>
    <button class="tab-button active" data-tab="tab1" style={{padding:"5px"}}>Histroy & Culture</button>
     <button class="tab-button" data-tab="tab2" style={{padding:"5px"}}>Ancient Temple</button>
     
  </div>
  <div class='tab-content'>
    <div id='tab1' class="tab-pane active"><p style={{textAlign:"justify",marginLeft:"15px",marginRight:"15px",marginTop:"15px"}}>The cultural, architectural, and natural diversity of Tamil Nadu positions it as one of India's most visited states, offering a kaleidoscope of tourist experiences that span millennia of history and geography. At the heart of its tourism appeal lies its unparalleled density of Dravidian temple architecture, most prominently showcased in the historical cities of Madurai and Thanjavur. Madurai is home to the colossal Meenakshi Amman Temple, a sprawling architectural wonder distinguished by its twelve towering gopurams (pyramidal gateways) covered in thousands of brightly painted mythological sculptures, serving not just as a religious center but as a vibrant hub of South Indian culture and art. Further south, the city of Thanjavur proudly hosts the Brihadeeswarar Temple, a UNESCO World Heritage Site and a masterpiece of Chola engineering. Built by Raja Raja Chola I in the 11th century, this temple, also known as the Big Temple, features a massive monolithic nandi (bull) statue and a unique, towering vimana (main tower) that casts no shadow at noon, illustrating the supreme skill of ancient artisans who utilized no binding agent in its construction. Complementing these mainland marvels is the iconic Ramanathaswamy Temple in Rameshwaram, one of the four Char Dham pilgrimage sites, famous for having the longest temple corridor in the world, lined with over 1,200 intricately carved pillars, standing as a testament to the synthesis of spirituality and architectural grandeur on Pamban Island.</p>
    <p style={{textAlign:"justify",marginLeft:"15px",marginRight:"15px",marginTop:"-10px"}}>Tamil Nadu, an ancient cradle of Dravidian civilization in the southernmost reaches of the Indian peninsula, stands as a mesmerizing tapestry of towering temple architecture, serene hill stations, vibrant coastal landscapes, and profound cultural heritage, collectively solidifying its status as one of India's foremost tourist destinations. The state’s religious heartland, epitomized by its magnificent temples, forms the cornerstone of its appeal. The colossal Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage Site and a masterpiece of Chola engineering, showcases the architectural zenith of the 11th century with its gravity-defying vimana (temple tower). Equally compelling is the vibrant and sprawling Meenakshi Amman Temple in Madurai, a living monument of artistry with its twelve towering, multi-hued gopurams adorned with thousands of intricately painted mythological figures, representing the quintessential South Indian temple city. Further along the sacred circuit is the pilgrimage island of Rameshwaram, home to the Ramanathaswamy Temple with the longest corridor among all Indian temples, and the ethereal, abandoned town of Dhanushkodi, believed to be the starting point of the mythical Rama Setu. The sheer concentration of monumental religious and historical sites extends to Mahabalipuram (Mamallapuram), another UNESCO site, where the Pallava dynasty carved their legacy into the shoreline, creating the monolithic Rathas (chariots), the exquisite Shore Temple, and the massive rock-relief of Arjuna's Penance, offering a glimpse into 7th-century rock-cut architecture. Meanwhile, the historic city of Kanchipuram, famously known as the "City of a Thousand Temples," remains a significant centre for both Vaishnavite and Shaivite faiths, and is equally renowned globally for its exquisite hand-woven silk sarees.</p>
    </div>
    <div id='tab2' class="tab-pane"><p style={{textAlign:"justify",marginLeft:"15px",marginRight:"15px",marginTop:"17px"}}>Tamil Nadu, nestled at the southernmost tip of the Indian peninsula, is a vibrant tapestry of profound history, spectacular architecture, and diverse natural beauty. Renowned as the "Gateway to South India," the state consistently ranks as one of the most visited destinations in the country, drawing both domestic and international tourists with its unique allure. The state's deep cultural roots are prominently displayed in its magnificent temples, which are masterpieces of Dravidian architecture. UNESCO World Heritage Sites like the Great Living Chola Temples (Brihadeeshwara Temple in Thanjavur, Gangaikonda Cholapuram, and Airavatesvara Temple) and the Group of Monuments at Mahabalipuram stand as breathtaking testaments to the artistic and engineering brilliance of past dynasties. The towering gopurams (temple gateways) of the Meenakshi Amman Temple in Madurai and the sacred Rameswaram Temple offer a spiritual journey into an ancient, living tradition.</p>
    <p style={{textAlign:"justify",marginLeft:"15px",marginRight:"15px",marginTop:"-10px"}}>Beyond its spiritual heritage, Tamil Nadu is blessed with a remarkable geographical diversity. The Western and Eastern Ghats converge here, giving rise to serene hill stations like Ooty and Kodaikanal, which offer cool, lush retreats with their rolling tea estates, tranquil lakes, and misty forests. For beach enthusiasts, the coastline stretches for over a thousand kilometers, featuring the world-famous urban expanse of Marina Beach in Chennai and the unique geographical meeting point of three seas at Kanyakumari, home to the iconic Vivekananda Rock Memorial. Furthermore, the state is a hub for the classical arts, being the birthplace of Bharatanatyam and a major center for Carnatic music, which come alive during the vibrant Margazhi music festival. Adding to the charm are its dynamic cuisine, particularly the spicy Chettinad fare, and its thriving handicraft traditions like Kanchipuram silk weaving. From the wildlife sanctuaries like Mudumalai to its forts and vibrant festivals like Pongal, Tamil Nadu offers an "Enchanting" and complete travel experience that seamlessly blends the ancient with the modern, making it an unforgettable destination.</p>
</div>
    
  </div>
</div>

<div id='groupimg'>
  <h1 style={{fontSize:"25px",color:"darkviolet",marginTop:"20px"}}>TamilNadu Temples :-</h1>
  <Marquee>
<img src={require('../assets/images/AlagarKovil.jpg')} alt='alagar'></img> 
<img src={require('../assets/images/Chidambaram.jpg')} alt='chidambaram'></img> 
<img src={require('../assets/images/Kamakshi.jpg')} alt='kamakshi'></img> 
<img src={require('../assets/images/Kanyakumari.jpg')} alt='kumari'></img> 
<img src={require('../assets/images/Madurai.jpg')} alt='madurai'></img> 
<img src={require('../assets/images/srirangam.jpg')} alt='srirangam'></img> 
<img src={require('../assets/images/Thanjavur.jpg')} alt='thanjai'></img> 
<img src={require('../assets/images/Thirupparankundram.jpg')} alt='Thirupparankundram'></img> 
<img src={require('../assets/images/thiruvannamalai.jpg')} alt='thiruvannamalai'></img> 
<img src={require('../assets/images/VaitheeswaranKovil.jpg')} alt='Vaitheeswarankovil'></img> 
</Marquee>
</div>

<div id='endbox' style={{marginTop:"5px"}}>
    <div id='endbox4'>
      <iframe id='id4' title="Embedded YouTube Video: Introduction to React Hooks" src={'https://youtube.com/embed/0e9YmChTepo?si=H4__EVxYjIU7LRh9'}   width="400" height="315" frameborder="0" allowfullscreen></iframe>
    </div>



<div id='endbox1'>
  
<h1>Our Vision</h1><br></br><h6 style={{textAlign:"justify",marginRight:"430px",marginTop:"-30px"}}>The vision for Tamil Nadu tourism is to become the most attractive experiential destination in Asia by developing holistic and sustainable tourism experiences that highlight its diverse cultures, ancient traditions, and natural beauty beyond its traditional temples. Key goals include making tourism a major economic sector through industry status for tourism projects, increasing tourist length of stay and spending, and creating inclusive growth with opportunities for local communities.</h6> 
</div>
<div id='endbox2'>
  <h2>Address</h2> <h6 style={{textAlign:"justify"}}>TamilNadu Tourism Development Corporation Ltd<br></br>
No.2, Tourism Complex, Tourism Complex,<br></br> No.2, Wallajah Road, 2, Wallahjah Rd,<br></br> Mount Road, Anna Salai, Triplicane,<br></br> Chennai, Tamil Nadu 600002.</h6>
</div>
<h6 style={{fontSize:"14px",marginTop:"-10px",marginLeft:"150px",color:"violet",fontWeight:"600"}}>Devoleped by IT Support @Vignesh Kumar</h6>
<div id='endbox3'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1899754.192055738!2d77.85459592499372!3d11.932588316058393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268a0c9d6c88f%3A0x44d5dd2991976424!2sTamilNadu%20Tourism%20Development%20Corporation%20Ltd.!5e1!3m2!1sen!2sin!4v1760520911247!5m2!1sen!2sin" title='Map area' width="370" height="295" style={{border:"2px double gold",}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>



    </>
  )
}

export default Home