import './AboutMe.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AboutMe = () => {

    const openUrl = (type) => {
        let url;
        if (type === 'github')
            url = 'https://github.com/coookie89'
        else if (type === 'linkedin')
            url = 'https://www.linkedin.com/in/chien-hwa-yang'
        window.open(url);
    };

    return (
        <>
        <div className='main-container'>
            <div className='img-section'>
                <img alt='dp' src='../dp.jpg'/>
            </div>
            <div className='text-section'>
                <h6>UNSW Student</h6>
                <h2>Iris Yang</h2>
                <p>
                    Hello ! I'm a Computer Science bachelor's graduate from Taiwan currently pursuing a Master of Information Technology with a focus on Database System in UNSW, expected to complete my degree by May 2025.
                    Experienced in website building(HTML/CSS & JavaScript), database design(SQL, Python), text-to-speech model application(PyTorch).
                    Seeking an frontend/full-stack engineering internship to enhance my capabilities. I am eager to contribute my skills and learn from experienced professionals in a dynamic and collaborative environment.
                </p>
                <Stack direction="row" spacing={1}>
                    <Chip
                        avatar={<Avatar alt="GitHub" src="github-icon.png"/>}
                        label="GitHub"
                        variant="outlined"
                        onClick={() => openUrl('github')}
                    />
                    <Chip
                        avatar={<Avatar alt="LinkedIn" src="linkedin-icon.webp"/>}
                        label="LinkedIn"
                        onClick={() => openUrl('linkedin')}
                    />
                </Stack>
            </div>
        </div>
        
        </>
    )
}

export default AboutMe;