import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled, { keyframes } from "styled-components";

import Slider from 'react-slick';

const Box = styled.div`
  width: 10rem
`

function App() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
  <div style={{ background: '#545454'}}>
        <h2>Single Item</h2>
        <Slider {...settings}>
          <Box>
            <h3>2</h3>
          </Box>
        </Slider>
      </div>
    
  );
}

export default App;
