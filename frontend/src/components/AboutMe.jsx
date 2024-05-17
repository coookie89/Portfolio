import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AboutMe = () => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    return (
        <>
        <div style={{display: 'flex', width:'60%', maxHeight:'100%', margin: 'auto'}}>
            <div style={{backgroundColor: '#a5a5a5', width: '40%'}}>
                <img alt='dp' src='../dp.jpg' style={{borderRadius: '50%', width: '100%', border: '8px solid #ddd'}}/>
            </div>
            <div style={{backgroundColor: '#efefef', padding: '2%', width: '60%', overflow: 'scroll'}}>
                <h6>UNSW Student</h6>
                <h2>Iris Yang</h2>
                <p>
                    Hello ! I'm a Computer Science bachelor's graduate from Taiwan currently pursuing a Master of Information Technology with a focus on Database System, expected to complete my degree by May 2025.
                    Experienced in website building(HTML/CSS & JavaScript), database design(SQL, Python), text-to-speech model application(PyTorch).
                    Seeking an frontend/full-stack engineering internship to enhance my capabilities. I am eager to contribute my skills and learn from experienced professionals in a dynamic and collaborative environment.
                </p>
                <Stack direction="row" spacing={1}>
                    <Chip
                        avatar={<Avatar alt="GitHub" src="github-icon.png" />}
                        label="GitHub"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        avatar={<Avatar alt="LinkedIn" src="linkedin-icon.webp" />}
                        label="LinkedIn"
                        onClick={handleClick}
                    />
                </Stack>
            </div>
        </div>
        
        </>
    )
}

export default AboutMe;