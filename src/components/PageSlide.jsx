import * as React from 'react';
import Slide from '@mui/material/Slide';
import About from './About';
import './PageSlide.css';

const page = (type) => {
    switch (type) {
        case 'about':
          return <About />;
        default:
          return <></>;
    }
}

const PageSlide = (props) => {
  const section = props.section;
  const checked = props.checked;

  return (
    <>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <div className='slide'>
          {page(section)}
        </div>
      </Slide>
    </>
  );
}

export default PageSlide;