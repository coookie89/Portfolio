import './Main.css';
import PageSlide from './PageSlide';
import About from './About';
import Projects from './Projects';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const AboutMe = () => {
    const [checked, setChecked] = React.useState(false);
    const [section, setSection] = React.useState('about');


    const handleSectionOnclick = (type) => {
        setSection(type);
        setChecked((prev) => !prev);
    }

    const openUrl = (type) => {
        let url;
        if (type === 'github')
            url = 'https://github.com/coookie89'
        else if (type === 'linkedin')
            url = 'https://www.linkedin.com/in/chien-hwa-yang'
        else if (type === 'resume')
            url = './Resume_ChienHwaYang.pdf'
        window.open(url);
    };

    return (
        <>
        <div className='main-container'>
            <div className='left'>
                <div className='dp'>
                    <img alt='dp' src='../dp.jpg'/>
                </div>
                <div className='description'>
                    {/* <h2>Iris Yang</h2>
                    <h4>UNSW Student</h4>
                    <p>I develop scalable, user-friendly web applications and am passionate about continuous learning.</p> */}

                    <h2>Hello, My name is <b>Iris</b>.</h2>
                    <h4>I'm a UNSW Student. I develop scalable, user-friendly web applications and am passionate about continuous learning.</h4>
                </div>
                <div className='menu'>
                    <ul>
                        <li onClick={() => handleSectionOnclick('about')}>About</li>
                        <li onClick={() => handleSectionOnclick('experience')}>Experience</li>
                        <li>Projects</li>
                        <li>Education</li>
                    </ul>
                </div>
                <div className='avatar'>
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
                        <Chip
                            avatar={<AccountCircleRoundedIcon />}
                            label="Resume"
                            onClick={() => openUrl('resume')}
                        />
                    </Stack>
                </div>
            </div>
            <div className='right'>
                {/* <PageSlide checked={checked} section={section}/> */}
                <div class='slide' style={{backgroundColor: '#a5a5a5'}}><About /></div>
                <div class='slide'><Projects /></div>
            </div>
        </div>
        
        </>
    )
}

export default AboutMe;