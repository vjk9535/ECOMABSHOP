import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos, Star } from '@mui/icons-material';
export default function ListWoCards({ProdList,slide}) {

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 2,
 }
  return (
    <div style={{position:'relative'}}>
    <Slider ref={sliderRef} {...settings}>
      {ProdList.map((prod) => (
          <Box>
            <img src={''} alt={prod.text} width="100%" height="150vh" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography fontSize={15} fontStyle="normal">
                {prod.name}&nbsp;{"("}{prod.color}{","}{prod.rom}{")"}
              </Typography>&nbsp;
              <div style={{display:'flex', flexDirection:'rows'}}>
              <Card style={{fontSize:'15px',height:20, width:40, paddingLeft:5, alignSelf:'center',backgroundColor:'green',color:'white'}}>
                {prod.rating}<Star fontSize='inherit'/>
              </Card>&nbsp;
              <Typography fontSize={15} fontStyle="normal" color={'GrayText'}>
                {"("}{prod.reviews}{")"}
              </Typography>
              </div>
              <div style={{display:'flex', flexDirection:'rows'}}>
              <Typography fontSize={15} fontWeight="bold">
                 &#8377;{prod.price}
              </Typography>&nbsp;
              <Typography fontSize={15} style={{textDecoration:'line-through'}} color={'GrayText'} >
                 &#8377;{prod.actualprice}
              </Typography>&nbsp;
              <Typography fontSize={15} color={'GrayText'}>
                 {prod.discount}{"%"}&nbsp;off
              </Typography>
              </div>
            </div>
          </Box>
      ))}
    </Slider>
    { currentSlide===0 ? (null
    ):(
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: -5 }}>
      <Button className="button" onClick={previous} variant='outlined' disabled={currentSlide === 0} style={{background: 'white', height: '100px',minWidth:'40px', zIndex: 1,borderTopLeftRadius:0,borderBottomLeftRadius:0  }}>
        <ArrowBackIos style={{fontSize:'15px'}}/>
      </Button>
    </div>
    )}


    {currentSlide === 0 ? (<div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: -5 }}>
      <Button className="button" onClick={next} variant='outlined' disabled={currentSlide === 5} style={{ background: 'white',color:'inherit', height: '100px',minWidth:'40px', zIndex: 1,borderTopRightRadius:0,borderBottomRightRadius:0 }}>
        <ArrowForwardIos style={{fontSize:'15px'}}/>
      </Button>
    </div>
  ):(null)}
  </div>
  )
}
