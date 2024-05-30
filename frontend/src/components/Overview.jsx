import AboutMe from './AboutMe';
import Projects from './Projects';
import './Overview.css';

const Overview = () => {
    
    return (
        <div className='overview-container'>
            <div className='overview-section'>
                <AboutMe />
            </div>
            <div className='overview-section'>
                <Projects />
            </div>
        </div>
    )
}

export default Overview;
