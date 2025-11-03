import React from 'react'
import Card from 'react-bootstrap/Card'
import ootyimg from '../assets/spots/ooty.jpg'
import kodaikanalimg from '../assets/spots/unnamed.jpg'
import maduraiimg from '../assets/spots/madurai.jpg'
import mahabalipuram from '../assets/spots/mamallapuram.jpg'
import thanjaiimg from '../assets/spots/thanjavur.jpg'
import Marquee from 'react-fast-marquee'
const ToursistSpots = () => {
   const handleClick = () => {
    window.open('https://en.wikipedia.org/wiki/Ooty', '_blank', 'noopener,noreferrer');
  };
  const handleClick1 = () => {
    window.open('https://en.wikipedia.org/wiki/Kodaikanal', '_blank', 'noopener,noreferrer');
  };
  const handleClick2 = () => {
    window.open('https://en.wikipedia.org/wiki/Madurai', '_blank', 'noopener,noreferrer');
  };
  const handleClick3 = () => {
    window.open('https://en.wikipedia.org/wiki/Mamallapuram', '_blank', 'noopener,noreferrer');
  };
  const handleClick4 = () => {
    window.open('https://en.wikipedia.org/wiki/Thanjavur', '_blank', 'noopener,noreferrer');
  };
  const mystyle={
    marginTop:'120px',
    display :'flex',
    gap:'20px',
    cursor:'pointer'
  }
 
  return (
    <><br></br>
    <Marquee speed={40}><div style={mystyle}>
      
     <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={ootyimg} style={{height:"100%",width:"100%"}}/>
      <Card.Body>
        <Card.Title>Ooty</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
         Ooty is a town and municipality in the Nilgiris district of the Indian state of Tamil Nadu. It is located 86 km (53 mi) northwest of Coimbatore, and is the headquarters of Nilgiris district. Situated in the Nilgiri hills, it is known by the epithet "King of all the Hill Stations", and is a popular tourist destination.
        </Card.Text>
        <button class="btn btn-primary"  onClick={handleClick}> More Info</button>
      
            
          
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={kodaikanalimg} style={{height:"100%",width:"100%"}}/>
      <Card.Body>
        <Card.Title>Kodaikanal</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
        Kodaikanal  is a municipality and hill station in Dindigul district in the state of Tamil Nadu, India. It is situated at an altitude of 2,225 m (7,300 ft) in the Palani hills of the Western Ghats. Kodaikanal was established in 1845 to serve as a refuge from the high temperatures and tropical diseases during the summer in the plains.
        </Card.Text>
        <button class="btn btn-primary"  onClick={handleClick1}> More Info</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={maduraiimg} style={{height:"100%",width:"100%"}}/>
      <Card.Body>
        <Card.Title>Madurai</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
         Madurai is a major city in the Indian state of Tamil Nadu. It is the cultural capital of Tamil Nadu and the administrative headquarters of Madurai district, which is governed by the Madurai Municipal Corporation established on 1 November 1866.  it is the third largest metropolis in Tamil Nadu after Chennai and Coimbatore in terms of population.
        </Card.Text>
        <button class="btn btn-primary"  onClick={handleClick2}> More Info</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={mahabalipuram} style={{height:"100%",width:"100%"}}/>
      <Card.Body>
        <Card.Title>Mahabalipuram</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
         Mamallapuram is a town in Chengalpattu district in the southeastern Indian state of Tamil Nadu, best known for the UNESCO World Heritage Site of 7th- and 8th-century Hindu Group of Monuments at Mahabalipuram. It is one of the famous tourist sites in India. The ancient name of the place is Thirukadalmallai.
        </Card.Text>
        <button class="btn btn-primary"  onClick={handleClick3}> More Info</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={thanjaiimg} style={{height:"100%",width:"100%"}}/>
      <Card.Body>
        <Card.Title>Thanjavur</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
         Thanjavur previously known as Tanjore,is a city in the Indian state of Tamil Nadu. It is the 12th biggest city in Tamil Nadu. Thanjavur is an important center of southern Indian religion, art, and architecture. Most of the Great Living Chola Temples, which are UNESCO World Heritage Monuments, are located in and around Thanjavur.
        </Card.Text>
        <button class="btn btn-primary"  onClick={handleClick4}> More Info</button>
      </Card.Body>
    </Card>&nbsp;
   
    </div>
     </Marquee>
    </>
  )
}

export default ToursistSpots