import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../App.css"

export default function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div className="slider">
        
         <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/b1.png"
          alt="First slide"
          style={{height:"500px"}}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/b2.jpg"
          alt="Second slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/cover.jpeg"
          alt="Third slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <p className="nono">Welcome to HouseScout, your go-to destination for all your real estate needs. 
      Whether you're looking to buy, sell, or rent a property.<br></br> 
      HouseScout is here to help. With HouseScout, you can browse through our extensive selection of properties or list 
    your own property for sale or rent.<br></br> We understand that finding the perfect home or investment
     property can be a daunting task, which is why we strive to make the process as smooth and stress-free as possible.
     Welcome to HouseScout, we can't wait to help you find your dream property!
    </p>
    </div>
  )
}

// render(<ControlledCarousel />);