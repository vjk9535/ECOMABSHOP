import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
export default function List({ProdList,slide}) {

  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // const CustomNextArrow = (props) => (
  //   <Button {...props} variant="contained" style={{marginRight:20,background:'red', height: '100px',zIndex:1,position:'absolute'}}>
  //   </Button>
  // );
  
  // const CustomPrevArrow = (props) => (
  //   <Button {...props} variant="contained" style={{marginLeft:20, height: '100px', zIndex:1,position:'absolute'}}>
  //     <ArrowBackIos/>
  //   </Button>
  // );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 2,
    // nextArrow:<CustomNextArrow/>,
    //  prevArrow:<CustomPrevArrow/>
 }
  return (
    <div style={{position:'relative'}}>
    <Slider ref={sliderRef} {...settings}>
      {ProdList.map((prod) => (
          <Card>
            <img src={prod.image} alt={prod.text} width="100%" height="150vh" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography fontSize={15} fontStyle="normal">
                {prod.text}
              </Typography>
              <Typography fontSize={15} fontWeight="bold">
                From &#8377;{prod.price}
              </Typography>
            </div>
          </Card>
      ))}
    </Slider>
    { currentSlide===0 ? (null
    ):(
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0 }}>
      <Button className="button" onClick={previous} disabled={currentSlide === 0} style={{background: 'white', height: '100px',minWidth:'40px', zIndex: 1,borderTopLeftRadius:0,borderBottomLeftRadius:0  }}>
        <ArrowBackIos style={{fontSize:'15px'}}/>
      </Button>
    </div>
    )}


    {currentSlide === 0 ? (<div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 0 }}>
      <Button className="button" onClick={next} disabled={currentSlide === 5} style={{ background: 'white',color:'inherit', height: '100px',minWidth:'40px', zIndex: 1,borderTopRightRadius:0,borderBottomRightRadius:0 }}>
        <ArrowForwardIos style={{fontSize:'15px'}}/>
      </Button>
    </div>
  ):(null)}
  </div>
  )
}
