import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import About from './About';

const page = (
  <div style={{backgroundColor: "#a5a5a5", height: '100%'}}>
    <About />
  </div>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {page}
      </Slide>
    </Box>
  );
}
